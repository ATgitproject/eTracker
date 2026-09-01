/**
 * errorHandler.js - catches errors passed via next(err) from any
 * controller and returns a consistent JSON error shape.
 */
// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({ message: err.message || 'Internal server error' });
}

module.exports = { errorHandler };
