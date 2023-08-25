const {
  createWebsite,
  getWebsitesForUser,
  getWebsiteComponents,
  editWebsiteComponents,
  deleteWebsite,
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

const httpEditWebsiteComponents = async (req, res) => {
  const { websiteId } = req.params;
  const newComponents = req.body;

  const editedWebsite = await editWebsiteComponents(websiteId, newComponents);

  return res.status(200).json({
    editedWebsite,
    message: "Website edited succesfully",
  });
};

const httpDeleteWebsite = async (req, res) => {
  const { websiteId } = req.params;
  const deletedWebsite = await deleteWebsite(websiteId);
  return res.status(200).json({
    message: "Website edited succesfully",
    deletedWebsite,
  });
};

module.exports = {
  httpCreateWebsite,
  httpGetWebsitesForUser,
  httpGetWebsitesComponents,
  httpEditWebsiteComponents,
  httpDeleteWebsite,
};
