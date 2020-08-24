const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!')
});

client.on('message', message => {
   if(message.content === '!test') {
       message.channel.send('This is a test message!')
   } 
});

client.login('token-goes-here');