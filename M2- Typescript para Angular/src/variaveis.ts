/**
 * variaveis
 */

//TIPOS PRIMITIVOS: BOOLEAN, NUMBER, STRING
let ligado: boolean = false;
let nome: string = "Cesar";
let idade: number = 36;
let altura: number = 1.7;



//TIPOS ESPECIAIS NULL, UNDEFINDED
let nulo : null = null;
let indefinido: undefined = undefined;

//TIPOS ABRANGENTES: any(QUALQUER COISA), void (VAZIO)
let retorno:any // isso permite que o retorno possa ser um Objeto, Number, String, Boolean.


//OBJETO - SEM PREVISIBILIDADE
let produto:object = {
// AQUI EU CRIO MEU BLOCO DE OBJETO
name: "Cesar",
cidade: "sbc",
idade: 36,
};

//OBJETO TIPADO - COM PREVISIBILIDADE 
type ProdutoLoja = {
nome: string;
preço: number;
unidades: number;

};

let meuProduto: ProdutoLoja = {

nome: "Tenis",
preço: 89.99,
unidades: 40,
};

/**
* arrays
*/

let dados: string[] = ["felipe", "ana", "adriana"];
let dados2: Array<string> = ["felipe", "ana", "adriana"];

// ARRAYS DE MULTI TYPES
let infos: (string | number)[] = [322, "felipe"];

/**
* Tuplas PRECISA RESPEITAR A ORDEM CONFOROME O TIPO
*/
let boleto: [string, number, number] = ["agua conta", 199.9, 32342342];

/**
* arrays métodos (são os mesmos do Javascript)
*/
dados.pop();

/**
* Datas
*/
let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());