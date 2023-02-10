//01 - Crie um array que receba 5 itens e exiba no console.
let itens = ["Tesoura", "Lápis", "Borracha", "Cola", "Régua"];
console.log(itens);

//02 - Utilize um método para adicionar um nome ao inicio do array.
itens.unshift("Apontador");
console.log(itens);

//03 - Utilize um método para remover o último nome do array.
itens.pop();
console.log(itens);

// 04 - Utilize um método para adicionar dois nomes ao fim do array.
itens.splice(5, 0, "Mochila", "Caderno");
console.log(itens);

//05 - Utilize um método para remover o primeiro nome do array.
itens.shift();
console.log(itens);

//06 - Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort();
console.log(numbers);

//07 - Crie um objeto que receba ao menos três propriedades sobre você.
let propriedadesSobreMim = {
  nome: "Joao Pedro",
  idade: 21,
  Cidade: "Brasília - DF",
};

//08 - Adicione uma nova propriedade sem alterar seu objeto inicial.
let novaPropriedadesSobreMim = {
  ...propriedadesSobreMim,
  cor_favorita: "Vermelho",
};

//09 - Remova uma propriedade desse objeto.
delete novaPropriedadesSobreMim.Cidade;

//10 - Mostre no console todas as propriedades desse objeto.
console.log(novaPropriedadesSobreMim);

//11- Crie um array  chamado "cadastro" contendo ao menos 5 objetos.  Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.  Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [
    {nome: "Carlos", idade: 22, telefone: 61912344321, amigos: ["Fernanda","Lais","José","Pedro"]},
    {nome: "Eduardo", idade: 17, telefone: 21912344321, amigos: ["Jofrey","Tyrion","Cersei","Robb"]},
    {nome: "Daniel", idade: 14, telefone: 1912344321, amigos: ["Walter","Jesse","Hank","Gus"]},
    {nome: "Joao", idade: 24, telefone: 13912344321, amigos: ["Rick","Morty","Summer","Jerry"]},
    {nome: "Fernando", idade: 30, telefone: 15912344321, amigos: ["Ang","katara","Zuko","Sokka"]}
]
//12 - Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[2],cadastro[1].amigos[1],cadastro[2].amigos[3],cadastro[3].amigos[0],cadastro[4].amigos[1])