const websitesDataBase = require("./websites.mongo");

const createWebsite = async (websiteData) => {
  return await websitesDataBase.create(websiteData);
};

module.exports = { createWebsite };
