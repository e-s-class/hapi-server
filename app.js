const pgp = require('pg-promise')();
const BaseAppLoader = require('./lib/base-app-loader');

// Database connection details;
const cn = {
    host: 'cockroachdb', // 'localhost' is the default;
    port: 26257, // 5432 is the default;
    database: 'test_database',
    user: 'root',
};

class AppLoader extends BaseAppLoader {
    constructor(props) {
        super(props);
    }

    updateConfigDependencies() {
        this.dependencies.db =  pgp(cn);
    }
}

module.exports = AppLoader;