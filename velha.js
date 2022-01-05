let count = 0;
let jogador = document.getElementById('jogador');
let vencedor = document.getElementById('vencedor');
jogador.innerHTML = "X";

function clicou (id) {
  count++;
  let quadrado = document.getElementById(id);
  
  quadrado.style.color = "black";
  
  if(quadrado.innerHTML!=='-') {
    return;
  }
  if(count%2!==0) {
    quadrado.innerHTML = "X";
    jogador.innerHTML = "O";
  }else{
    quadrado.innerHTML = "O";
    jogador.innerHTML = "X";
  }
  
  let quadrado1 = document.getElementById('1');
  let quadrado2 = document.getElementById('2');
  let quadrado3 = document.getElementById('3');
  let quadrado4 = document.getElementById('4');
  let quadrado5 = document.getElementById('5');
  let quadrado6 = document.getElementById('6');
  let quadrado7 = document.getElementById('7');
  let quadrado8 = document.getElementById('8');
  let quadrado9 = document.getElementById('9');
  
  if (quadrado1.innerHTML!=='-'&&quadrado1.innerHTML===quadrado2.innerHTML&&quadrado2.innerHTML===quadrado3.innerHTML)  {
    vencedor.innerHTML = quadrado1.innerHTML;
    quadrado1.style.backgroundColor = "green";
    quadrado2.style.backgroundColor = "green";
    quadrado3.style.backgroundColor = "green";
  }
  if (quadrado4.innerHTML!=='-'&&quadrado4.innerHTML===quadrado5.innerHTML&&quadrado5.innerHTML===quadrado6.innerHTML)  {
    vencedor.innerHTML = quadrado4.innerHTML;
    quadrado4.style.backgroundColor = "green";
    quadrado5.style.backgroundColor = "green";
    quadrado6.style.backgroundColor = "green";
  }
  if (quadrado7.innerHTML!=='-'&&quadrado7.innerHTML===quadrado8.innerHTML&&quadrado8.innerHTML===quadrado9.innerHTML)  {
    vencedor.innerHTML = quadrado7.innerHTML;
    quadrado7.style.backgroundColor = "green";
    quadrado8.style.backgroundColor = "green";
    quadrado9.style.backgroundColor = "green";
  }
  if (quadrado1.innerHTML!=='-'&&quadrado1.innerHTML===quadrado4.innerHTML&&quadrado4.innerHTML===quadrado7.innerHTML)  {
    vencedor.innerHTML = quadrado1.innerHTML;
    quadrado1.style.backgroundColor = "green";
    quadrado4.style.backgroundColor = "green";
    quadrado7.style.backgroundColor = "green";
  }
  if (quadrado2.innerHTML!=='-'&&quadrado2.innerHTML===quadrado5.innerHTML&&quadrado5.innerHTML===quadrado8.innerHTML)  {
    vencedor.innerHTML = quadrado2.innerHTML;
    quadrado2.style.backgroundColor = "green";
    quadrado5.style.backgroundColor = "green";
    quadrado8.style.backgroundColor = "green";
  }
  if (quadrado3.innerHTML!=='-'&&quadrado3.innerHTML===quadrado6.innerHTML&&quadrado6.innerHTML===quadrado9.innerHTML)  {
    vencedor.innerHTML = quadrado3.innerHTML;
    quadrado3.style.backgroundColor = "green";
    quadrado6.style.backgroundColor = "green";
    quadrado9.style.backgroundColor = "green";
  }
  if (quadrado1.innerHTML!=='-'&&quadrado1.innerHTML===quadrado5.innerHTML&&quadrado5.innerHTML===quadrado9.innerHTML)  {
    vencedor.innerHTML = quadrado1.innerHTML;
    quadrado1.style.backgroundColor = "green";
    quadrado5.style.backgroundColor = "green";
    quadrado9.style.backgroundColor = "green";
  }
  if (quadrado3.innerHTML!=='-'&&quadrado3.innerHTML===quadrado5.innerHTML&&quadrado5.innerHTML===quadrado7.innerHTML)  {
    vencedor.innerHTML = quadrado3.innerHTML;
    quadrado3.style.backgroundColor = "green";
    quadrado5.style.backgroundColor = "green";
    quadrado7.style.backgroundColor = "green";
  }

}

function reiniciar(id) {
  let count = 1;
  let jogador = document.getElementById('jogador');
  let vencedor = document.getElementById('vencedor');
  jogador.innerHTML = "X";
  vencedor.innerHTML = "";
  
  for (var i = 1; i <= 9; i++) {
    let quadrados = document.getElementById(i);
    quadrados.style.backgroundColor = "#eee";
    quadrados.style.color = "#eee";
    quadrados.innerHTML = "-";
  }
  clicou(id);
}