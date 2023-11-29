const purify = require("purify-css");

const content = ["services.html"];
const css = ["assets/css/style.css"];

const options = {
  output: "purifyAndMinified.css",
  minify: true,
  info: true,
};

purify(content, css, options, function (purifiedAndMinifiedResult) {
  console.log(purifiedAndMinifiedResult);
});
