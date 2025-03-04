// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let contador = 0;
let listaAmigos = [];

function actualizarLista(texto){
    let elementoHTML = document.querySelector('#listaAmigos');
   //// for (i=0;i<=(listaAmigos.length-1);i++){
   ///     let h3 = document.createElement("h3")
   ///     h3.innerHTML = texto;
   ///     elementoHTML.appendChild(h3);
    ///}
   elementoHTML.innerHTML ="";
    listaAmigos.forEach(function(texto){
        let li = document.createElement("li");
        li.innerHTML = texto;
        elementoHTML.appendChild(li);
    });
   

    return;
}

function agregarAmigo() {
     let amigo = document.getElementById('amigo').value.trim(); // Evita espacios en blanco

    if (amigo === '') {
        console.log("vacio");
        alert("vacío");
    } else if (listaAmigos.includes(amigo)) {
        console.log("repetido");
        alert("repetido");
        limpiarTexto();
    } else {
        listaAmigos[contador] = amigo;
        contador++;
        limpiarTexto();
        actualizarLista(amigo);
    }
    return;
}
function limpiarTexto(){
    document.getElementById('amigo').value = '';
    return;
}
function sortearAmigo(){
    console.log("push");
    let indice = 0;
    if (listaAmigos.length>1){
        let amigoSecreto = Math.floor(Math.random()*listaAmigos.length)+1;
        console.log("el amigo secreto es "+listaAmigos[amigoSecreto-1]);
        mostrarResultado(indice,amigoSecreto);
    
    }else{
        console.log("no hay amigos suficientes");
        indice =1;
        texto = 'no hay amigos suficientes';
        mostrarResultado(indice,texto);
    }
    
}
function mostrarResultado(indice,texto){
    let resultado = document.getElementById("resultado");
    if (indice == 0){
        resultado.innerHTML = (" El amigo secreto es: "+ listaAmigos[texto-1]);
    }else{
        resultado.innerHTML = texto;
    }
}
