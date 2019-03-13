class BaseRouteHandler {
    constructor(dependencies) {
        this.dependencies = dependencies;
    }

    async getUserList() {
        return Promise.resolve('Hello World');
    }
}

module.exports = BaseRouteHandler;