const UserAccessor = require('../data-accessor/user-accessor');

class UserService {
    constructor(dependencies) {
        this.dependencies = dependencies;
        this.userAccessor = new UserAccessor(dependencies);
    }

    async getUserList() {
        return await this.userAccessor.getUserList();
    }

    async saveUser(user) {
        return this.userAccessor.saveUser(user);
    }
}

module.exports = UserService;