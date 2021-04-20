module.exports = (client, member) => {
    const settings = client.getSettings(member.guild);

    if (settings.goodByeEnabled !== "true") return;

    const goodByeMessage = settings.goodByeMessage.replace("{{user}}", member.user.tag);

    member.guild.channels.cache.find(c => c.name === settings.modLogChannel).send(goodByeMessage).catch(console.error);
}