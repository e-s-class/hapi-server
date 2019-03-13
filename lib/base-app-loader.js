const Hapi = require('hapi');

const { getBaseRoutes } = require('./routes/base-routes');

class BaseAppLoader {
    constructor() {
        this.dependencies = {};
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
            host: '0.0.0.0'
        });

        this.server = server;
    }

    async registerRouter() {
        const RegisterRoutes = require('./routes/register-public-routes');

        const routes = new RegisterRoutes(this.dependencies);
        await routes.init(this.server);
        routes.registerRoutes(this.server);
    }

    async startServer() {
        await this.server.start();
        console.log(`Server running at: ${this.server.info.uri}`);
    }
}

module.exports = BaseAppLoader;
