const { HearManager } = require('@vk-io/hear');
const bomber = require('../utils/bomber');

const hearManager = new HearManager();

hearManager.hear(/^Start bomber at one/, async (context) => {
  const info = context.text.split(' ');
  try {
    bomber(info[4], info[5]);
    await context.send('Success');
  } catch (err) {
    await context.send('Something went wrong!');
  }
});

module.exports = hearManager;
