const { VK } = require('vk-io');
const config = require('../config');

module.exports = {
  vkGroup: new VK({
    token: config.GROUP_TOKEN,
  }),
};
