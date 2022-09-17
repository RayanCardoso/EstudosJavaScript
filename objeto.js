const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 5000
prod1['Desconto legal'] = 0.4 //Evitar atributos com espaço


console.log(prod1)

const prod2 = {
    nome : 'Camisa Polo',
    preco : 79.98,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)