const Hapi = require('hapi');

const { getBaseRoutes } = require('./routers/base-routes');

class BaseAppLoader {
    constructor() {

    }

    async bootUpApp() {
        this.fetchConfig();
        this.updateConfigDependencies();
        this.createHapiServerInstance();
        await this.registerRouter();
        await this.startServer();
    }

    fetchConfig() {

    }

    updateConfigDependencies() {
        throw 'Need to be implemented!';
    }

    createHapiServerInstance() {
        const server = Hapi.server({
            port: 3000,
            host: 'localhost'
        });

        this.server = server;
    }

    registerRouter() {
        this.server.route(getBaseRoutes());
    }

    async startServer() {
        await this.server.start();
        console.log(`Server running at: ${this.server.info.uri}`);
    }
}

module.exports = BaseAppLoader;
