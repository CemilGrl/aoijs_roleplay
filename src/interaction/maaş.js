const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('maaş')
    .setDescription('Maaş Komutları')
    .addSubcommand(subcommand => subcommand
		.setName('yatır').setDescription('Belirtilen roldeki kullanıcılara para ekler.')
        .addRoleOption(option => option.setName('rol').setDescription('Bir rol belirt.').setRequired(true))
        .addIntegerOption(option  => option.setName('miktar').setDescription('Bir miktar belirt.').setRequired(true))
        .addStringOption(option  => option.setName('not').setDescription('Bir not belirt.').setRequired(false)))
    .setDMPermission(false)
}