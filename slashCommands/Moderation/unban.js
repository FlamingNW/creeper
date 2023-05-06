const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
const config = require('../../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("unban")
    .setDescription("Desbanea a un usuario del servidor.")
    .addUserOption(option =>
        option.setName('target').setDescription('Selecciona al usuario que quieres desbanear.').setRequired(true)),
    async run(client, interaction){
        const id = interaction.options.get('target')?.value;
        interaction.guild.members.unban(id);

        const banmessage = new Discord.MessageEmbed()
        .setColor(`${config.colors.red}`)
        .setDescription(`<@${id}> ha sido desbaneado del servidor con éxito!`);
        interaction.reply({ embeds: [banmessage] });
    }
}