console.clear();
const { ShardingManager } = require('discord.js');
const config = require('./src/storage/config');

const manager = new ShardingManager('./src/bot.js', { token: `${config.discord.token}` });

manager.on('shardCreate', shard => console.log(`[Discord] Launched shard ${shard.id}`));
manager.spawn();