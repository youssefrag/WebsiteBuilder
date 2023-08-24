const websitesDataBase = require("./websites.mongo");

const createWebsite = async (websiteData) => {
  return await websitesDataBase.create(websiteData);
};

const getWebsitesForUser = async (email) => {
  const websites = await websitesDataBase.find({ owner: email });

  return websites;
};

module.exports = { createWebsite, getWebsitesForUser };
