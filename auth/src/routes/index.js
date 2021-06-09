const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const controllers = (dir, config) => {
  return fs.statSync(dir).isDirectory() ? fs.readdirSync(dir).map(f => controllers(path.join(dir, f), config)) : dir;
};
module.exports = (app, config) => {
  _.flattenDeep(controllers(`${config.root}/controllers`, config)).forEach(path => {
    const route = require(path);
    app[route.method](`${config.baseUrl}${route.url}`, (req, res, next) => {
      return route.handler(req, res, next, config).catch(error => {
        res.status(error.code || 500).send({
          message: error.message || 'Something went wrong'
        });
      });
    });
  });
};
