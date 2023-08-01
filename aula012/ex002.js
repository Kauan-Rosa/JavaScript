var agora = new Date()
var diaSem = agora.getDay()
var hora = agora.getHours()
switch(diaSem) {
    case 0:
        console.log('Hoje é Domingo!')
        break
    case 1:
        console.log('Hoje é Segunda-Feira!')
        break
    case 2:
        console.log('Hoje é Terça-Feira!')
        break
    case 3:
        console.log('Hoje é Quarta-Feira!')
        break
    case 4:
        console.log('Hoje é Quinta-Feira!')
        break
    case 5:
        console.log('Hoje é Sexta-Feira!')
        break
    default:
        console.log('Hoje é Sabádo!')
        break
} if (hora >= 6 && hora < 13) {
    console.log(`Bom dia! Agora são ${hora}.`)
} else if (hora <= 17 && hora >= 13) {
    console.log(`Boa tarde! Agora são ${hora} horas.`)
} else if (hora >=18 && hora <=24) {
    console.log(`Boa noite! Agora são ${hora} horas.`)
} else {
    console.log (`Boa madrugada! Agora são ${hora} horas da madrugada.`)
}