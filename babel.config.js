module.exports = {
  plugins: [
    "@babel/plugin-transform-flow-strip-types",
    "babel-plugin-styled-components",
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current",
            },
          },
        ],
      ],
      plugins: [
        [
          "babel-plugin-styled-components",
          {
            minify: false,
            ssr: false,
            displayName: false,
          },
        ],
      ],
    },
  },
};
