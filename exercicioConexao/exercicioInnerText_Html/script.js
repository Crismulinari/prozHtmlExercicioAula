let elementoH1 = document.querySelector("h1");
console.log(elementoH1.innerText);

elementoH1.innerText = "Novo trabalho com JS";

let elementoA = document.querySelector("a");
console.log(elementoA.innerText);

elementoA.innerText = "Estou aprendendo";

let elementoUl = document.querySelector("ul");
console.log(elementoUl.innerHTML);

elementoUl.innerHTML = `
<ul>
    <li>Aprendendo HTML</li>
    <li>Aprendendo CSS</li>
    <li>Aprendendo JS</li>
</ul>
`
let elementoOl = document.querySelector("ol");
console.log(elementoOl.innerHTML);

elementoOl.innerHTML = `
<ol>
    <li><a href="https://prozeducacao.com.br">Aprendendo HTML na Proz</a></li>
    <li><a href="https://prozeducacao.com.br">Aprendendo CSS na Proz</a></li>
    <li><a href="https://prozeducacao.com.br">Aprendendo JS na Proz</a></li>
</ol>
`
