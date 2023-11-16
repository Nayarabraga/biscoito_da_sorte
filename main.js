const selectedCookie = document.querySelector("#selected-cookie");
const btnOpenAnotherCookie = document.querySelector('button');
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

document.addEventListener('keypress', pressEnter);

selectedCookie.addEventListener('click', handleClick);
btnOpenAnotherCookie.addEventListener('click', handleBtnClick);

function handleClick() {
  screen1.classList.add("hide");
  screen2.classList.remove("hide");
}

function handleBtnClick() {
  screen2.classList.add("hide");
  screen1.classList.remove("hide");
}

function getQuote() {
  const quote = new Array();
  quote[0] = "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.";
  quote[1] = "Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera..";
  quote[2] = "A vida trará coisas boas se tiveres paciência.";
  quote[3] = "Nós somos o que pensamos.";
  quote[4] = "Realize o óbvio, pense no improvável e conquiste o impossível.";
  quote[5] = "O bom-senso vale mais do que muito conhecimento.";
  quote[6] = "A maior barreira para o sucesso é o medo do fracasso.";
  quote[7] = "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos";
  quote[8] = "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.";
  quote[9] = "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.";
  quote[10] = "Comece onde você está. Use o que você tem. Faça o que você pode.";
  const i = Math.floor(11 * Math.random())
  document.getElementById("sorte").innerHTML = quote[i];
}

function pressEnter(event) {
  if (event.key == 'Enter' && screen1.classList.contains("hide")) {
    handleBtnClick();
    getQuote();
  }
  else {
    handleClick();
    getQuote();
  }
}



