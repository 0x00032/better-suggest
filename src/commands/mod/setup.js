const Discord = require("discord.js");
const db = require("quick.db");
const config = require('../../storage/config');

module.exports = {
    name: 'setup',
    aliases: [],
    category: 'Mod',
    utilisation: '{prefix}setup',
  
    execute(client, message, args) {

        let prefix = db.get(`prefix_${message.guild.id}`)
        if(prefix === null) prefix = config.discord.prefix;

        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("You dont have permission to do that !")
        }

        let successEmbed = new Discord.MessageEmbed();
        successEmbed.setColor(config.colours.defualt);
        successEmbed.setTitle("Setup Help");
        successEmbed.setDescription(`Current prefix for this guild \`${prefix}\`\n\n**Setup Commands:**\n\`set-channel\` - sets suggestions channel\n\`set-prefix\` - changes the bots prefix for this guild`);
        
        message.channel.send(successEmbed).catch(function() {
            return message.channel.send("An internal error occured!")
        })
    },
  };