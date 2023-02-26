const fs = require("fs");
const path = require("path");
const esbuild = require("esbuild");
const { fileURLToPath } = require("url");

// const __filename = fileURLToPath(import.meta.url); //https://codingbeautydev.com/blog/javascript-dirname-is-not-defined-in-es-module-scope/
// const __dirname = path.dirname(__filename);

const functionsDir = "./";
const outDir = "dist";

const isWatch = false;

// const entryPoints = fs.readdirSync(path.join(__dirname, functionsDir)).map((entry) => `${functionsDir}/${entry}`);

// console.log(entryPoints);

// entryPoints.map((location) => {

  esbuild
    .build({
      entryPoints: ["./index.ts"],
      bundle: true,
      outdir: path.join(__dirname, outDir),
      outbase: functionsDir,
      platform: "node",
      sourcemap: "inline",
    //   watch:  isWatch ?
    //      {
    //         onRebuild(error, result) {
    //           if (error) console.error("Rebuild failed", error);
    //           else {
    //             console.log(`Rebuild succeeded for: ${location || "null"}`);
    //             // HERE: somehow restart the server from here, e.g., by sending a signal that you trap and react to inside the server.
    //           }
    //         },
    //       }
    //     : false,
    })
    .then((result) => {
      console.log("Build successfull");
      if (process.env.watch) {
        console.log("Watching for changes...");
      }
    });
// });
