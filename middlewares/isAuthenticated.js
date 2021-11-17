function isAuthenticated(req, res, next) {
  try {
    if (req.session.username && req.session.password) {
      next()
    } else {
      throw new Error('Not authorized')
    }
  } catch (error) {
    next(error)
  }
}

module.exports = isAuthenticated
