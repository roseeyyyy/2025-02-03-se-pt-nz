class libraryLog {
    log(callerId, message) {
      console.log(`[libraryLog][Caller: ${callerId}] ${message}`);
    }
  }
  
  module.exports = libraryLog;
  