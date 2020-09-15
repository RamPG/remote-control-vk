const { exec } = require('child_process');
const { vkGroup } = require('./utils/connect-vk-io/index');

vkGroup.updates.on('message_new', (ctx) => {
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
});

vkGroup.updates.start().catch(console.error);
