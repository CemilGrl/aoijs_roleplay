module.exports = [{
    name: "sonrp",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionreply[;{newEmbed:
        {color:$getvar[hex]}
        {author:$guildname:$guildicon}
        {thumbnail:$useravatar[$get[kullanıcı]]}
        {description:<:arsen_kanal:1331899522212823071> *<@$get[kullanıcı]>, en son <t:$truncate[$divide[$getuservar[rpsüre;$get[kullanıcı]];1000]]:R> <#$getuservar[enson;$get[kullanıcı]]> kanalında rp yapmış.*}
        {footer:Sorgulayan#COLON# $memberdisplayname:$authoravatar}{timestamp}};;everyone]
    $onlyif[$checkcondition[$getuservar[enson;$get[kullanıcı]]==]==false;$nonescape[$getvar[cross]] <@$get[kullanıcı]>, adlı kullanıcıya kayıtlı veri **bulunamadı.**{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
    $let[kullanıcı;$if[$slashoption[kullanıcı]==;$authorid;$slashoption[kullanıcı]]]
`}]