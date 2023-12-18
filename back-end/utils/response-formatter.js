function responseFormatter(err, data = null, message=''){
  const response = {};
  response.status = err ? -1 : 200;
  response.message = err ? err.message : message;
  response.data = data;
  return response;
}

module.exports = responseFormatter;