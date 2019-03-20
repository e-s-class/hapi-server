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
        this.server.route({
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return 'Hello, world!';
            }
        });
    }

    async startServer() {
        await this.server.start();
        console.log(`Server running at: ${this.server.info.uri}`);
    }
}

module.exports = BaseAppLoader;
