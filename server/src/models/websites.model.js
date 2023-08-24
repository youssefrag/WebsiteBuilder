const websitesDataBase = require("./websites.mongo");

const createWebsite = async (websiteData) => {
  return await websitesDataBase.create(websiteData);
};

const getWebsitesForUser = async (email) => {
  return await websitesDataBase.find({ owner: email });
};

module.exports = { createWebsite, getWebsitesForUser };
