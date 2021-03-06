
// EXEMPLO AUTOMOVEIS - HERANÇA

const automovel = {
    roda: 'padrão',
    cor: 'padrão',
    velAtual: 0,
    velMax: 200,
    ligar(){
        if(this.velMax > 0){
            return true
        }else{return false}
    }
}

const moto = {
    __proto__:automovel, //forma que temos de acessar de dentro de um objeto o prototipo dele é atravez do atributo acessar __proto__
    bau: 'vazio',
    cavalete: 1,
    status(){
        return `O bau dessa moto está ${this.bau} e velocidade atual é de ${super.velAtual}` // 'this' para referenciar moto e 'super' para referenciar o prototipo automovel.
    }
}

console.log(moto)
console.log(automovel.ligar())
console.log(moto.status())


//Object.setPrototypeOf(moto, automovel) //criando relação de carro com  protótipo automovel, mesma coisa do _photo__:automovel