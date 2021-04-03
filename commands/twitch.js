exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('penis');} else {
        message.channel.send(`penis`)
    }

}

exports.help = {
name: 'twitch'
}