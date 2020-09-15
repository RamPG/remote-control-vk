const { exec } = require('child_process');
const { vkGroup } = require('./utils/connect-vk-io/index');

vkGroup.updates.on('message_new', (ctx) => {
  exec(ctx.text, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    ctx.send('Success');
    ctx.send(stdout);
  });
});

vkGroup.updates.start().catch(console.error);
