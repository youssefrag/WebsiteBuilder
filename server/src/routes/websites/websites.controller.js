const { createWebsite } = require("../../models/websites.model");

const httpCreateWebsite = async (req, res) => {
  console.log("reached here");
  const websiteData = req.body;
  return res.status(200).json({
    website: await createWebsite(websiteData),
    message: "Website was created",
  });
};

module.exports = { httpCreateWebsite };
