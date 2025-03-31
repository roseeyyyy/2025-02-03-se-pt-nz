class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }
  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

//creating PrecisionClock
class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
      super(prefix)
      this.precision = precision
    }
  
    start() {
      this.display()
      this.timer = setInterval(() => this.display(), this.precision)
    }
}

class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
      super(prefix)
      this.wakeupTime = wakeupTime
    }
}

const myPrecisionClock = new PrecisionClock('Precision clock:', 500)
myPrecisionClock.start()  

const myClock = new DigitalClock("my clock:");
myClock.start();

const myAlarmClock = new AlarmClock('Alarm clock:', '10:30')
myAlarmClock.start()

