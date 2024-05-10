require("./style.scss");

document.getElementById("find").addEventListener("click", find);
document.getElementById("filter").addEventListener("click", filter);

function find() {
    let input = document.getElementById("lista-find").value;
    let lista = input.split(",");
    let elemento = document.getElementById("elemento-find").value;
    let resultado = lista.find((item) => item === elemento);
    let p = document.getElementById("resultado-find")
    if (resultado) {
        p.innerHTML = "Encontrado!"
        p.classList.remove("nao-encontrado", "encontrado")
        p.classList.add("encontrado")
    }
    else {
        p.innerHTML = "Não encontrado!"
        p.classList.remove("nao-encontrado", "encontrado")
        p.classList.add("nao-encontrado")
    }
}

function filter() {
    let input = document.getElementById("lista-filter").value;
    let lista = input.split(",");
    let elemento = document.getElementById("elemento-filter").value;
    let resultado = lista.filter((item) => item.replaceAll(" ", "") === elemento);
    let p = document.getElementById("resultado-filter")
    p.innerHTML = resultado.length + " Encontrados!"
    if (resultado.length > 0) {
        p.classList.remove("nao-encontrado", "encontrado")
        p.classList.add("encontrado")
    }
    else {
        p.classList.remove("nao-encontrado", "encontrado")
        p.classList.add("nao-encontrado")
    }
}