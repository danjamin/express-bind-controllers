var fs = require('fs');

function _bindController(app, controller) {
  if (typeof controller === 'function') {
    controller(app);
  }
}

module.exports = function (app, path, isVerbose, filter) {
  var ctrl;

  filter = typeof filter === 'function' ? filter : function (name) {
    return /\.js$/.test(name);
  };

  fs.readdirSync(path).forEach(function (name) {
    if (filter(name)) {
      isVerbose && console.log('Binding controller: ' + name);
      _bindController(app, require(path + '/' + name));
    }
  });
};
