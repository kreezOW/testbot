exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('big benis moment');} else {
        message.channel.send(`big benis moment`)
    }

}

exports.help = {
name: 'sus'
}