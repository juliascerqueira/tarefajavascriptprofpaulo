var salarioatual = 19000
var valoraumento = 0
var salarionovo = 0

if (salarioatual <= 2800){
    valoraumento = salarioatual*0.2
    salarionovo = salarioatual*1.2
    console.log("Seu salário atual é R$ "+ salarioatual +".")
    console.log("Você teve um aumento de "+ 20 +"%, ou seja, R$ " + valoraumento + ".")
    console.log("Seu novo salário é R$ "+ salarionovo +".")
}
if (salarioatual > 2800 && salarioatual <= 7000){
    valoraumento = salarioatual*0.15
    salarionovo = salarioatual*1.15
    console.log("Seu salário atual é R$ "+ salarioatual +".")
    console.log("Você teve um aumento de "+ 15 +"%, ou seja, R$ " + valoraumento + ".")
    console.log("Seu novo salário é R$ "+ salarionovo +".")
}
if (salarioatual > 7000 && salarioatual <= 15000){
    valoraumento = salarioatual*0.10
    salarionovo = salarioatual*1.10
    console.log("Seu salário atual é R$ "+ salarioatual +".")
    console.log("Você teve um aumento de "+ 10 +"%, ou seja, R$ " + valoraumento + ".")
    console.log("Seu novo salário é R$ "+ salarionovo +".")
}
if (salarioatual > 15000){
    valoraumento = salarioatual*0.05
    salarionovo = salarioatual*1.05
    console.log("Seu salário atual é R$ "+ salarioatual +".")
    console.log("Você teve um aumento de "+ 5 +"%, ou seja, R$ " + valoraumento + ".")
    console.log("Seu novo salário é R$ "+ salarionovo +".")
}

