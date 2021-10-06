var notaum = 5
var notadois = 2
var media = 0

media = (notaum+notadois)/2

if (media >= 9 && media <= 10){
    console.log("As notas 1 e 2 parciais são respectivamente "+ notaum + " e " + notadois + ".")
    console.log("Foi aprovado com média final e conceito iguais a "+ media + " e " + "A.")
}
if (media >= 7.5 && media <9){
    console.log("As notas 1 e 2 parciais são respectivamente "+ notaum + " e " + notadois + ".")
    console.log("Foi aprovado com média final e conceito iguais a "+ media + " e " + "B.")
}
if (media >= 6 && media <7.5){
    console.log("As notas 1 e 2 parciais são respectivamente "+ notaum + " e " + notadois + ".")
    console.log("Foi aprovado com média final e conceito iguais a "+ media + " e " + "C.")
}
if (media >= 4 && media <6){
    console.log("As notas 1 e 2 parciais são respectivamente "+ notaum + " e " + notadois + ".")
    console.log("Foi reprovado com média final e conceito iguais a "+ media + " e " + "D.")
}
if (media >= 0 && media <4){
    console.log("As notas 1 e 2 parciais são respectivamente "+ notaum + " e " + notadois + ".")
    console.log("Foi reprovado com média final e conceito iguais a "+ media + " e " + "E.")
}