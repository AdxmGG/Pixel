mc.hypixelPlayer(args.player, process.env.hypixel_api_key).then(r => {

			let embed = new MessageEmbed()
				.setTitle(`Hypixel Duels Stats for ${args.player}`)
				.addField('Stats', `**Coins:** ${r.statistics.duels.coins} \n**Wins:** ${r.statistics.duels.wins} \n**Losses:** ${r.statistics.duels.losses} \n**Deaths:** ${r.statistics.duels.deaths} \n**Games Played:** ${r.statistics.duels.games_played} \n**Recent Game:** ${r.statistics.duels.recent_games}`)

			msg.channel.send(embed);

		});
