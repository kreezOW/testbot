exports.run = async (bot,message,args) => {
    let member = message.mentions.members.first();
    if(!member) { message.channel.send('all commands are : 69, amogus, bonk, bye, cum, dylan, gay, hello, hentai, james, max, penis, porn, pwner, racist, redditor, reece, sex, slav, torin, twitch, virgin, weeb, wellham, youtube');} else {
        message.channel.send(`all commands are : 69, amogus, bonk, bye, cum, dylan, gay, hello, hentai, james, max, penis, porn, pwner, racist, redditor, reece, sex, slav, torin, twitch, virgin, weeb, wellham, youtube`)
    }

}

exports.help = {
name: 'commands'
}