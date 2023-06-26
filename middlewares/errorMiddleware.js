// Defines error handling middleware for handling and formatting errors in a consistent manner.

const ErrorHandler = (err, req, res, next) => {
    
  console.log("Middleware Error Hadnling");
  const errStatus = err.statusCode || 500;
  const errMsg =
    err.message || "No events were found that had the tags you searched for.";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: process.env.NODE_ENV === "development" ? err.stack : {},
  });
};

Module.exports = ErrorHandler;
