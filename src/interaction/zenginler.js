const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('zenginler')
    .setDescription('Sunucu zenginlik sıralamasını gösterir.')
    .setDMPermission(false)
}