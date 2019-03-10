const getBaseRoutes = (routeHandler) => [{
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello, world!!';
        }
    }
];

module.exports = {
    getBaseRoutes,
};