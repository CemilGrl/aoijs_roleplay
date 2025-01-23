const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('bakiye')
    .setDescription('Kullanıcının bakiye bilgilerini gösterir.')
    .addUserOption(option => option.setName('kullanıcı').setDescription('Bir kullanıcı belirt.').setRequired(false))
    .setDMPermission(false)
}