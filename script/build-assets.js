import fs from "fs";
import path from "path";

console.log("🔧 CyberTech — optimisation des assets...");

const src = "assets/";
const dist = "dist/assets/";

fs.mkdirSync(dist, { recursive: true });

fs.readdirSync(src).forEach(file => {
  fs.copyFileSync(path.join(src, file), path.join(dist, file));
});

console.log("✅ Assets optimisés !");
