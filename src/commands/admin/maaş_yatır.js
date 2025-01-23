module.exports = [{
    name: "maaş",
    type: "interaction",
    prototype: "slash",
    code: `
    $channelsendmessage[$getvar[paralog];{newEmbed:{color:$getvar[hex]}
        {author:$guildname:$guildicon}
        {thumbnail:$guildicon}
        {description:
<a:arsen_konfeti:1331877800604471389> *<@&$slashoption[rol]> rolündeki **$rolememberscount[$slashoption[rol]]** kişiye **$numberseparator[$slashoption[miktar];.]** dolar eklendi.*

> <:arsen_mavinokta:1331878256001028129> **İşlem Notu ➔** *$if[$slashoption[not]==;Belirtilmedi.;$slashoption[not]]*
        }{footer:Yatıran#COLON# $memberdisplayname:$authoravatar}{timestamp}}]
    $foreachmember[1;{"rol": "$slashoption[rol]", "miktar": "$slashoption[miktar]"};maaş;]
    $interactionfollowup[;{newEmbed:
        {color:$getvar[hex]}
        {author:$guildname:$guildicon}
        {thumbnail:$guildicon}
        {description:
<a:arsen_konfeti:1331877800604471389> *Başarıyla <@&$slashoption[rol]> rolündeki **$rolememberscount[$slashoption[rol]]** kişiye **$numberseparator[$slashoption[miktar];.]** dolar eklendi.*

> <:arsen_mavinokta:1331878256001028129> **İşlem Notu ➔** *$if[$slashoption[not]==;Belirtilmedi.;$slashoption[not]]*
        }{footer:Yatıran#COLON# $memberdisplayname:$authoravatar}{timestamp}};;everyone]
    $interactiondefer
    $onlyif[$hasperms[$guildid;$authorid;administrator]==true;$nonescape[$getvar[cross]] <@$authorid>, Bunu kullanamazsın.{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
    $onlyif[$interactiondata[options._subcommand]==yatır;]
`},{
    name: "maaş",
    type: "awaited",
    code: `
    $setuservar[para;$sum[$getuservar[para];$awaitdata[miktar]]]
    $onlyif[$hasroles[$guildid;$authorid;$awaitdata[rol]]==true;]
`}]