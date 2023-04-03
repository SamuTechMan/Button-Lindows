/*// 
IF A)
function doisNumero() {
  const numero1 = Number(prompt("Informe o numero 1: "));
  const numero2 = Number(prompt("Informe o numero 2: "));

  if (numero1 > numero2) {
    console.log(numero1, "é o Maior numero!");
    alert(numero1, "é o Maior numero!");
  } else if (numero1 < numero2) {
    console.log(numero2, "é o Maior numero!");
    alert(numero2, "é o Maior numero!");
  }
}
doisNumero();
//*/

/*// 
IF B)
function posiNegaZero() {
  const numero = Number(prompt("Informe um numero: "));

  if (numero > "0") {
    console.log("Positivo");
    alert("Positivo");
  } else if (numero < "0") {
    console.log("Negativo");
    alert("Negativo");
  } else if (numero === "0") {
    console.log("zero");
    alert("zero");
  }
}
posiNegaZero();
//*/

/*// 
IF C)
function parInpar() {
  const numero = Number(prompt("Informe um numero: "));

  if (numero % 2 == 0) {
    console.log("Par");
    alert("Par");
  } else {
    console.log("Ínpar");
    alert("Ínpar");
  }
}
parInpar();
//*/

/*// 
Function A)
function somaNumeros() {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma;
}

const numeros = [5, 5, 5, 2, 1];
const resultado = somaNumeros();
console.log(resultado);
//*/

/*// 
Function B)
function medNumeros() {
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  const med = soma / numeros.length;
  return med;
}

const numeros = [5, 5, 5, 2, 1];
const resultMed = medNumeros();
console.log(resultMed);
//*/

/*// 
Function C)
function maiorNumero() {
  let maiorNum = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maiorNum) {
      maiorNum = numeros[i];
    }
  }
  return maiorNum;
}

const numeros = [5, 7, 10, 2, 1];
const resultado = maiorNumero();
console.log(resultado);
//*/

/*// 
Function D)
function menorNumero() {
  let menorNum = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menorNum) {
      menorNum = numeros[i];
    }
  }
  return menorNum;
}

const numeros = [14, 2, 3, 42, 4];
const resultado = menorNumero();
console.log(resultado);
//*/
/*// Array A)
const numero = [3, 6, 1, 5, 8, 12, 32, 22];

for (let i = 0; i < numero.length - 1; i++) {
  for (let ii = 0; ii < numero.length - i - 1; ii++) {
    if (numero[ii] > numero[ii + 1]) {
      const result = numero[ii];
      numero[ii] = numero[ii + 1];
      numero[ii + 1] = result;
    }
  }
}
console.log(numero);
//*/
/*// Array B)
const numeros = [3, 6, 1, 5, 8, 12, 32, 22];
for (let i = 0; i < numeros.length - 1; i++) {
  for (let ii = 0; ii < numeros.length - i - 1; ii++) {
    if (numeros[ii] < numeros[ii + 1]) {
      const result = numeros[ii];
      numeros[ii] = numeros[ii + 1];
      numeros[ii + 1] = result;
    }
  }
}
console.log(numeros);
//*/
/*// 
OBJETO)

const carro = {
  modelo: "Opala SS",
  ano: 1974,
  cor: "vermelho",
  velocidadeAtual: 0,

  acelerar: function (velocidade) {
    this.velocidadeAtual += velocidade;
  },

  frear: function (velocidade) {
    this.velocidadeAtual -= velocidade;
  },
};

console.log(carro.modelo);
console.log(carro.ano);
console.log(carro.cor);

console.log("Ligando.........");

console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Acelerando..........");

carro.acelerar(20);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Acelerando..........");

carro.acelerar(20);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Acelerando..........");

carro.acelerar(40);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Acelerando..........");

carro.acelerar(20);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Acelerando..........");

carro.acelerar(40);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Freando..........");

carro.frear(20);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Freando..........");

carro.frear(40);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Freando..........");

carro.frear(40);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Freando..........");

carro.frear(30);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");

console.log("Freando..........");

carro.frear(10);
console.log("Velocidade:", carro.velocidadeAtual, "Km/h");
//*/
