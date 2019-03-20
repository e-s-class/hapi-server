class BaseRouteHandler {
  constructor(dependencies) {
    this.dependencies = dependencies;

  }

  defaultHandler(request, h) {
    return 'Hello world';
  }
}

module.exports = BaseRouteHandler;
