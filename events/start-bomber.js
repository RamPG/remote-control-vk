const { HearManager } = require('@vk-io/hear');
const bomber = require('../utils/bomber');

const hearManager = new HearManager();

hearManager.hear(/^Start bomber/, async (context) => {
  const info = context.text.split(' ');
  const result = bomber(info[2], info[3]);
  await context.send(result);
});

module.exports = hearManager;
