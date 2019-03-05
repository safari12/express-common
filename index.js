module.exports = {
  handlers: {
    async: require('./lib/handlers/async'),
    error: require('./lib/handlers/error')
  }
}
