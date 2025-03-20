const i18n = require("i18n");

i18n.configure({
  locales: ["ar", "en"],
  directory: __dirname + "/locales",
  defaultLocale: "ar",
  cookie: "lang",
  objectNotation: true,
});

module.exports = i18n;
