
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
  mc.hypixelPlayer(args[0], process.env.hypixel_api_key).then(r => {
			let embed = new MessageEmbed()
				.setTitle(`Hypixel Duels Stats for ${args.player}`)
				.addField('Stats', `**Coins:** ${r.statistics.duels.coins} \n**Wins:** ${r.statistics.duels.wins} \n**Losses:** ${r.statistics.duels.losses} \n**Deaths:** ${r.statistics.duels.deaths} \n**Games Played:** ${r.statistics.duels.games_played} \n**Recent Game:** ${r.statistics.duels.recent_games}`)
			msg.channel.send(embed);
		});
};
