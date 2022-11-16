function imprimirSoma(a, b){
    console.log(Math.PI *a*b)
}
imprimirSoma(2,3)
imprimirSoma(2 )

function soma(a, b=0){
    return a+b
}
console.log(soma (2,3))
console.log(soma(2))