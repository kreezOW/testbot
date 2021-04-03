//ODI3NTM0NzEzODIwMDIwODA2.YGcbwg.ykSHs4-mbepVOytkogGZoolhC8o - bot token

const Discord = require('discord.js')
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const fs = require("fs")

bot.on('ready', () => {
    console.log('Bot online')

    fs.readdir('./commands', (err, files) => {
        if (err) return console.log(err);
        let jsfile = files.filter(f => f.split(".").pop() == 'js');

        if(jsfile.length == 0) {return console.log("No commands could be found :(")}

        jsfile.forEach(f => {
            let props = require(`./commands/${f}`)
            bot.commands.set(props.help.name, props)
        })
    })
})

bot.on('message', (message) => {
    if (message.author.bot) return;
    if(message.channel.type !== 'text') return;
    let prefix = '!'
    let MessageArray = message.content.split(' ');
    let cmd = MessageArray[0].slice(prefix.length)
    let args = MessageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;

    let commandFile = bot.commands.get(cmd);
    if(commandFile) {commandFile.run(bot,message,args)}


})

bot.on('channelCreate', (channel) => {
    channel.send('Hi new channel.')
})



bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
});



bot.login("ODI3NTM0NzEzODIwMDIwODA2.YGcbwg.ykSHs4-mbepVOytkogGZoolhC8o")