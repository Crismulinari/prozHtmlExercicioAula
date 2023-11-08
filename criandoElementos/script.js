
let titulo = document.createElement("h1");
titulo.id = "titulo";
titulo.innerText = "Armarinho";


let body = document.querySelector("body");
body.appendChild(titulo);


let produtos = document.createElement("section");
produtos.innerHTML = `
  <section>
    <h2>Fios de seda</h2>
    <img src="../assets/imagens/Fio seda.jpg" alt="fios de seda coloridos">
    <p>Fio de seda colorido com expessura de número 10.</p>
    <p id="precoFioColorido10">R$ 25.30</p>
  </section>
`;


body.appendChild(produtos)