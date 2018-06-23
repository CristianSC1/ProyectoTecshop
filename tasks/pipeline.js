
var cssFilesToInject = [
  'styles/dependencies/bootstrap.min.css',
  'styles/dependencies/**/*.css',
  // 'styles/**/*.css'
];

var jsFilesToInject = [

  'js/dependencies/sails.io.js',

  'js/dependencies/jquery-2.1.1.min.js',
  'js/dependencies/**/*.js',
  // '!js/dependencies/language/**',
  // '!js/vendor/*.js',
  // All of the rest of your client-side js files
  // will be injected here in no particular order.
  // 'js/**/*.js'
];


var templateFilesToInject = [
  'templates/**/*.html'
];

module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});
