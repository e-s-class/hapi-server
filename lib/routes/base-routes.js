const getBaseRoutes = (routeHandler) => [{
        method: 'GET',
        path: '/',
        handler: (request, h) => routeHandler.getUserList()
    }
];

module.exports = {
    getBaseRoutes,
};