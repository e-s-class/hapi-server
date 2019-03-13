const UserService = require('../service/user-service');

class BaseRouteHandler {
    constructor(dependencies) {
        this.dependencies = dependencies;
        this.userService = new UserService(dependencies);
    }

    async getUserList() {
        return this.userService.getUserList();
    }

    async saveUser(user) {
        return this.userService.saveUser(user);
    }
}

module.exports = BaseRouteHandler;