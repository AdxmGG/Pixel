function status(){
  return [
    "{prefix}help",
    "{servers} servers"
  ]
} exports.status = status;

async function Placeholders(status){
  status = status.replace(/{servers}/, bot.guilds.cache.size+"");
  return status;
} 
