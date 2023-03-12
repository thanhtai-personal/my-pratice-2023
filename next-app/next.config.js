module.exports = {
  reactStrictMode: false,
  webpack(config) {
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};
