import aws from "aws-sdk";

require("dotenv").config();

const region = "us-east-1";
const bucketName = "websitebuilder-bucket";
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3 = new aws.s3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "4",
});
