const {
  createWebsite,
  getWebsitesForUser,
  getWebsiteComponents,
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
  return res.status(200).json({
    websites: await getWebsitesForUser(email),
    message: "Websites succesfully fetched",
  });
};

const httpGetWebsitesComponents = async (req, res) => {
  const { websiteId } = req.params;

  const { components } = await getWebsiteComponents(websiteId);
  return res.status(200).json({
    components,
    message: "Components succesfully fetched",
  });
};

module.exports = {
  httpCreateWebsite,
  httpGetWebsitesForUser,
  httpGetWebsitesComponents,
};
