const { HearManager } = require('@vk-io/hear');
const bomber = require('../utils/bomber');

const hearManager = new HearManager();

hearManager.hear(/^Start bomber/, async (context) => {
  const info = context.text.split(' ');
  try {
    bomber(info[2], info[3]);
    await context.send('Success');
  } catch (err) {
    await context.send('Something went wrong!');
  }
});

module.exports = hearManager;
