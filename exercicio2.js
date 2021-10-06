var notaum = 5
var notadois = 10
var notatres = 20
var maior, menor


if (notaum > notadois){
    maior = notaum
    if(maior > notatres){
        console.log("A maior nota é a primeira nota de valor igual a "+ maior)
    }
    else{
        console.log("A maior nota é a terceira nota de valor igual a "+ notatres)
    }
}
    
else{
    maior = notadois
    if(maior > notatres){
        console.log("A maior nota é a segunda nota de valor igual a "+ maior)
    }
    else{
        console.log("A maior nota é a terceira nota de valor igual a "+ notatres)
    }
}
    
if (notaum < notadois){
    menor = notaum
    if(menor < notatres){
        console.log("A menor nota é a primeira nota de valor igual a "+ menor)
    }
    else{
        console.log("A menor nota é a terceira nota de valor igual a "+ notatres)
    }
}
    
else{
    menor = notadois
    if(menor < notatres){
        console.log("A menor nota é a segunda nota de valor igual a "+ menor)
    }
    else{
        console.log("A menor nota é a terceira nota de valor igual a "+ notatres)
    }
}


// Código realizado pelo professor:




