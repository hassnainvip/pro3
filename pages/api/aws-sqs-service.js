// pages/api/aws-sqs-service.js

import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";
import awsConfig from "../../lib/aws-credentials";
import crypto from "crypto";

const ENC = "bf3c199c2470cb477d907b1e0917c17b";
const IV = "5183666c72eec9e4";
const ALGO = "aes-256-cbc";

const sqsClient = new SQSClient(awsConfig);
const queue_Url = process.env.NEXT_PUBLIC_AWS_QUEUE_URL;

function generateUniqueEventId() {
  return Date.now().toString(); // Use the current timestamp as the event ID
}

// Create a decryption function
function decrypt(text) {
  const decipher = crypto.createDecipheriv(ALGO, ENC, IV);
  let decrypted = decipher.update(text, "base64", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

const awsSqsService =   async (req, res) => {
  const { order, user_data, total, wp_Api, wp_ck, wp_Cs } = req.body;

  const decryptedWpApi = decrypt(wp_Api);
  const decryptedWp_ck = decrypt(wp_ck);
  const decryptedWp_cs = decrypt(wp_Cs);

  const { totalValue } = total;

  try {
    const order_id = generateUniqueEventId();
    const jsonData = JSON.stringify(order);
    const jsonData_User = JSON.stringify(user_data); // Convert the 'data' object to JSON

    const data = {
      order,
      user_data,
      wp_Api: decryptedWpApi,
      wp_ck: decryptedWp_ck,
      wp_Cs: decryptedWp_cs,
    }; // Convert the 'data' object to JSON
    const jsonData_complete = JSON.stringify(data); // Convert the 'data' object to JSON

    const command = new SendMessageCommand({
      MessageBody: jsonData_complete,
      QueueUrl: queue_Url,
      MessageAttributes: {
        OrderId: { DataType: "String", StringValue: order_id },
        OrderDetails: { DataType: "String", StringValue: jsonData },
        UserDetails: { DataType: "String", StringValue: jsonData_User },
        Total: { DataType: "Number", StringValue: totalValue },
      },
    });
    const result = await sqsClient.send(command);
    console.log(order, result);
    res.status(200).json(total);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: "Server error", error });
  }
};

export default awsSqsService;
