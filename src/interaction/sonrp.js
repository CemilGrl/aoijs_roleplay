const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('sonrp')
    .setDescription('En son rp yaplan kanalı gösterir.')
    .addUserOption(option => option.setName('kullanıcı').setDescription('Bir kullanıcı belirt.').setRequired(false))
    .setDMPermission(false)
}