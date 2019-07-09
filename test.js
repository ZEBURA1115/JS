const Discord = require('discord.js');
const client = new Discord.Client();
client.on('message', message =>
{
    if (message.channel.name === 'cos-chat')
    {
        if (message.author.bot) return;
        if (message.attachments.size <= 0)
        {
            message.delete()
        }
        client.channels.forEach(channel =>
        {
            if (message.attachments.size <= 0)
            {
                const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL)
                    .setDescription(message.content)
                    .setColor(0x2C2F33)
                    .setFooter(message.guild.name, message.guild.iconURL)
                    .setTimestamp()
                if (channel.name === 'cos-chat')
                {
                    channel.send(embed)
                    return;
                }
                return;
            }
            if (!message.attachments.forEach(attachment =>
            {
                const embed = new Discord.RichEmbed()
                    .setAuthor(message.author.tag, message.author.avatarURL)
                    .setImage(attachment.url)
                    .setDescription(attachment.url)
                    .setColor(0x2C2F33)
                    .setFooter(message.guild.name, message.guild.iconURL)
                    .setTimestamp()
                if (channel.name === 'cos-chat')
                {
                    channel.send(embed)
                    return;
                }
                return;
            }));
            return;
        });
    }
})
client.on("ready",()=>{
    client.user.setActivity("JSでのBOT作成中");
});

client.on("message",msg=>{
    switch(msg.content){
        case "Hi":
        msg.reply("Hi! "+msg.author.username);
        break
        case "!ping":
        msg.author.send("TEST");
        break
    }
});

client.on('message', message => {
    if(message.author.bot){
        return;
   }
    if (message.channel.name === 'test') {
        let args = message.content.split(" ").slice(1);
        client.channels.find("name","test").send(args.join(" "));
    }
});
client.on("message",msg=>{
    switch(msg.content){
        case "Hi":
        msg.reply("Hi! "+msg.author.username.botinfo);
        break
        case "!ping":
        msg.author.send("TEST");
        break
        }
});
client.login(process.env.BOT_TOKEN);

