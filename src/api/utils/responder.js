const responder = (res, data, errorMessage) => {
  if(data) {
    res.status(200).send({
      status: "success",
      data,
    });
  }
  else {
    res.status(400).send({
      status: "error",
      errorMessage,
    });
  }
};

export {
  responder
}
