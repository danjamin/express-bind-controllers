var fs = require('fs')

function _bindController(app, controller) {
  if (typeof controller === 'function') {
    controller(app)
  }
}

module.exports = function (app, path, isVerbose) {
  var ctrl

  fs.readdirSync(path).forEach(function (name) {
    isVerbose && console.log('Binding controller: ' + name)
    _bindController(app, require(path + '/' + name))
  })
}
