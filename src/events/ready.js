const config = require('../storage/config');

module.exports = async (client) => {
    client.user.setActivity(config.discord.activity);
    console.log(`Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users! - Bot Created By: diverse#6858`);
};