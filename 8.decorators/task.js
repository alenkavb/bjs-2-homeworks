function cachingDecoratorNew(func) {
  // Ваш код
  let cache = {};
  return function (...args) {
    const hash = args.join(',');
    let result = cache[hash];
    const cacheLength = Object.keys(cache).length;
    if (result === undefined) {
      if (cacheLength >= 5) {
        const cacheArr = Object.entries(cache);
        cacheArr.shift();
        cache = Object.fromEntries(cacheArr);
      }
      cache[hash] = result = func.call(this, ...args);
      console.log(`Вычисляем: ${result}`);
      return (`Вычисляем: ${result}`);
    } else {
      console.log(`Из кэша: ${result}`);
      return (`Из кэша: ${result}`);
    }
  }
}


function debounceDecoratorNew(func, ms) {
  // Ваш код
  let timerId = null;
  let flag = true;

  return function (...args) {
    if (timerId) {
      clearTimeout(timerId);
    };

    if (flag) {
      func.call(this, ...args);
      flag = false;
    } else {
      timerId = setTimeout(() => {
        timerId = null;
        func.call(this, ...args);
      }, ms);
    };
  };
}

const debounceDecorator2 = (func, ms) => {
  let timerId = null;

  function wrapper(...args) {
    wrapper.count += 1;

    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      timerId = null;
      func.call(this, ...args);
    }, ms);
  };

  wrapper.count = 0;

  return wrapper;
};



const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecorator2(sendSignal, 2000);

setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
setTimeout(upgradedSendSignal, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal, 4500);

setTimeout(function () {
  console.log(upgradedSendSignal.count);
}, 5000);
