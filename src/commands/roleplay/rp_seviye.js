module.exports = [{
    name: "rp",
    type: "interaction",
    prototype: "slash",
    code: `
    $interactionreply[;{newEmbed:
        {color:$getvar[hex]}
        {author:$guildname:$guildicon}
        {thumbnail:$useravatar[$get[kullanıcı]]}
        {description:
<:arsen_rp:1331899080154157106> *<@$get[kullanıcı]> adlı kullanıcı toplam **$numberseparator[$getuservar[xp;$get[kullanıcı]];.] Kelime** roleplay yapmış.*
<:arsen_reply:1331899237306204172> ***$gettextsplitlength** kişi arasından **$findtextsplitindex[$get[kullanıcı]].** sıradasın.*
        }{footer:Sorgulayan#COLON# $memberdisplayname:$authoravatar}{timestamp}};;everyone]
    $textsplit[$userleaderboard[$guildid;xp;asc;{id};$memberscount[$guildid;all;no];1];\n]
    $let[kullanıcı;$if[$slashoption[kullanıcı]==;$authorid;$slashoption[kullanıcı]]]
    $onlyif[$interactiondata[options._subcommand]==seviye;]
`}]