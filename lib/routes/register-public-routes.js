const BaseRouteHandler = require('./base-route-handler');
const { getBaseRoutes } = require('./base-routes');

class RegisterPublicRoutes {
  constructor(dependencies) {
    this.dependencies = dependencies;
    this.baseRouteHandler = new BaseRouteHandler(dependencies);
    this.routes = getBaseRoutes(this.baseRouteHandler);
  }

  init() {

  }

  registerRoutes(server) {
    server.route(this.routes);
  }
}

module.exports = RegisterPublicRoutes;
