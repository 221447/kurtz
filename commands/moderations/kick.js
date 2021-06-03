const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "kick",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (!message.member.permissions.has("KICK_MEMBERS")) return;

    const member = message.mentions.first();
    if (!member) return message.reply("Please mention a member to kick!");

    if (message.member.roles.highest.position <= member.roles.highest.position)
      return message.reply(
        "You can punish because u either have the same role or your role is lower."
      );

    const reason = args.slice(1).join(" ") || "No Reason Provided";

    member.kick({ reason });
    message.channel.send(`kick ${member} for ${reason}`);
  },
};
