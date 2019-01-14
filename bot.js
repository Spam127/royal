const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`skran`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`oplay| Omaaàr RG I Back 2019 Bot`,"http://twitch.tv/y04zgamer")
   client.user.setStatus("dnd")
});

client.login("NTM0MDcwMjY4ODEzOTAxODQ1.Dx4KBg.Y5eJisRnotM9Ewd33FiyRHKtfNE");
