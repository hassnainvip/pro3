function generateUniqueEventID() {
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 1000000); // Adjust the range as needed
    const eventID = `${timestamp}-${randomNum}`;
    return eventID;
  }

  export default generateUniqueEventID;