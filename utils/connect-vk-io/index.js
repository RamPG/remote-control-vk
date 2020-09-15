const { VK } = require('vk-io');
const config = require('../../config/index');

module.exports = {
  vkGroup: new VK({
    token: config.GROUP_TOKEN,
  }),
};
