var prefix = "*"
const Discord = require('discord.js');
const  client = new Discord.Client();
exports.run = async (client, message, args, tools) => {
}

if (message.channel.type === "mensajes-privados") { //if the channel is a DM channel
    var args = message.content.split(" ").slice(0)
    var args = args.slice(0).join(" ") //create the args

    if (message.content.startsWith(prefix)) return message.channel.send(":x: por favor utiliza el comando en un servidor real! :x:") //if the message is a command
    message.channel.send("este mensaje a sido enviado al los moderadores del server! :incoming_envelope:");
    if (message.content.startsWith(prefix)) return
    if (args.length > 256) return message.reply("tu mensaje tiene demasiados caracteres :/") //if the message contnt more than 256 character, what fields do not allow
    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("mensajes privados!")
        .addField(args, "Send by: " + message.author.username + " with the ID: " + message.author.id)
    bot.guilds.get("548136059117109264").channels.get("559817793818591243").send(embed) //send the embed in a specific channel
}


if (message.content.startsWith(prefix + "reply")) {
    if (message.author.id !== "366038927812853763") return message.reply('tu no puedes usar esto!')
    var args = message.content.split(" ").slice(0)
    var Rargs = message.content.split(" ").slice(2).join(" ")
    var userID = args[1]
    if (isNaN(args[1])) return message.reply("eso no es una id!") //if args is Not A Number!
    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle("el equipo LL te ha contestado!")
        .setDescription(Rargs)
        .setFooter("el mensaje a sido enviado para ti: " + message.author.username + " !")
    bot.users.get(userID).send(embed)
    message.channel.send("Send!").catch(console.error) //send the message
    //it may be that if the user has blocked your bot that it does not work
}