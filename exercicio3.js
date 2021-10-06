var precoum = 5
var precodois = 10
var precotres = 20
var menor = 0

if (precoum < precodois){
    menor = precoum
    if(menor < precotres){
        console.log("O produto de menor preço custa R$ "+ menor)
    }
    else{
        console.log("O produto de menor preço custa R$ "+ precotres)
    }
}
    
else{
    menor = precodois
    if(menor < precotres){
        console.log("O produto de menor preço custa R$ "+ menor)
    }
    else{
        console.log("O produto de menor preço custa R$ "+ precotres)
    }
}