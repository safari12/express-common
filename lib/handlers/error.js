class ErrorHandler {
  // eslint-disable-next-line no-unused-vars
  static common(error, req, res, next) {
    res.status(error.status || 500).json({
      error: error.message
    })
  }
}

module.exports = ErrorHandler
