exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('https://www.youtube.com/user/NikocadoAvocado');} else {
        message.channel.send(`https://www.youtube.com/user/NikocadoAvocado`)
    }

}

exports.help = {
name: 'youtube'
}