module.exports = [{
    name: "bakiye",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionreply[;{newEmbed:
        {color:$getvar[hex]}
        {author:$guildname:$guildicon}
        {thumbnail:$useravatar[$get[kullanıcı]]}
        {description:
<a:arsen_dolar:1331857825562890272> *<@$get[kullanıcı]> adlı kullanıcının **$memberjoinposition[$get[kullanıcı]]** numaralı kasasında **$numberseparator[$getuservar[para;$get[kullanıcı]];.] Dolar** bulunmakta.*
<a:arsen_dekorokmavi:1331858241252098162> ***$gettextsplitlength** kişi arasından **$findtextsplitindex[$get[kullanıcı]].** sıradasın.*
        }{footer:Sorgulayan#COLON# $memberdisplayname:$authoravatar}{timestamp}};;everyone]
    $textsplit[$userleaderboard[$guildid;para;asc;{id};$memberscount[$guildid;all;no];1];\n]
    $let[kullanıcı;$if[$slashoption[kullanıcı]==;$authorid;$slashoption[kullanıcı]]]
`}]