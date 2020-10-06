const { HearManager } = require('@vk-io/hear');
const bomber = require('../utils/bomber');

const hearManager = new HearManager();

hearManager.hear(/^Start bomber at several/, async (context) => {
  const info = context.text.split(' ').slice(4);
  const cycles = info[0];
  try {
    info.slice(1).forEach((element) => {
      bomber(element, cycles);
    });
    console.log('Success');
  }
  catch (e) {
    console.log('Error');
  }
});

module.exports = hearManager;
