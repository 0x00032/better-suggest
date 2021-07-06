module.exports = {
  name: 'ping',
  aliases: [],
  category: 'Misc',
  utilisation: '{prefix}ping',

  execute(client, message) {
      message.channel.send(`Ping: **${client.ws.ping}ms**`);
  },
};