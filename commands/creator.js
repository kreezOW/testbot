exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('crow#9813');} else {
        message.channel.send(`crow#9813`)
    }

}

exports.help = {
name: 'creator'
}