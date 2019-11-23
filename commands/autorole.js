const Discord = require("discord.js");
const  client = new Discord.Client();
client.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "RoleName");
    member.addRole(role).catch(console.error);
});