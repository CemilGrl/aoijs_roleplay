module.exports = [{
    name: "para",
    type: "interaction",
    prototype: "slash",
    code: `
    $channelsendmessage[$getvar[paralog];{newEmbed:{color:$getvar[hex]}
        {author:$guildname:$guildicon}
        {thumbnail:$useravatar[$slashoption[kullanıcı]]}
        {description:
<a:arsen_konfeti:1331877800604471389> *<@$slashoption[kullanıcı]> adlı kullanıcıya **$numberseparator[$slashoption[miktar];.]** dolar eklendi.*

> <:arsen_mavinokta:1331878256001028129> **İşlem Notu ➔** *$if[$slashoption[not]==;Belirtilmedi.;$slashoption[not]]*
        }{footer:Ekleyen#COLON# $memberdisplayname:$authoravatar}{timestamp}}]
    $interactionfollowup[$getvar[tick] <@$slashoption[kullanıcı]> kullanıcısına **$numberseparator[$slashoption[miktar];.] Dolar** eklendi.;{newEmbed:{color:$getvar[hex]}
        {author:$guildname:$guildicon}
        {thumbnail:$useravatar[$slashoption[kullanıcı]]}
        {description:
<a:arsen_konfeti:1331877800604471389> *<@$slashoption[kullanıcı]> adlı kullanıcının yeni bakiyesi **$numberseparator[$getuservar[para;$slashoption[kullanıcı]];.] dolar.***

> <:arsen_mavinokta:1331878256001028129> **İşlem Notu ➔** *$if[$slashoption[not]==;Belirtilmedi.;$slashoption[not]]*
        }{footer:Ekleyen#COLON# $memberdisplayname:$authoravatar}{timestamp}};;;users]
    $interactiondefer
    $setuservar[para;$sum[$getuservar[para;$slashoption[kullanıcı]];$slashoption[miktar]];$slashoption[kullanıcı]]

    $onlyif[$hasperms[$guildid;$authorid;administrator]==true;$nonescape[$getvar[cross]] <@$authorid>, Bunu kullanamazsın.{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
    $onlyif[$interactiondata[options._subcommand]==ekle;]
`}]