const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js");
const config = require('../../config/config.json');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Expulsa a un usuario del servidor.")
    .addUserOption(option =>
        option.setName('target').setDescription('Selecciona al usuario que quieres expulsar.').setRequired(true)),
    async run(client, interaction){
        const user = interaction.options.getUser('target');
        interaction.guild.members.kick(user);    

        const kickmessage = new Discord.MessageEmbed()
        .setColor(`${config.colors.green}`)
        .setDescription(`${user} ha sido expulsado del servidor con éxito!`);
        interaction.reply({ embeds: [kickmessage] });
    }
}