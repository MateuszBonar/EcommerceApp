const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    Store: "src/store",
  })(config);

  return config;
};
