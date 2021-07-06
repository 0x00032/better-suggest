const Discord = require('discord.js');
const db = require("quick.db");
const config = require('../../storage/config');

module.exports = {
    name: 'suggest',
    aliases: [],
    category: 'Misc',
    utilisation: '{prefix}suggest [your suggestion]',
  
    execute(client, message, args) {

        const caEmbed = new Discord.MessageEmbed();
        caEmbed.setColor(config.colours.error);
        caEmbed.setDescription("**Suggestions channel not set!** (Contact server owner)");

        const naEmbed = new Discord.MessageEmbed();
        naEmbed.setColor(config.colours.error);
        naEmbed.setDescription("**You didn't suggest anything!**");

        let suggest_channel = db.get(`suggestions-channel_${message.guild.id}`);
        if(suggest_channel === null) {
            return message.channel.send(caEmbed);
        } else {

            if (!args) message.channel.send(naEmbed);
            let customArgs = args.slice(0).join(' ');
            var channel = client.channels.cache.get(suggest_channel);

            const doneEmbed = new Discord.MessageEmbed();
            doneEmbed.setColor(config.colours.defualt);
            doneEmbed.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic : true})}`);
            doneEmbed.setDescription(`✅ your suggestion has been sent to <#${suggest_channel}> to be voted on.`);

            message.channel.send(doneEmbed);

            const suggestEmbed = new Discord.MessageEmbed();
            suggestEmbed.setColor(config.colours.defualt);
            suggestEmbed.setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({dynamic : true})}`);
            suggestEmbed.setDescription(`\`${customArgs}\``);
            suggestEmbed.setFooter(`User id: ${message.author.id} | Powered by BetterSuggest`);
            let sentEmbed = channel.send(suggestEmbed).then(function (message) {
                message.react("✅")
                message.react("😑")
                message.react("❌")
            }).catch(function() {
                return;
            });
        }
    },
  };