import { minify } from "terser";
import fs from "fs";

console.log("⚡ CyberTech — minification JS...");

const file = "dist/assets/index.js";
const code = fs.readFileSync(file, "utf8");

minify(code).then(result => {
  fs.writeFileSync(file, result.code);
  console.log("✅ JS minifié !");
});
