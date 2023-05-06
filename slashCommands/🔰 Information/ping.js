const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Responderé con mi ping en ms.'),
    async run(client, interaction) {
        interaction.reply({ content: `Pong! Le tomó **${client.ws.ping}ms** responder a la API.` })
    }
}