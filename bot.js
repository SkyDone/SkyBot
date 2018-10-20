const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
client.on('message', message => {
    if (message.content === 'ip') {
    	message.reply('IP:158.69.227.64:25863');
client.on('message', message => {
    if (message.content === 'Hi') {
    	message.reply('Hi');
client.on('message', message => {
    if (message.content === 'Version') {
    	message.reply('Version:1.8x-1.12x');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
