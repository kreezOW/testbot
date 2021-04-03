exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('when the imposter is delicious');} else {
        message.channel.send(`when the imposter is delicious`)
    }

}

exports.help = {
name: 'amogus'
}