const Discord = require("discord.js");
const db = require("quick.db");
const config = require('../../storage/config');

module.exports = {
    name: 'set-channel',
    aliases: [],
    category: 'Mod',
    utilisation: '{prefix}set-channel #name',
  
    execute(client, message, args) {

        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("You dont have permission to do that !")
       }

        let channel = message.mentions.channels.first() || message.channel;
        db.set(`suggestions-channel_${message.guild.id}`, channel.id);

        let successEmbed = new Discord.MessageEmbed();
        successEmbed.setColor(config.colours.defualt);
        successEmbed.setTitle("Channel Set Successfully");
        successEmbed.setDescription(`You set the suggestions channel to \`${channel.name}\``);
        
        message.channel.send(successEmbed).catch(function() {
            return message.channel.send("An internal error occured!")
        })
    },
  };