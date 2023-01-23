import { resolve } from "path";

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        nested: resolve(__dirname, "cat-photo/index.html"),
      },
    },
  },
};
