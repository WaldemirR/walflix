function adicionarFilme(){

    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpeg")){
    listarFilmesNaTela(filmeFavorito);
} else {
    console.error("Endereço de imagem inválido");
}
    document.getElementById("filme").value = "";
    
}

function listarFilmesNaTela(filme){
    var elementoFilmeFavorito = "<img src" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}


