exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('damian or tim i think idk');} else {
        message.channel.send(`damian or tim i think idk`)
    }

}

exports.help = {
name: 'slav'
}