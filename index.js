const { exec } = require('child_process');
const { vkGroup } = require('./utils/connect-vk-io');
const startBomber = require('./events/start-bomber');

vkGroup.updates.on('message_new', startBomber.middleware);
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
