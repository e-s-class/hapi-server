const getBaseRoutes = (routeHandler) => [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => routeHandler.getUserList()
    }, {
        method: 'POST',
        path: '/user',
        handler: (request, h) => {

            console.log(request.payload);
            const user = JSON.parse(request.payload);

            routeHandler.saveUser(user);

            return {};
        }
    }
];

module.exports = {
    getBaseRoutes,
};