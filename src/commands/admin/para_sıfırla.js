module.exports = [{
    name: "para",
    type: "interaction",
    prototype: "slash",
    code: `
    $channelsendmessage[$getvar[paralog];{newEmbed:{color:$getvar[hex]}
        {author:$guildname:$guildicon}
        {thumbnail:$useravatar[$slashoption[kullanıcı]]}
        {description:<a:arsen_konfeti:1331877800604471389> *<@$slashoption[kullanıcı]> adlı kullanıcının parası sıfırlandı.*
        }{footer:Sıfırlayan#COLON# $memberdisplayname:$authoravatar}{timestamp}}]
    $interactionfollowup[$getvar[tick] <@$slashoption[kullanıcı]> kullanıcısının parası **sıfırlandı.**;;;users]
    $interactiondefer
    $deletevar[para;$authorid_$guildid]

    $onlyif[$hasperms[$guildid;$authorid;administrator]==true;$nonescape[$getvar[cross]] <@$authorid>, Bunu kullanamazsın.{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
    $onlyif[$interactiondata[options._subcommand]==sıfırla;]
`}]