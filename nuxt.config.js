const isProd = process.env.NODE_ENV === "production";
module.exports = {
  // ...
  env: {
    STATIC_URL: isProd ? `https://${process.env.STATIC_URL}` : "",
  },
  build: {
    extend(config) {
      if (isProd && process.env.STATIC_URL) {
        config.output.publicPath = `https://${process.env.STATIC_URL}/`
      }
    },
  },
  // ...
};
