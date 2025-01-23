module.exports = [{
    name: "zenginler",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionreply[;{newEmbed:{color:$getvar[hex]}
    {author:$guildname:$guildicon}
    {title:Zenginlik Sıralaması}
    {thumbnail:$guildicon}
    {description:$replacetext[$replacetext[$replacetext[$replacetext[$replacetext[$userleaderboard[$guildid;para;asc;\`#{top}\` <@{id}> <a:arsen_dekorokmavi:1331858241252098162> **{value}** Dolar];#1;🥇;1];#2;🥈;1];#3;🥉;1];#4;🎖️;1];#5;🎖️;1]}
    {footer:Toplam $numberseparator[$math[$replacetext[$userleaderboard[$guildid;para;asc;{value};$memberscount[$guildid;all;no];1];\n;+]];.] dolar bulunmakta.:$guildicon}{timestamp}}
	$textsplit[$userleaderboard[$guildid;para;asc;{value};$memberscount[$guildid;all;no];1];\n]
    $onlyIf[$checkcondition[$userleaderboard[$guildid;para;asc]==]==false;$nonescape[$getvar[cross]] <@$authorID>, Liste bulunmadı.{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
`}]