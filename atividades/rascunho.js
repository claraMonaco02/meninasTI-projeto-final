/*console.log(prompt("Qual é o seu nome?"));
var variavel = 100;
const variavelconstante = 200;

variavel = 400;
variavelconstante = 600;

const cordefundo = "#fefefe"
const nome = "gabriel";
const idade = 30;

console.log("ola, meu nome é", nome, "e eu tenho", idade, "anos"); 


const altura = 1.79;
const temperatura = -20;


const name = "Yuzo";
var idade = "23";

idade = 4300;

var souUmBoolean =  true;
console.log(souUmBoolean);
souUmBoolean =  false;
console.log(souUmBoolean);

const primeironome = "Clara";
const sobreNome = "Monaco";
const idade = 15;
const souEstudante = true;

console.log("Nome:", primeironome, "SobreNome:", sobreNome, " Idade:", idade, " é estudante?"
, souEstudante); 

console.log("Nome: " + primeironome + "Sobrenome: " + sobreNome + " Idade: " + idade + " é estudante?  " + souEstudante);

var todoTexto= "Nome: " + primeironome + "Sobrenome: " + sobreNome + " Idade: " + idade + " é estudante?  " + souEstudante;

console.log(todoTexto)

console.log(typeof(primeironome));
console.log(typeof(sobreNome));
console.log(typeof(idade));
console.log(typeof(souEstudante)); 

const idadeNumero = 23;
const idadeTexto = idadeNumero.toString();

console.log(typeof idadeNumero);
console.log(typeof idadeTexto);


const idadeTexto = "23";
const idadeNumero = Nmber(idadeTexto);

console.log(typeof idadeTexto);
console.log(typeof idadeNumero);

var n1 = 10;
var n2 = 5;
var n3 = 3;

var soma, subtracao, divisao, multiplicacao;

soma =  n1 + n2+;  //15
subtracao = n1 - n2;
divisao = n1 / n2;
multiplicacao = n1 * n2;

console.log(soma);
console.log(subtracao);
console.log(divisao);
console.log(multiplicacao);


var numero = 6;

console.log(numero % 2);*/
/*
var n1 = 2;
var n2 = 44456
var n3 =  2
var n4 = 3

/*console.log( n1 === n2);
console.log( n1 === n3);


console.log( n1 !== n2);
console.log( n1 !== n3);*/
/* 
console.log(n1 > n3);
console.log(n1 >= n3);
 
 

console.log(n1 === 2 && n1 === n3);
console.log(n1 === 2 || n1 === n3);*/

/*var a = true
var b =  false
var c = true

console.log( a && b);
console.log( b && c);
console.log( a && c);
console.log( a && b && c);


console.log( a || b);
console.log( b || c);
console.log( a || c);
console.log( a || b || c);

console.log(!a);

var nome = "lais";
var outronome = " fdjnfjndikfndj "
var idade = 23;
var anoAtual = 2023;

console.log("Nome: " + nome);
console.log( "Idade: " + idade);
console.log( "e maior de idade? " + (idade >=18));
console.log( "Idade em 2050: " + (idade + (2050 - anoAtual)));

 console.log(nome.length);
 console.log(nome.toLowerCase())
 console.log(outronome.trim())

 const frase = "Hoje eu comi cenoura";
 console.log(frase.includes("cenoura")); // true
 console.log(frase.includes("batata")); // false

 const frase= "Hoje eu comi cenoura, adoro cenoura";
 const novaFrase = frase.replaceALL("cenoura", "batata");
console.log(novaFrase);*/

 const listaDeCompras = ["batata", "alface", "queijo"];

 const listaDeNumerosMega = [2, 13, 26, 35, 41 ,60];
 listaDeCompras.push("cenoura");
 listaDeCompras[4] = "papel";
 listaDeCompras[listaDeCompras.length]= "cebola";
 listaDeCompras[1] = "tomate";

 //declaração de variáveis
const header = document.createElement("header");
const content = document.createElement("main");
const footer = document.createElement("footer");

// adiciona conteúdo ao cabeçalho
header.innerHTML = ´
<h1>cabeçalho</h1>
<p>este é o cabeçalho da página.</p>
´;

// adiciona conteúdo ao conteúdo
content.innerHTML = ´  
  <h2>Conteúdo</h2>
  <p>este é o conteudo da pagina</p>
´;

// adiciona conteúdo ao rodapé
footer.innerHTML= ´
       <p>rodapé</p>
´;

// adiciona os elementos á página
document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);


 

  
 

    


 

