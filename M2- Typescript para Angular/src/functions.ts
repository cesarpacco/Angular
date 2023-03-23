//FUNÇÕES

function addnumber2( x: number, y: number){

    return x + y ;
}

let soma: number = addnumber2(3,7);

console.log(soma);

function addToHello(name: string): string {
    return `Hello ${name}`;
  }

  console.log(addToHello("Cesar"));

// FUNÇÕES MULTI TIPOS, PODEMOS UTILIZAR ANY NO LUGAR TBM.

function CallToPhone(phone: number | string): number | string {
    return phone;
  }

// FUNÇÕES ASYNC 
  async function getDatabase(id: number): Promise<string> {
    return "felipe";
  }
