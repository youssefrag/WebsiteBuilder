const websitesDataBase = require("./websites.mongo");

const createWebsite = async (websiteData) => {
  return await websitesDataBase.create(websiteData);
};

const getWebsitesForUser = async (email) => {
  return await websitesDataBase.find({ owner: email });
};

const getWebsiteComponents = async (websiteId) => {
  return await websitesDataBase.findOne({ websiteId }, { components: 1 });
};

module.exports = { createWebsite, getWebsitesForUser, getWebsiteComponents };
