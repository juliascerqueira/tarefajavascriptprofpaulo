var ladoum = 90
var ladodois = 90
var ladotres = 90
var somalumdois = ladoum + ladodois
var somalumtres = ladoum +  ladotres
var somaldoistres = ladodois + ladotres



if (somalumdois > ladotres || somalumtres > ladodois || somaldoistres > ladoum ){
    if (ladoum == ladodois && ladoum == ladotres){
        console.log("Este triângulo é Equilátero.")
    }
    if(ladoum == ladodois || ladoum == ladotres || ladodois == ladotres){
        console.log("Este triângulo é Isósceles.")
    }
    if(ladoum != ladodois && ladoum != ladotres && ladodois != ladotres){
        console.log("Este triângulo é Escaleno.")
    }
}
else{
    console.log("Não é um triângulo")
}