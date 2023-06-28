const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "Film",
  },
  {
    tag_name: "Food",
  },
  {
    tag_name: "Art",
  },
  {
    tag_name: "Health",
  },
  {
    tag_name: "Fitness",
  },
  {
    tag_name: "Fine Dining",
  },
  {
    tag_name: "Ourdoors",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
