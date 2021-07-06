const Discord = require('discord.js');
const config = require('./storage/config');
const fs = require('fs-extra');

const client = new Discord.Client();

client.commands = new Discord.Collection();

fs.readdirSync('./src/commands').forEach(dirs => {
  const commands = fs.readdirSync(`./src/commands/${dirs}`).filter(files => files.endsWith('.js'));

  for (const file of commands) {
      const command = require(`./commands/${dirs}/${file}`);
      console.log(`[Discord] Loading command ${file}`);
      client.commands.set(command.name.toLowerCase(), command);
  };
});

const events = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));
for (const file of events) {
  console.log(`[Discord] Loading event ${file}`);
  const event = require(`./events/${file}`);
  client.on(file.split(".")[0], event.bind(null, client));
};

client.login(config.discord.token).catch(e => {
    console.log('[Discord] Invalid bot token!');
    process.exit(0)
});