
class PGModel {
    constructor(dependencies) {
        this.db = dependencies.db;
    }

    async filter(sqlCmd, values, tx = this.db) {
        return tx.any(sqlCmd, values);
    }

    async getById(sqlCmd, values, tx = this.db) {
        return tx.oneOrNone(sqlCmd, values);
    }

    async insert(...args) {
        return this._none(...args);
    }

    async update(...args) {
        return this._none(...args);
    }

    async delete(...args) {
        return this._none(...args);
    }

    async _none(sqlCmd, values, tx = this.db) {
        return tx.none(sqlCmd, values);
    }

    disconnect() {
        console.log('end');
        db.$pool.end();
    }
}

module.exports = PGModel;