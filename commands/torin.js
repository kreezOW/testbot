exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('gay');} else {
        message.channel.send(`gay`)
    }

}

exports.help = {
name: 'torin'
}