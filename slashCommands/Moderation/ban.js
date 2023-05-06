const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
const config = require('../../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Banea a un usuario del servidor.")
    .addUserOption(option =>
        option.setName('target').setDescription('Selecciona al usuario que quieres banear.').setRequired(true)),
    async run(client, interaction){
        const user = interaction.options.getUser('target');
        interaction.guild.members.ban(user);    

        const banmessage = new Discord.MessageEmbed()
        .setColor(`${config.colors.green}`)
        .setDescription(`${user} ha sido baneado del servidor con éxito!`);
        interaction.reply({ embeds: [banmessage] });

    }
}