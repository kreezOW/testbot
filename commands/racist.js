exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('james');} else {
        message.channel.send(`james `)
    }

}

exports.help = {
name: 'racist'
}