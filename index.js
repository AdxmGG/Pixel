const http = require("http");
const express = require("express");
const Discord = require('discord.js');
const client = new Discord.Client();
const Database = require("@replit/database")
const db = new Database()
var commands = new Map();
const status = require("./status.js")
const app = express();
const defaultprefix = "/"

require("./commandhandler.js").registerCmds(commands);

client.on("ready", async () => {
  console.log("Loaded "+commands.size+" commands");
	client.user.setPresence({
		activity: {
			name: defaultprefix+"help"
		},
		status: "online"
	});
  setInterval(async function () {
    let statuses = status.status();
    client.user.setPresence({
      status: "idle",
      activity: {
        name: await Placeholders(statuses[Math.floor(Math.random() * statuses.length)])
      },
    });
  }, 30000);
});

client.on("message", async (message) => {
  let prefix = "/" // Temporary
	if (message.channel.type === 'dm' || message.author.bot || !message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
	let args = message.content.split(" ");
  if(!commands.has(args[0].toLowerCase().substring(prefix.length))) return;
  try{
    await require(commands.get(args[0].toLowerCase().substring(prefix.length))).run(
    client,
    message,
    args,
    prefix
  );
  }catch(e){
    console.log("An error occured! Log: "+e)
  }
});

async function Placeholders(status){
  status = status.replace(/{servers}/, client.guilds.cache.size+"");
  status = status.replace(/{prefix}/, defaultprefix);
  return status;
} 

{
  app.get("/*", (request, response) => {
    response.send("<h2>Online</h2>"); // sends http status "OK"
  });
  app.listen(process.env.PORT);
  setInterval(() => {
    http.get(`http://Grass.adammcgrogan200.repl.co`);
  }, 280000);
}

client.login(process.env.token)