export default {
  mood: "neutral",

  init() {
    this.updateGlow();
  },

  setMood(mood) {
    this.mood = mood;
    this.updateGlow();
  },

  updateGlow() {
    document.body.style.setProperty("--persona-glow", this.mood);
  }
};
`
