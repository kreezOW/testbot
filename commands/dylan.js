exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('shut the fuck up you little bitch');} else {
        message.channel.send(`shut the fuck up you little bitch`)
    }

}

exports.help = {
name: 'dylan'
}