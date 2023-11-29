const speedCounter = (setInView, counterRef) => {
  const viewPortOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const callback = (entries) => {
    if (entries[0].isIntersecting) {
      setInView(true);
    }
  };
  const observer = new IntersectionObserver(callback, viewPortOptions);
  observer.observe(counterRef.current);
};

module.exports = speedCounter;
