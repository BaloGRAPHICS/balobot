const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("BaloBot, !help");
    console.log("Le bot a bien rejoint le serveur");
});

bot.login("NDEyMjAzMjQ1ODIyNDEwNzUz.DWHI2g.aSPkqwkuZxGH8g6OGJ4DkJNKKYc");
