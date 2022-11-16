function tratarErroELancar(erro){
    throw new Error('-------')
}

function imprimirNomeGritado(obj) {
    try{
    console.log(obj.nome.toUpperCase() +'!!!')
} catch(e){
    tratarErroELancar(e)
}
    }
const obj ={ nome: "roberto"}
imprimirNomeGritado(obj)