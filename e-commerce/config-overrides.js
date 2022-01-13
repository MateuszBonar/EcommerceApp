const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    Store: "src/store",
    Hooks: "src/hooks",
    Assets: "src/assets",
    Components: "src/components",
    Commerce: "src/lib",
    Utils: "src/utils",
    Constants: "src/constants",
  })(config);

  return config;
};
