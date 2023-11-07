function errorHandler(error) {
  if (
    error.response &&
    (error.response.status === 401 || error.response.status === 403)
  ) {
    localStorage.removeItem("access_token");
    document.location.href = "/";
  } else {
    return Promise.reject(error);
  }
}

export default errorHandler;
