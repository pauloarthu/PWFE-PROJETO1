let arrayl1 = [];
let arrayl2 = [];
let array = [];

function obterLIstaProduto() {
    return JSON.parse(localStorage.getItem('arma4')) || [];
}
    function salvarListaProdutos(lista) {
        localStorage.setItem('arma4', JSON.stringify(lista));
    }

    let listaProdutos = obterLIstaProduto();

    function adicionar() {
        let nome = document.getElementById('nome').value;
        let nota = document.getElementById('notas').value;
        if (nota >= 70 && nota <= 100) {
        alert("foi adicionado na lista");
        arrayl1.push(nome);
        arrayl1.push(nota);
        array.push(nome);
        listaProdutos.push({nome, preco});
        salvarListaProdutos(listaProdutos);
        salvarListaProdutos(lista);
        }
        else if(nota >= 50 && nota < 70) {
        arrayl2.push({nome, preco});
        salvarListaProdutos(lista);
        }
        gardar(listaProdutos);
        document.getElementById('nome').value = "";
        document.getElementById('notas').value = "";
    }
    document.getElementById('mostrar2').innerHTML = lista;


/*****************************************************************************************************/ 
 
function mostrarprimeira() {
    document.getElementById("mostrar").innerHTML = arrayl1.toString(); 
    return JSON.parse(localStorage.getItem(arrayl1)) || []; 
    
}

function mostrarsegunda() {
    document.getElementById("mostrar").innerHTML = arrayl2.toString();
    return JSON.parse(localStorage.getItem(arrayl2)) || [];   
}

function participante() {
    document.getElementById("mostrar").innerHTML = array.toString();
    return JSON.parse(localStorage.getItem(array)) || [];   
}

