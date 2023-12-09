import axios from 'axios';
const facebookpixel =  async (req, res) => {
  const { data } = req.body;

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v17.0/${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}/events`,
      {
        data,
        test_event_code:'TEST83537',
      },
      {
        params: {
          access_token: process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Server error', error });
  }
};

export default facebookpixel;