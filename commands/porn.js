exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('fuck off horny cunt');} else {
        message.channel.send(`fuck off horny cunt `)
    }

}

exports.help = {
name: 'porn'
}