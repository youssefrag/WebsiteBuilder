const { generateUploadURL } = require("../../utils/s3");

const httpGetUploadURL = async (req, res) => {
  const url = await generateUploadURL();
  res.send({ url });
};

module.exports = { httpGetUploadURL };
