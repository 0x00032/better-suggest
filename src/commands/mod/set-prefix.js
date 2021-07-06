const Discord = require("discord.js");
const db = require("quick.db");
const config = require('../../storage/config');

module.exports = {
    name: 'prefix',
    aliases: ["setprefix"],
    category: 'Mod',
    utilisation: '{prefix}setprefix [newprefix]',
  
    execute(client, message, args) {

        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send("You dont have permission to do that !")
        }

        if(!args[0]) {
             message.channel.send("Please specify a prefix you'd like to set!")
        }

        if(args[1]) {
            return message.channel.send("You can not set prefix to a double argument")
        }
    
        if(args[0].length > 3) {
            return message.channel.send("You can not set prefix more than 3 characters")
        }

        db.set(`prefix_${message.guild.id}`, args[0])

        let successEmbed = new Discord.MessageEmbed();
        successEmbed.setColor(config.colours.defualt);
        successEmbed.setTitle("Prefix Set Successfully");
        successEmbed.setDescription(`You set the prefix to \`${args[0]}\``);
        
        message.channel.send(successEmbed).catch(function() {
            return message.channel.send("An internal error occured!")
        })
    },
  };