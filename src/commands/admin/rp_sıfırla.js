module.exports = [{
    name: "rp",
    type: "interaction",
    prototype: "slash",
    code: `
    $foreachmember[1;{};rpsıfırla;]
    $wait[1s]
    $interactionreply[$getvar[tick] <@$authorID>, Tüm veriler başarıyla **sıfırlandı.**;{newEmbed:
        {color:$getvar[hex]}
        {author:Rplist Başarıyla Sıfırlandı}
        {thumbnail:$guildicon}
        {description:
<:arsen_mavinokta:1331878256001028129> *Bu hafta toplam **$gettextsplitlength kişi** Roleplay yapmış.*
<:arsen_rp:1331899080154157106> *Bu hafta toplam **$numberseparator[$math[$replacetext[$userleaderboard[$guildid;rp;asc;{value};$memberscount[$guildid;all;no];1];\n;+]];.] Kelime** Roleplay yapılmış.*
        }};;;everyone;no]
    $textsplit[$userleaderboard[$guildid;rp;asc;{value};$memberscount[$guildid;all;no];1];\n]
    $onlyif[$checkcondition[$userleaderboard[$guildID;rp;asc]==]==false;$nonescape[$getvar[cross]]  <@$authorid>, Henüz kimse Rp yapmamış.{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
    $onlyif[$hasperms[$guildid;$authorid;administrator]==true;$nonescape[$getvar[cross]] <@$authorID>, Bunu kullanamazsın.{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
    $onlyif[$interactiondata[options._subcommand]==sıfırla;]    
`},{
    name: "rpsıfırla",
    type: "awaited",
    code: `
    $deletevar[rp;$authorid_$guildid]
`}]