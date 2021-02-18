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

document.querySelector("button").addEventListener("click", throttle(function myEfficientFn(event) {
    console.log("click");
    document.body.classList.toggle("negative");
  }, 2000)
);