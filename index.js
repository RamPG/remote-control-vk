const { vkGroup } = require('./utils/connect-vk-io');
const startBomberOne = require('./events/start-bomber-one');
const startBomberSeveral = require('./events/start-bomber-several');

vkGroup.updates.on('message_new', startBomberOne.middleware);
vkGroup.updates.on('message_new', startBomberSeveral.middleware);

vkGroup.updates.start().catch(console.error);
