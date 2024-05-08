require("./style.scss");

document.getElementById("find").addEventListener("click", find);
document.getElementById("filter").addEventListener("click", filter);

function find() {
    let input = document.getElementById("lista-find").value;
    let lista = input.split(",");
    let elemento = document.getElementById("elemento-find").value;
    let resultado = lista.find((item) => item === elemento);
    let p = document.getElementById("resultado-find")
    p.innerHTML = resultado ? "Encontrado!" : "Não Encontrado!"
}

function filter() {
    let input = document.getElementById("lista-filter").value;
    let lista = input.split(",");
    let elemento = document.getElementById("elemento-filter").value;
    let resultado = lista.filter((item) => item.replaceAll(" ", "") === elemento);
    let p = document.getElementById("resultado-filter")
    p.innerHTML = resultado.length + " Encontrados!"
}