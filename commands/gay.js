exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('james, by far');} else {
        message.channel.send(`james, by far`)
    }

}

exports.help = {
name: 'gay'
}