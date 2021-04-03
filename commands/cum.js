exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('Tasty :o');} else {
        message.channel.send(`Tasty :o`)
    }

}

exports.help = {
name: 'cum'
}