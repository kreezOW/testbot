exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('nazi');} else {
        message.channel.send(`nazi`)
    }

}

exports.help = {
name: 'wellham'
}