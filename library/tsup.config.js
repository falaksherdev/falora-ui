import React from "react";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.js"],
  format: ["esm", "cjs"],
  dts: false,
  clean: false,
  external: ["react"],
});
