// Ensure Lenis script is loaded before initialization
window.addEventListener("load", function () {
  if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({
      duration: 1.2, // duration of the smooth scroll (default is 1.2)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom easing function
      smooth: true, // enable smooth scroll (default is true)
      direction: "vertical", // scroll direction (vertical or horizontal)
      smoothTouch: false, // smooth touch scrolling (default is false)
      wheelMultiplier: 1, // multiplier for wheel events (default is 1)
    });

    // Function to animate the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  } else {
    console.error("Lenis is not loaded");
  }
});
