const { Client, Message, MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "website-check",
  aliases: ["web-check", "check-web"],
  usage: "web-url",
  description: "Check a Website is Up or Down",
  hidden: false,
  premium: false,
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const url = args[0];
    if (!url) return message.lineReply("Please define a URL to Check!");
    try {
      await fetch(url).then((res) => {
        if (!res)
          return msg.reply(message, `:x: | Looks like this website is down...`);
        return msg.reply(message, `✅ | This website is up and running!`);
      });
    } catch (e) {
      return msg.reply(message, `:x: | Looks like this website is down...`);
    }
  },
};
