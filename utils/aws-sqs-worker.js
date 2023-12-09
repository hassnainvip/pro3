import axios from 'axios';
import  crypto from 'crypto';

const ENC= 'bf3c199c2470cb477d907b1e0917c17b';
const IV = "5183666c72eec9e4";
const ALGO = "aes-256-cbc"

// Create an encryption function
function encrypt(text) {
  const cipher = crypto.createCipheriv(ALGO, ENC, IV);
  let encrypted = cipher.update(text, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
}

const SendDataToSqs =  async (body, orderDetails, user_data, totalValue) => {



  const wpApi = process.env.NEXT_PUBLIC_WOOCOMMERCE_API
  const wpApiToken = process.env.NEXT_PUBLIC_WOOCOMMERCE_API_TOKEN;
  const [consumerKey, consumerSecret] = wpApiToken.split(':');


  const encryptedWpApi = encrypt(wpApi);
  const encryptedWp_ck = encrypt(consumerKey);
  const encryptedWp_cs = encrypt(consumerSecret);





  const response = await axios.post('/api/aws-sqs-service', { data: body, order: orderDetails, user_data: user_data, total: totalValue, wp_Api: encryptedWpApi, wp_ck: encryptedWp_ck, wp_Cs: encryptedWp_cs      } );
  console.log('hi', totalValue)
   return response;
}

export default SendDataToSqs;