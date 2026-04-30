export default {
  fps: 0,

  start() {
    let last = performance.now();
    const loop = () => {
      const now = performance.now();
      this.fps = Math.round(1000 / (now - last));
      last = now;
      requestAnimationFrame(loop);
    };
    loop();
  }
};
`
