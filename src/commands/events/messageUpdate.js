module.exports = [{
    type: "messageUpdate",
    channel: "$channelid",
    code: `
    $ifawaited[$gettextsplitlength>$argscount;{execute:rpd_silme};{execute:rpd_ekleme}]
    $textsplit[$oldmessage; ]
    $onlyif[$oldmessage!=]
    $onlyif[$message!=]
    $onlyif[$oldmessage!=$message]
    $onlyif[$channeltype[$channelid]==text;]
    $onlyforcategories[$nonescape[$getvar[rpkategori]];]
`},{
    name: "rpd_silme",
    type: "awaited",
    code: `
    $channelsendmessage[$getvar[rplog];{newEmbed:{color:$getvar[hex]}
        {author:$guildname:$guildicon}
        {thumbnail:$authoravatar}
        {description:<:arsen_tuy:1331916471936221284> <@$authorid> adlı kullanıcı <#$channelid> kanalında rolünden **$math[$gettextsplitlength-$argscount] Kelime** sildi.}
        {footer:Made by ArseN with 🤍}{timestamp}}]
    $setuservar[rp;$math[$getuservar[rp]-$math[$gettextsplitlength-$argscount]]]
    $setuservar[xp;$math[$getuservar[xp]-$math[$gettextsplitlength-$argscount]]]
`},{
    name: "rpd_ekleme",
    type: "awaited",
    code: `
    $channelsendmessage[$getvar[rplog];{newEmbed:{color:$getvar[hex]}
        {author:$guildname:$guildicon}
        {thumbnail:$authoravatar}
        {description:<:arsen_tuy:1331916471936221284> <@$authorid> adlı kullanıcı <#$channelid> kanalında rolüne **$math[$argscount-$gettextsplitlength] Kelime** ekledi.}
        {footer:Made by ArseN with 🤍}{timestamp}}]
    $setuservar[rp;$math[$getuservar[rp]+$math[$argscount-$gettextsplitlength]]]
    $setuservar[xp;$math[$getuservar[xp]+$math[$argscount-$gettextsplitlength]]]
`}]