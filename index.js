const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS","GUILD_MESSAGES"]});

client.on("ready",() => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on("message", msg => {
  if(msg.content === "ping"){
    msg.reply("pong");
  }
  if(msg.content === "f ya life"){
    msg.reply("Bing Bong");
  }
  if(msg.content === "you see these dogs in your front yard?"){
    msg.reply("Just know upstairs i'm going hard");
  }
  if(msg.content === "bing bong"){
    msg.reply("What do you wanna tell Joe Byron right now?");
  }
  if(msg.content === "suh baby"){
    msg.reply("ayo");
  }
});

client.login(process.env.TOKEN);
