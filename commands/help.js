const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {

    let bicon = client.user.displayAvatarURL;
    var user = message.author;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .addField("prefijo del bot", `!`)
        .addField("Moderacion del server", ' `ban, kick,`')
        .addBlankField()
        .addField("comandos bot",'`**avatar, qrcode, icono, reload, reset,slot,**`')
        .setFooter(`Requested by : ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .setColor('RAMDOM');
        message.channel.send("`"+ user.username + " revisa tus md`")

    message.author.send(botembed);
}