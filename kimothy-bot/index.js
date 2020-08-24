const Discord = require('discord.js');
const client = new Discord.Client();
var botToken = process.env.DISCORD_TOKEN;

client.once('ready', () => {
    console.log('Ready!')
});

client.on('message', message => {
   if(message.content === '!test') {
       message.channel.send('This is a test message!')
   } 
});

client.login(botToken);