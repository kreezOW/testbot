exports.run = async (bot,message,args) => {
        let member = message.mentions.members.first();
        if(!member) { message.channel.send('Shut the fuck up');} else {
            message.channel.send(`Shut the fuck up`)
        }
    
}

exports.help = {
    name: 'hello'
}