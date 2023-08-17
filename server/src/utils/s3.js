const S3 = require("aws-sdk/clients/s3.js");
const crypto = require("crypto");

const { promisify } = require("util");

const randomBytes = promisify(crypto.randomBytes);

require("dotenv").config();

const region = "us-east-1";
const bucketName = "websitebuilder-bucket";
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
  //   signatureVersion: "3",
});

const generateUploadURL = async () => {
  console.log("reached here");
  const rawBytes = await randomBytes(16);
  console.log(rawBytes);
  const imageName = rawBytes.toString("hex");
  console.log(imageName);

  const params = {
    Bucket: bucketName,
    Key: imageName,
    // expires: 60
  };

  console.log(params);

  const uploadURL = await s3.getSignedUrlPromise("putObject", params);

  console.log(uploadURL);
  //   return uploadURL;
};

module.exports = { generateUploadURL };
