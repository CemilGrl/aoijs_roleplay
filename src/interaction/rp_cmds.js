const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('rp')
    .setDescription('Roleplay Komutları')
    .addSubcommand(subcommand => subcommand
		.setName('kelime').setDescription('Kullanıcının roleplay bilgilerini gösterir.')
        .addUserOption(option => option.setName('kullanıcı').setDescription('Bir kullanıcı belirt.').setRequired(false)))
    .addSubcommand(subcommand => subcommand
		.setName('seviye').setDescription('Kullanıcının rol seviyesini gösterir.')
        .addUserOption(option => option.setName('kullanıcı').setDescription('Bir kullanıcı belirt.').setRequired(false)))
    .addSubcommand(subcommand => subcommand
        .setName('sıra')
        .setDescription('Roleplay kelime sıralamasını gösterir.')
        .addStringOption(option => option.setName('liste').setDescription('Bir liste seç.').setRequired(true).addChoices(
            { name: 'Haftalık Sıralama', value: 'rp' },
            { name: 'Toplam Sıralama', value: 'xp' }
        )))
    .addSubcommand(subcommand => subcommand
		.setName('ekle').setDescription('Kullanıcıya rp ekler.')
        .addStringOption(option => option.setName('tür').setDescription('Bir tür seç.').setRequired(true).addChoices(
            { name: 'Haftalık Rol Ekle', value: 'rp' },
            { name: 'Toplam Rol Ekle', value: 'xp' },
            { name: 'İkisinede Rol Ekle', value: 'top' }
        ))
        .addUserOption(option => option.setName('kullanıcı').setDescription('Bir kullanıcı belirt.').setRequired(true))
        .addIntegerOption(option  => option.setName('miktar').setDescription('Bir miktar belirt.').setRequired(true)))
    .addSubcommand(subcommand => subcommand
		.setName('sıfırla').setDescription('Roleplay sıralamasını sıfırlar.'))
        .setDMPermission(false)
}