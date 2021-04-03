exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('chad');} else {
        message.channel.send(`chad`)
    }

}

exports.help = {
name: 'max'
}