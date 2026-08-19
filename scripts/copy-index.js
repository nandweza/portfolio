import fs from "fs";
import path from "path";

const source = path.resolve("dist/index.html");
const destination = path.resolve("dist/404.html");

fs.copyFileSync(source, destination);

console.log("Created dist/404.html");