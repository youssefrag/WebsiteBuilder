const mongoose = require("mongoose");

const headingSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  componentId: {
    type: String,
    required: true,
  },
  details: {
    content: { type: String, required: true },
    fontSize: { type: String, required: true },
    fontType: { type: String, required: true },
    color: { type: String, required: true },
  },
});

const textSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  componentId: {
    type: String,
    required: true,
  },
  details: {
    content: { type: String, required: true },
    lineHeight: { type: String, required: true },
    fontType: { type: String, required: true },
    color: { type: String, required: true },
  },
});

const imageSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  componentId: {
    type: String,
    required: true,
  },
  details: {
    imageName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    width: { type: String, required: true },
  },
});

const websiteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  websiteId: {
    type: String,
    required: true,
  },
  components: {
    type: [headingSchema || textSchema || imageSchema],
    required: true,
  },
});

module.exports = mongoose.model("Website", websiteSchema);
