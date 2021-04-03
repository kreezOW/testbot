exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('Max');} else {
        message.channel.send(`Max`)
    }

}

exports.help = {
name: 'weeb'
}