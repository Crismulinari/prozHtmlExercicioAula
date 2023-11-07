// Criando um elemento para o título
let titulo = document.createElement("h1");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "Armarinho";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

// ------------------------------------------- //

// Criando um elemento para o produto
let produto = document.createElement("section");

// Manipulando o elemento
produto.innerHTML = `
  <section>
    <h2>Fios de seda</h2>
    <img src="https://i.ytimg.com/vi/zlZEDtopR8Q/hqdefault.jpg" alt="x-salada">
    <p>Fio de seda colorido com expessura de número 10.</p>
    <p id="precoFioColorido10">R$ 25.30</p>
  </section>
`;

// Adicionando o elemento no dom
body.appendChild(produto)