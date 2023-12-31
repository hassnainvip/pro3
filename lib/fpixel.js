export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

export const pageview = () => {
  window.fbq('track', 'PageView')
}

// Usage

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}, eventId) => {
  window.fbq('track', name, options, {eventID: eventId} )
}