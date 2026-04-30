export default {
  events: [],

  track(type, data = {}) {
    this.events.push({ type, data, time: Date.now() });
  }
};
`
