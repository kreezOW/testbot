exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('thats gay');} else {
        message.channel.send(`thats gay`)
    }

}

exports.help = {
name: 'penis'
}