function imprimirSoma(a,b){
    console.log(a+b)
}

function soma(a,b = 0){
    return a+b
}

function imprimirMultiplicacao(a,b){
    console.log(a*b)
}

function multiplicacao(a,b = 0){
    return a*b
}

function imprimirSubtracao(a,b){
    console.log(a-b)
}

function imprimirDivisao(a,b){
    console.log(a/b)
}

imprimirSoma(2,1)
soma = soma(2, 2)
console.log(soma)

imprimirMultiplicacao(1.5,2)
multiplicacao = multiplicacao(10, 2)
console.log(multiplicacao)

imprimirSubtracao(6,3)

imprimirDivisao(9,3)