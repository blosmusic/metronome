function Timer(callback, timeInterval, errorCallback) {
  this.timeInterval = timeInterval;

  this.start = () => {
    //start timer
    this.start = () => {
      //set expected time
      this.expected = Date.now() + this.timeInterval;
      this.timeout = setTimeout(this.round, this.timeInterval);
    };
  };

  this.stop = () => {
    //stop timer
    clearTimeout(this.timeout);
  };

  //takes care of running callbacks and adjusting the time interval
  this.round = () => {
    let drift = Date.now() - this.expected;

    //check if drift is greater than time interval and run error callback if true
    if (drift > this.timeInterval) {
      if (errorCallback) {
        errorCallback();
      }
    }

    callback();
    this.expected += this.timeInterval;
    this.timeout = setTimeout(this.round, this.timeInterval - drift);
  };
}
