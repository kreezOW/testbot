exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('nice');} else {
        message.channel.send(`nice`)
    }

}

exports.help = {
name: '69'
}