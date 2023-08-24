const {
  createWebsite,
  getWebsitesForUser,
} = require("../../models/websites.model");

const httpCreateWebsite = async (req, res) => {
  const websiteData = req.body;
  return res.status(200).json({
    website: await createWebsite(websiteData),
    message: "Website was created",
  });
};

const httpGetWebsitesForUser = async (req, res) => {
  const { email } = req.params;
  const websites = await getWebsitesForUser(email);
  console.log(websites);
  // return res.status(200)({
  //   websites: await getWebsitesForUser(email),
  //   message: "Websites succesfully fetched",
  // });
};

module.exports = { httpCreateWebsite, httpGetWebsitesForUser };
