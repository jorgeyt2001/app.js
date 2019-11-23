// Require Packages
const Discord = require('discord.js');
const  bot = new Discord.Client();
// Command Handler
 {
    
    // Variables
    let servers = client.guilds.size; // Server Count
    let users = 0; // Start of user count
    let channels = client.channels.size; // Channel Count
    
    // This goes through every guild to grab an accurate memberCount;
    client.guilds.map(g => users += g.memberCount);
    
    // Form Embed
    const embed = new Discord.MessageEmbed()
        .setTitle('Community Channels')
        .addField('Servers', servers, true)
        .addField('Users', users, true)
        .addField('Channels', channels, true);

    // Send Embed
    message.channel.send(embed);
    
}