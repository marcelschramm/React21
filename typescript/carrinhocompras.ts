// id venda
// array produtos
// descricao
// preco total

// Carrinho de compras

interface produto {
    idProduto: number
    marca: string
    quantidade: number
    categoria: string
    descricao: string
    preco: number
    obsevacoes?: string
}

let p1: produto = {
    idProduto: 0,
    quantidade: 2,
    marca: "Kasulke",
    categoria: "Alimento",
    descricao: "Ovo",
    preco: 12.50,
    obsevacoes: "Frágil"
}

let p2: produto = {
    idProduto: 1,
    quantidade: 1,
    marca: "Omo",
    categoria: "Limpeza",
    descricao: "Amaciante de roupas",
    preco: 20.00
}
interface carrinho {
    produtos: produto[]
    valorTotal?: number
}

let shop: carrinho = { produtos: [p1, p2]}

let p3: produto = {
    idProduto: 2,
    quantidade: 1,
    marca: "Coca-cola",
    categoria: "Refrigente",
    descricao: "Refrigente",
    preco: 7.99
}

shop.produtos.push(p3)

function valorTotal(carrinho: carrinho): number {
    let produtos = carrinho.produtos
    let total: number = 0
    total = produtos.reduce((acumulador, produto) => {
        return acumulador += produto.quantidade * produto.preco
    }, 0)
    // console.log(this);
    
    return total
}

console.log(shop);
console.log(`O valor todal da compra é: R$${valorTotal(shop).toFixed(2)}`);