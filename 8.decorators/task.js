function cachingDecoratorNew(func) {
  const cache = {};

  return function(...args) {
    let keys = Object.keys(cache);
    if (keys.length > 5) {
        let key = keys[0];
        delete cache[key];
      }

    const hash = args.join(',');
    let result = cache[hash];
    
    if (result === undefined) {
      cache[hash] = result = func.call(this,...args);
      return ('Вычисляем: ' + result);
    } else {
      return ('Из кэша: ' + result);
    }

    return result;
  };
}


function debounceDecoratorNew(func, ms) {
  let timerId = false;
 
  return function(...args) {
    if (timerId) return;

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(this,args);
      timerId = false;
      console.timeEnd('time');
    }, ms);
  }
}


function debounceDecorator2(func, ms) {
  let timerId = false;
  let count;


  return function(...args) {
    count += 1; 
    if (timerId) return;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this,args);
      timerId = false;
      console.timeEnd('time');
    }, ms);
    return count;
  }
}
