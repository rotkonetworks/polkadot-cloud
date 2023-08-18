/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve, { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import del from "rollup-plugin-delete";
import copy from "rollup-plugin-copy";
import cleanup from "rollup-plugin-cleanup";
import removeLines from "./plugins/rollup-plugin-remove-lines.mjs";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "lib/index.tsx",
  output: [
    {
      file: "dist/index.tsx",
      format: "es",
      sourcemap: false,
    },
  ],
  plugins: [
    del({ targets: "dist/*" }),
    peerDepsExternal(),
    resolve(),
    nodeResolve(),
    postcss({
      config: {
        path: "postcss.config.mjs",
      },
      extensions: [".css", ".scss"],
      minimize: true,
      modules: false,
      extract: "index.css",
    }),
    typescript(),
    copy({
      targets: [
        {
          src: "lib/styles/fonts/**/*",
          dest: "dist/fonts",
        },
      ],
    }),
    cleanup({
      extensions: ["tsx", "ts"],
    }),
    removeLines({
      entry: "dist",
      extensions: [".ts"],
      lines: [
        'import "./index.scss";',
        'import "./styles.scss";',
        'import "./styles/index.scss";',
      ],
    }),
  ],
  external: [
    "@fortawesome/react-fontawesome",
    "framer-motion",
    "prop-types",
    "react",
    "react-dom",
  ],
};