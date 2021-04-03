exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('a huge fucking retard, so retarded its not even funny.');} else {
        message.channel.send(`a huge fucking retard, so retarded its not even funny.`)
    }

}

exports.help = {
name: 'james'
}