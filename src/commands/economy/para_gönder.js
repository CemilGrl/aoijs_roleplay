module.exports = [{
    name: "para",
    type: "interaction",
    prototype: "slash",
    code: `
    $channelsendmessage[$getvar[paralog];{newEmbed:{color:$getvar[hex]}
        {author:$guildname:$guildicon}
        {thumbnail:$useravatar[$slashoption[kullanıcı]]}
        {description:
<a:arsen_konfeti:1331877800604471389> *<@$slashoption[kullanıcı]> adlı kullanıcıya **$numberseparator[$slashoption[miktar];.]** dolar gönderildi.*

> <:arsen_mavinokta:1331878256001028129> **İşlem Notu ➔** *$if[$slashoption[not]==;Belirtilmedi.;$slashoption[not]]*
        }{footer:Gönderen#COLON# $memberdisplayname:$authoravatar}{timestamp}}]
    $interactionfollowup[$getvar[tick] <@$slashoption[kullanıcı]> kullanıcısına **$numberseparator[$slashoption[miktar];.] Dolar** gönderildi.;{newEmbed:{color:$getvar[hex]}
        {author:$guildname:$guildicon}
        {thumbnail:$useravatar[$slashoption[kullanıcı]]}
        {description:
<a:arsen_konfeti:1331877800604471389> *<@$slashoption[kullanıcı]> adlı kullanıcının yeni bakiyesi **$numberseparator[$getuservar[para;$slashoption[kullanıcı]];.] dolar.***
<a:arsen_konfeti:1331877800604471389> *<@$authorid> adlı kullanıcının yeni bakiyesi **$numberseparator[$getuservar[para];.] dolar.***

> <:arsen_mavinokta:1331878256001028129> **İşlem Notu ➔** *$if[$slashoption[not]==;Belirtilmedi.;$slashoption[not]]*
        }{footer:Ekleyen#COLON# $memberdisplayname:$authoravatar}{timestamp}};;;users]
    $interactiondefer
    $setuservar[para;$sum[$getuservar[para;$slashoption[kullanıcı]];$slashoption[miktar]];$slashoption[kullanıcı]]
    $setuservar[para;$sub[$getuservar[para];$slashoption[miktar]]]

    $onlyif[$slashoption[miktar]>0;$nonescape[$getvar[cross]] <@$authorid>, Yazacağın sayı 0'dan yüksek olmalı.{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
    $onlyif[$slashoption[miktar]<=$getuservar[para];$nonescape[$getvar[cross]] <@$authorid>, Yeterli miktarda paran bulunmamaktadır.{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
    $onlyif[$interactiondata[options._subcommand]==gönder;]
`}]
