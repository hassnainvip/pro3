import axios from 'axios';
import Cookies from 'js-cookie';
const fbpCookieValue = Cookies.get('_fbp');


async function fetchIpAddress() {
  try {
    const response = await fetch('https://api64.ipify.org?format=json');
    const data = await response.json();
    const ipv4 = data.ip;
    return ipv4;
  } catch (error) {
    console.error('Error fetching IP address:', error);
    return null;
  }
}

async function main() {
  const ipv6Address = await fetchIpAddress();
  if (ipv6Address) {
    console.log('IPv6 Address:', ipv6Address);
  } else {
    console.log('Failed to fetch IPv6 address.');
  }
}

main();

function generateUniqueEventId() {
  return Date.now().toString(); 
}
export default async function trackFacebookPixelEvent(user_data, event_data, eventId) {

  console.log(event_data);
  try {
    const ipAddress = await fetchIpAddress();
    // const eventId = generateUniqueEventId();

    const eventTime = Math.floor(Date.now() / 1000);
    if (ipAddress) {
      const response = await axios.post('/api/facebook-pixel', {
        data: [
          {
            ...user_data[0], // Keep the original user_data properties
            user_data: {
              ...user_data[0].user_data, // Keep the original user_data.user_data properties
              fbp: fbpCookieValue,
              client_ip_address: ipAddress,
              client_user_agent: navigator.userAgent,
               fn:  [user_data[0].custom_data.fn],
               ln:  [user_data[0].custom_data.ln],
               em:  user_data[0].custom_data.email,
               ph: user_data[0].custom_data.ph,
              //  fbc: fbc_data


              ...event_data

            },
            event_time: eventTime, // Add the Unix timestamp
            event_id: eventId, // Add the unique event ID
          },
        ],
      });

      console.log('Facebook Pixel Event Tracked:', response.data);
    } else {
      console.error('IP address not available.');
    }
  } catch (error) {
    console.error('Error tracking Facebook Pixel event:', error);
  }
}