const { HearManager } = require('@vk-io/hear');
const bomber = require('../utils/bomber');

const hearManager = new HearManager();

hearManager.hear(/^Start bomber at several/, async (context) => {
  const info = context.text.split(' ').slice(5);
  try {
    info.forEach((element) => {
      bomber(element, 2);
    });
    console.log('Success');
  }
  catch (e) {
    console.log('Error');
  }
});

module.exports = hearManager;
