// import aws from "aws-sdk";
// import { randomBytes } from "crypto";
// import { promisify } from "util";

// require("dotenv").config();

// const region = "us-east-1";
// const bucketName = "websitebuilder-bucket";
// const accessKeyId = process.env.AWS_ACCESS_KEY;
// const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

// const s3 = new aws.s3({
//   region,
//   accessKeyId,
//   secretAccessKey,
//   signatureVersion: "4",
// });

// const generateUploadURL = async () => {
//   const rawBytes = await randomBytes(16);
//   const imageName = rawBytes.toString("hex");

//   const params = { Bucket: bucketName, key: imageName, expires: 60 };

//   const uploadURL = await s3.getSignedUrlPromise("putObject", params);
//   return uploadURL;
// };

// module.exports = { generateUploadURL };
