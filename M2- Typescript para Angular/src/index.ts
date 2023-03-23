let M = 47;
let A = 21;
let B = 9;

// TODO: Retorne um número inteiro, representando a idade do filho mais velho
let C = M - A - B;
	
let res = A;
if ( res < M  ) res = M - C - B; 
if ( res > B  ) res =  M - C - B  ;
	
console.log(res);