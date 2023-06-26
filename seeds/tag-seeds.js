const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'Film',
    },
    {
        tag_name: 'Food',
    },
    {
        tag_name: 'Art'
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;