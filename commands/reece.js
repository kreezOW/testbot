exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('furry');} else {
        message.channel.send(`furry`)
    }

}

exports.help = {
name: 'reece'
}