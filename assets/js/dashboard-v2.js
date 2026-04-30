import monitor from "./system-monitor.js";
import tracking from "./tracking-core.js";

monitor.start();

document.addEventListener("click", e => {
  tracking.track("click", { target: e.target.tagName });
});
`
