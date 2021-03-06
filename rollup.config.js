import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import { routify } from "@sveltech/routify";
import pkg from "./package.json";
import { config } from "dotenv";
import replace from "@rollup/plugin-replace";
import css from "rollup-plugin-css-only";

const production = !process.env.ROLLUP_WATCH;

export default {
  entry: "entry.js",
  dest: "bundle.js",
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
    globals: {
      "pocket-promise": "Pocket",
      "svelte-loading-spinners": "svelteLoadingSpinners",
    },
  },

  // // *** ONLY FOR CODE SPLITTING ***
  // output: {
  // 	sourcemap: true,
  // 	format: 'esm',
  // 	name: 'app',
  // 	dir: 'public/bundle/'
  // },
  plugins: [
    replace({
      // stringify the object
      process: JSON.stringify({
        env: {
          isProd: production,
          ...config().parsed, // attached the .env config
        },
      }),
    }),
    routify({
      singleBuild: production,
    }),
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file - better for performance
      emitCss: false, // without this, <style> in components are not included in bundle
      //   css: (css) => {
      //     css.write("public/build/bundle.css");
      //   },
    }),
    css({ output: "bundle.css" }),
    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      // dedupe: ['svelte', "pocket-promise"]
    }),
    commonjs(),

    // In dev mode, call `npm run start` once
    // the bundle has been generated
    !production && serve(),

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && livereload("public"),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
  ],
  external: Object.keys(pkg.dependencies).concat(["pocket-promise"]),
  watch: {
    clearScreen: false,
  },
};

function serve() {
  let started = false;

  return {
    writeBundle() {
      if (!started) {
        started = true;

        require("child_process").spawn("npm", ["run", "start", "--", "--dev"], {
          stdio: ["ignore", "inherit", "inherit"],
          shell: true,
        });
      }
    },
  };
}
