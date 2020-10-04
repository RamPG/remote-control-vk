const { HearManager } = require('@vk-io/hear');
const bomber = require('../utils/bomber');

const hearManager = new HearManager();

hearManager.hear(/^Start bomber/, async (context) => {
  const info = context.text.split(' ');
  bomber(info[2], info[3]);
});

module.exports = hearManager;
