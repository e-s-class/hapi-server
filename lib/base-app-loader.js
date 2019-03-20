const Hapi = require('hapi');

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
        const Routes = require('./routes/register-public-routes');

        const routes = new Routes(this.dependencies);

        routes.init();
        routes.registerRoutes(this.server);
    }

    async startServer() {
        await this.server.start();
        console.log(`Server running at: ${this.server.info.uri}`);
    }
}

module.exports = BaseAppLoader;
