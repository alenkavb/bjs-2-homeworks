//  Задача №1

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, fn, id) {
    if (id === undefined) throw new Error('error text');
    try {
      if ((this.alarmCollection.findIndex(alarm => alarm.callId === id)) !== -1) {
        throw new Error("Такой будильник уже существует");
      } else {
        this.alarmCollection.push({ time, fn, callId: id });
        return console.log(this.alarmCollection)
      }
    } catch (err) {
      return console.log(err);
    }
  }

  removeClock(id) {
    const index = this.alarmCollection.findIndex(alarm => alarm.callId === id);
    if (index !== -1) {
      this.alarmCollection.splice(index, 1);
      return console.log(true);
    }
    return console.log(false);
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
    const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
    return (`${hours}:${minutes}`);
  }

  #checkClock(clock) {
    if (clock.time === this.getCurrentFormattedTime()) {
      clock.fn();
    }
  }

  start() {
    if (this.timerId === null) {
      this.timerId = setInterval((() =>
        (this.alarmCollection.every(alarm => this.#checkClock(alarm)))), 6000);
    }
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log(`Печать всех будидьников в количестве ${this.alarmCollection.length}`);

    this.alarmCollection.forEach(alarm => console.log(`Будильник №${alarm.callId} взведен на ${alarm.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection.splice(0, this.alarmCollection.length);
  }
}

function testCase() {
  const alarmClock = new AlarmClock;

  alarmClock.addClock('09:30', () => console.log('Wake up!'), 1);
  alarmClock.addClock('09:31', () => { console.log('Wake up!!'); removeClock(2) }, 2);
  alarmClock.addClock('09:32', () => {
    console.log('Wake up!!!');
    clearAlarms();
    printAlarms();
  }, 3);

  alarmClock.addClock("16:45", f => f, 1);
  alarmClock.addClock("14:40", f => f, 4);

  alarmClock.printAlarms();
  alarmClock.removeClock(4);
  alarmClock.start();
  alarmClock.clearAlarms();
}

testCase();
