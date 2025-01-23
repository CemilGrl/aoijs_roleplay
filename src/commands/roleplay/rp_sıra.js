module.exports = [{
    name: "rp",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionreply[;{newEmbed:{color:$getvar[hex]}
    {author:$guildname:$guildicon}
    {title:Roleplay Sıralaması}
    {thumbnail:$guildicon}
    {description:$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$userleaderboard[$guildid;$slashoption[liste];asc;\`#{top}\` <@{id}> <a:arsen_dekorokmavi:1331858241252098162> **{value}** Kelime];#1;🥇;1];#2;🥈;1];#3;🥉;1];#4;🎖️;1];#5;🎖️;1]}
    {footer:Toplam $numberseparator[$math[$replacetext[$userleaderboard[$guildid;$slashoption[liste];asc;{value};$memberscount[$guildid;all;no];1];\n;+]];.] kelime yazılmış.:$guildicon}{timestamp}}
	$textsplit[$userleaderboard[$guildid;$slashoption[liste];asc;{value};$memberscount[$guildid;all;no];1];\n]
    $onlyIf[$checkcondition[$userleaderboard[$guildid;$slashoption[liste];asc]==]==false;$nonescape[$getvar[cross]] <@$authorID>, Liste bulunmadı.{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
    $onlyif[$interactiondata[options._subcommand]==sıra;]
`}]