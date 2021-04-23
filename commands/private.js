const Discord = require("discord.js");
const { v4: uuidv4 } = require('uuid');

exports.run = (client, message, args, level) => {
    if (message.attachments.size > 0) {
        let msgObj = message.attachments.array();
        let msgURL = msgObj[0].url;
        let privateSender = message.author.id;
        let privateSession = uuidv4();
        const privateEmbed = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle("Private Submission")
            .setURL(msgURL)
            .setImage(msgURL)
            .setFooter("UUID = " + privateSession);

        client.channels.cache.get('831298120095891488').send(privateEmbed)
            .then(message.delete());

    } else {
        message.channel.send("Make sure you attach a photo!");
    }
}



exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["p", "priv"],
    permLevel: "User"
};

exports.help = {
    name: "private",
    category: "Anonymity",
    description: "Allows users to send private images without the risk of being linked.",
    usage: "private [image]"
};