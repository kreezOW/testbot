exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('epic');} else {
        message.channel.send(`epic`)
    }

}

exports.help = {
name: 'sex'
}