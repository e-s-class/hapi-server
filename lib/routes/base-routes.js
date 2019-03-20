const getBaseRoutes = (routeHandler) => [{
  method: 'GET',
  path: '/',
  handler: routeHandler.defaultHandler,
}];

module.exports = {
  getBaseRoutes,
};
