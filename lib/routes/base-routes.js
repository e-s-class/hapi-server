const getBaseRoutes = (routeHandler) => [
    {
        method: 'GET',
        path: '/',
        handler: () => 'Hello World!!'
    },
    {
        method: 'GET',
        path: '/users',
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