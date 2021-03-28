function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

let myDebouncedFn = debounce(function clickedFunction(event) {
  console.log("click");
  document.body.classList.toggle("negative");
}, 500);

document.getElementById("debounce-button").addEventListener("click", myDebouncedFn);

const throttle = (func, limit) => {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

document.getElementById("throttle-button").addEventListener("click", throttle(function myThrottledFn(event) {
  console.log("click");
  document.body.classList.toggle("negative");
}, 2000)
);