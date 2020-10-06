const { exec } = require('child_process');
const { vkGroup } = require('./utils/connect-vk-io');
const startBomberOne = require('./events/start-bomber-one');
const startBomberSeveral = require('./events/start-bomber-several');

vkGroup.updates.on('message_new', startBomberOne.middleware);
vkGroup.updates.on('message_new', startBomberSeveral.middleware);
/*vkGroup.updates.on('message_new', (ctx) => {
  exec(ctx.text, (error, stdout, stderr) => {
    if (error) {
      ctx.send(error);
      return;
    }
    if (stderr) {
      ctx.send(stderr);
      return;
    }
    ctx.send('Success');
    ctx.send(stdout);
  });
}); */

vkGroup.updates.start().catch(console.error);
