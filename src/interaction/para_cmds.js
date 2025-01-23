const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('para')
    .setDescription('Para Komutları')
    .addSubcommand(subcommand => subcommand
		.setName('ekle').setDescription('Kullanıcıya para ekler.')
        .addUserOption(option => option.setName('kullanıcı').setDescription('Bir kullanıcı belirt.').setRequired(true))
        .addIntegerOption(option  => option.setName('miktar').setDescription('Bir miktar belirt.').setRequired(true))
        .addStringOption(option  => option.setName('not').setDescription('Bir not belirt.').setRequired(false)))
    .addSubcommand(subcommand => subcommand
		.setName('gönder').setDescription('Kullanıcıya para gönderir.')
        .addUserOption(option => option.setName('kullanıcı').setDescription('Bir kullanıcı belirt.').setRequired(true))
        .addIntegerOption(option  => option.setName('miktar').setDescription('Bir miktar belirt.').setRequired(true))
        .addStringOption(option  => option.setName('not').setDescription('Bir not belirt.').setRequired(false)))
    .addSubcommand(subcommand => subcommand
		.setName('sıfırla').setDescription('Kullanıcının parasını sıfırlar.')
        .addUserOption(option => option.setName('kullanıcı').setDescription('Bir kullanıcı belirt.').setRequired(true)))
    .setDMPermission(false)
}