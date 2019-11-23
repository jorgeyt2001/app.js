const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");
const qrcode = require("qrcode");
const tempy = require("tempy");
const colours = require("./colours.json");

client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));



const tags  =  client.users.map(u =>  `${u.username}#${u.discriminator}`).join(", ");


client.on("ready", () => {
  console.log(`Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
  client.user.setPresence( {
      status: "online",
      game: {
          name: `!help | Estoy en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`,
          url: "https://www.twitch.tv/jorge_yt2001",
          type: "playing"
      }
   });
});

client.on('ready', () => {
  setInterval(() => {
      dbl.postStats(client.guilds.size, client.shards.Id, client.shards.total);
  }, 1800000);
});

client.on("guildMemberAdd", (member) => {
  console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
  var canal = client.channels.get('642169012125433876'); 
  
});


var prefix = config.prefix;



/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'commands-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`bienvenido al mejor servidor gaming, ${member}`);
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NTQ4MTU5NjM4ODIyOTc3NTY2.XcQ6tw.UwEldLSr-iXLFFKrTMhVytfieAo');

client.on("guildMemberAdd", function(member) {
  let role = member.guild.roles.find("name", "BABYS");
  member.addRole(role).catch(console.error);
});

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "a que estas jugando")) {
    message.channel.send("estoy jugando a follarme a tu puta madre bro!");
  } else
  if (message.content.startsWith(prefix + "hola")) {
    message.channel.send("adios tonto");
  }


if (message.content.startsWith(prefix + "fumarse un porro"))message.channel.send('**una buena hostia en los pulmones**').then(async msg => {
    setTimeout(() => {
        msg.edit(`${message.member} 🚬`);
    }, 1000);
    setTimeout(() => {
        msg.edit(`${message.member}🚬 ☁ `);
    }, 2000);
    setTimeout(() => {
        msg.edit(`${message.member}🚬 ☁☁ `);
    }, 3000);
    setTimeout(() => {
        msg.edit(`${message.member}🚬 ☁☁☁ `);
    }, 4000);
    setTimeout(() => {
        msg.edit(`${message.member}🚬 ☁☁`);
    }, 5000);
    setTimeout(() => {
        msg.edit(`${message.member}🚬 ☁`);
    }, 6000);
    setTimeout(() => {
        msg.edit(`${message.member}🚬 `);
    }, 7000);
    setTimeout(() => {
        msg.edit(`${message.member}has terminado de darte una hostia en el pecho`);
    }, 8000);
})

});









client.on("message", message => {
    if(message.author.bot) return;
      const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(message.content.indexOf(config.prefix) !== 0) return;

  console.log("[EJECUCION]: " + message.author.tag + " a ejecutado --> '" + command + "'");

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args, Discord);
  } catch (err) {
    console.log("[ERROR]: '" + command + "' no existe el comando.");
    console.error("[ERROR]: " + err.message);
  }

}); 



  



client.login(config.token);     
        