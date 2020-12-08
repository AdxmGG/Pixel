const Database = require("@replit/database")
const db = new Database()
const botdevs = ["547499928721555467", "314166178144583682"];
const discord = require("discord.js");
exports.info = {
  name: "help",
  alts: ["h"],
  description: "Bot help",
};

exports.run = async function (bot, msg, args, prefix) {
  const embed = new discord.MessageEmbed()
      .setColor('#00FFFF')
      .addFields({ name: `Mojang API`, value: `\`status\`,\`uuid\``, inline: true })
      .setTimestamp()
      .setFooter(`Requested by @${msg.member.user.tag}`, msg.author.avatarURL);
    msg.channel.send(embed);
};