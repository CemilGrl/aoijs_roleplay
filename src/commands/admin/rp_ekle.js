module.exports = [{
    name: "rp",
    type: "interaction",
    prototype: "slash",
    code: `
    $ifawaited[$slashoption[tür]==top;{execute:rpekle2};{execute:rpekle}]
    $onlyif[$hasperms[$guildid;$authorid;administrator]==true;$nonescape[$getvar[cross]] <@$authorid>, Bunu kullanamazsın.{options:{ephemeral:true}}{extraOptions:{interaction:true}}]
    $onlyif[$interactiondata[options._subcommand]==ekle;]
`},{
    name: "rpekle",
    type: "awaited",
    code: `
    $interactionfollowup[$getvar[tick] <@$slashoption[kullanıcı]> kullanıcısına **$numberseparator[$slashoption[miktar];.] Kelime** eklendi.;;;;users]
    $interactiondefer
    $setuservar[$slashoption[tür];$sum[$getuservar[$slashoption[tür];$slashoption[kullanıcı]];$slashoption[miktar]];$slashoption[kullanıcı]]
`},{
    name: "rpekle2",
    type: "awaited",
    code: `
    $interactionfollowup[$getvar[tick] <@$slashoption[kullanıcı]> kullanıcısına **$numberseparator[$slashoption[miktar];.] Kelime** eklendi.;;;;users]
    $interactiondefer
    $setuservar[rp;$sum[$getuservar[rp;$slashoption[kullanıcı]];$slashoption[miktar]];$slashoption[kullanıcı]]
    $setuservar[xp;$sum[$getuservar[xp;$slashoption[kullanıcı]];$slashoption[miktar]];$slashoption[kullanıcı]]
`}]