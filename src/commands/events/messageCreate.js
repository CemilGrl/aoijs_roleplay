module.exports = [{
    name: "$alwaysExecute",
    code: `
    $setuservar[rp;$math[$getuservar[rp]+$argscount]]
    $setuservar[xp;$math[$getuservar[xp]+$argscount]]
    $setuservar[rpsüre;$datestamp]
    $channelsendmessage[$getvar[rplog];{newEmbed:{color:$getvar[hex]}
        {author:$guildname:$guildicon}
        {thumbnail:$authoravatar}
        {description:<:arsen_tuy:1331916471936221284> <@$authorid> adlı kullanıcı <#$channelid> kanalında **$argscount Kelime** roleplay yaptı.}
        {footer:Made by ArseN with 🤍}{timestamp}}]
    $onlyif[$channeltype[$channelid]==text;]
	$onlyif[$isbot[$authorid]==false;]
    $onlyforcategories[$nonescape[$getvar[rpkategori]];]
`},{
    name: "$alwaysExecute",
    code: `
    $setuservar[enson;$channelid]
    $wait[1s]
    $channelsendmessage[$getvar[geçişlog];{newEmbed:
        {color:$getvar[hex]}
        {author:$guildname Geçiş Log}
        {description:<:arsen_kanal:1331899522212823071> <@$authorid>, adlı üye <#$getuservar[enson]> kanalından <#$channelid> kanalına geçiş yaptı.}}]
    $onlyif[$getuservar[enson]!=$channelid;]
    $onlyif[$channeltype[$channelid]==text;]
    $onlyif[$isbot[$authorid]==false;]
    $onlyforcategories[$nonescape[$getvar[rpkategori]];]
`}]