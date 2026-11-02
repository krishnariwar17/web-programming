const notFound = (req, res) => {
  res.status(404).json({ success: false, message: `Route not found: ${req.method} ${req.originalUrl}` });
};

const errorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ success: false, message: 'Validation failed', errors });
  }
  if (err.code === 11000) {
    return res.status(409).json({ success: false, message: 'Duplicate value', fields: err.keyValue });
  }
  console.error(err);
  res.status(500).json({ success: false, message: err.message || 'Server error' });
};

module.exports = { notFound, errorHandler };
