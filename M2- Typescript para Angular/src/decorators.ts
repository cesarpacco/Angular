// //DECORATOR
// function ExibirNome(target: any) {
//     console.log(target);
// }
// @ExibirNome
// class Funcionario{}

// //CLASSE DECORATOR
//   function apiVersion(version: string) {
//     return (target: any) => {
//       Object.assign(target.prototype, { __version: version, __name: "CESAR" });
//     };
//   }
  
//   //ATTRIBUTE DECORATOR
//    function minLength(length: number) {
//     return (target: any, key: string) => {
//      let _value = target[key]; // AQUI GUARDAMOS O VALOR

//      //ABAIXO CRIAMOS UMA FUNÇÃO 
//      //MÉTODO DE LEITURA
//       const getter = () => "[play]" + _value;
//     // MÉTODO SET DE ESCRITA  
//       const setter = (value: string) => {
//         if (value.length < length) {
//           throw new Error(`Tamanho menor do que ${length}`);
//         } else {
//           _value = value;
//         }
//       };
  
//       Object.defineProperty(target, key, {
//         get: getter,
//         set: setter,
//       });
//     };
//   }
  
//   class Api {
//     // DEFINE A QUANTIDADE DE CARACTERES
//     @minLength(10)
//     name: string;
  
//     constructor(name: string) {
//       this.name = name;
//     }
//   }
  
//   const api = new Api("usaadasdaaaaa");
//   console.log(api.name);