var agora = new Date()
var hora = agora.getHours()
if (hora >= 6 && hora < 13 ) {
    console.log(`Bom dia! Agora são exatamente ${hora} horas.`)
} else if (hora >= 13 && hora < 18) {
    console.log(`Boa tarde! Agora são exatamente ${hora} horas.`)
} else if (hora < 6) {
    console.log(`Boa madrugada! Agora são exatamente ${hora} horas.`)
} else if (hora >= 18) {
    console.log(`Boa noite! Agora são exatamente ${hora} horas.`)
}