const Discord = require("discord.js");

module.exports = () => async (message) => {
  let embed = new Discord.MessageEmbed()
    .setColor("36393f")
    .addFields({
      name: "Help Links",
      value: `[GitHub](https://github.com/samRBLX/moblox-bot 'Documentation')
        [Support Discord](https://discord.gg/vDsyKA 'optional hovertext')
        ('optional hovertext')`,
    })
    .setFooter("BloxyBorg by Wyatt.#7553")
    .setTimestamp()
    .setThumbnail(message.author.avatarURL());
  await message.author.send(embed);

  //  `jdsaoijdioajdiojsad asdoias doas doasjddo jo ${message.author}`
};
