function writeCards(namesArray, eventName) {
    const messages = [];
    
    for (let i = 0; i < namesArray.length; i++) {
      const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      messages.push(message);
    }
    
    return messages;
  }

  function countDown(startingNumber) {
    
    if (startingNumber <= 0 || !Number.isInteger(startingNumber)) {
      console.log("Please provide a positive integer as input.");
      return;
    }
  
    while (startingNumber >= 0) {
      console.log(startingNumber);
      startingNumber--;
    }
  }
  
