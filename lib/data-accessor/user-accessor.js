const PGModel = require('../base-lib/pg-model');

class UserAccessor extends PGModel {
    constructor(dependencies) {
        super(dependencies);

        this.dependencies = dependencies;
    }

    async getUserList() {
        return this.filter('select data from taxonomy', []);
    }

    async saveUser(user) {
        return this.insert(`
        insert into taxonomy (id, data) values ($1, $2)
            on conflict (id) do update set data = $2, modified_date = current_timestamp;
        `, [user.id, user]);
    }
}

module.exports = UserAccessor;