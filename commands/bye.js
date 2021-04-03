exports.run = async (bot,message,args) => {
        let member = message.mentions.members.first();
        if(!member) { message.channel.send('good');} else {
            message.channel.send(`good`)
        }
    
}

exports.help = {
    name: 'bye'
}