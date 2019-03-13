const { getBaseRoutes } = require('./base-routes');
const BaseRouteHandler = require('./base-route-handler');

class RegisterRoutes {
    constructor(dependencies) {
        this.dependencies = dependencies;

        this.baseRouteHandler = new BaseRouteHandler(dependencies);
        this.routes = getBaseRoutes(this.baseRouteHandler);
    }

    async init() {
        console.log('initialize routes');
    }

    registerRoutes(server) {
        console.log('registering public routes');

        server.route(this.routes);
    }
}

module.exports = RegisterRoutes;