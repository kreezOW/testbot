exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('go to horny jail');} else {
        message.channel.send(`go to horny jail`)
    }

}

exports.help = {
name: 'bonk'
}