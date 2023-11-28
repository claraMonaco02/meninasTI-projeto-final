/*var condicao1
var condicao2

if(condicao1){
    console.log("condicao1");

}
if(condicao2){
    console.log("condicao2");
}

var num1 = 10;
var num2 = 15;
if(num1 === num2){
    console.log("são iguais");
}else{
    if(num1 > num2){
        console.log("são diferentes e num1 maior")
    }else{
        console.log("são diferentes e num2 maior")
    }
}
var paisDeOrigemc = "brasil"
switch (paisDeOrige) {
    case "brasil":
        consol.log("brasileiro");      
        break;
      case "EUA":
        console.log("Americano");
        break;
    default:
        console.log("desconhecido")
        break;
}
*/
/*var Pokemon = "bulbasauro"
switch (Pokemon) {
    case "bulbasauro":
        console.log("planta e veneno");      
        break;
      case "charmander":
        console.log("fogo");
        break;

        case "squirtle":
            console.log("agua");
            break;
    default:
        
        break;
}

var lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
lista.forEach(element => {
    console.log(element);
});

for (const element of lista){
    console.log(element);

}
for (let index = 0; index < lista.length; index++){
    const element = lista[index];
    console.log(element);
}
for (let index = 0; index < 10; index++){
    const element = lista[index];
    console.log(element);
}

var i = 0;
while(1 > 10){
    console.log(i);
    i = i +1;
}



function calcularArea(altura = 10, largura = 20) {
var area = altura * largura;
console.log(area);
}
function somaAreas(largura1, largura2){
    var area1 = calcularArea(largura1, largura1);
    var area2 =  calcularArea(largura2, largura2);
}
function
calcularArea(33, 88);

function imprimeNomes (nome){
    console.log(nome);
}
imprimeNomes ("nome1");
imprimeNomes ("nome2");
imprimeNomes ("nome3");

function imprimeNomesComRturn(nome){
    return nome;
}
console.log(imprimeNomesComRturn("nome1"));
console.log(imprimeNomesComRturn("nome2"));
console.log(imprimeNomesComRturn("nome3"));
*/


/* function recebeArray(lista = []){
    var arrayFinal = [];
    arrayFinal[0] = lista[lista.length -1];
    arrayFinal[1] = lista[0];
    console.log(arrayFinal);
}
var lista = [1,2,3,4,5,6,7,8,9];
recebeArray(lista);
 */

//declaração de variáveis
const header = document.createElement("header");
const content = document.createElement("main");
const footer = document.createElement("footer");

// adiciona conteúdo ao cabeçalho
header.innerHTML = '<h1>cabeçalho</h1> <p>este é o cabeçalho da página.</p>';

// adiciona conteúdo ao conteúdo
content.innerHTML = '<h2>Conteúdo</h2><p>este é o conteudo da pagina</p>';

// adiciona conteúdo ao rodapé
footer.innerHTML= '<p>rodapé</p>';

// adiciona os elementos á página
document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);

// aplica estilos ao cabeçalho
header.style.backgroundColor = "#ccc";
header.style.padding = "20px";

//aplica estilos ao rodapé
footer.style.backgroundColor = "#ccc";
footer.style.padding = "10px";



const container = document.querySelector("main");
const linhas = [];
const cores = ["#fff", "#ccc"];


    