const ytdl = require('ytdl-core');
const Discord = require("discord.js");

exports.run = async (bot, message, args, ops) =>{
    
if (!message.member.voicechannel) return message.channel.send(`please connect to a voice channel.`);
if (message.guild.me.voicechannel) return message.channel.send(`sorry, the bot is already connected to the guild.`);
if (!args[0]) return message.channel.send(`sorry, please intput a url following the command.`);

 let validate = await ytdl.validateURL(args[0]);

 if (!validate) return message.channel.send(`sorry, please input a **valid** url following the command.`);

let info = await ytdl.getInfo(args[0]);

let connection = await message.member.voicechannel.join();

let dispatcher = await connection.play(ytdl(args[0], {filter: `audioonly`}));

Message.Channel.send(`now playing: ${info.title}`);

}













