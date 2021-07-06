const config = require('../storage/config');
const db = require("quick.db")

module.exports = (client, message) => {
    if (message.author.bot || message.channel.type === 'dm') return;

    let prefix = db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = config.discord.prefix;

    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (cmd) cmd.execute(client, message, args);
};