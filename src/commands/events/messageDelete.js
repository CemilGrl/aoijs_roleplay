module.exports = [{
    type: "messageDelete",
    channel: "$channelid",
    code: `
    $setuservar[rp;$math[$getuservar[rp]-$argscount]]
    $setuservar[xp;$math[$getuservar[xp]-$argscount]]
    $channelsendmessage[$getvar[rplog];{newEmbed:{color:$getvar[hex]}
        {author:$guildname:$guildicon}
        {thumbnail:$authoravatar}
        {description:<:arsen_tuy:1331916471936221284> <@$authorid> adlı kullanıcı <#$channelid> kanalında **$argscount Kelime** roleplay sildi.}
        {footer:Made by ArseN with 🤍}{timestamp}}]
    $onlyif[$channeltype[$channelid]==text;]
	$onlyif[$isbot[$authorid]==false;]
    $onlyforcategories[$nonescape[$getvar[rpkategori]];]
`}]