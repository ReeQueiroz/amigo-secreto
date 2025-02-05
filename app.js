let amigos = [];
let resultado = document.getElementById("resultado");

function limparCampo(){
    campoNome = document.getElementById('amigo');
    campoNome.value = '';
} 

function adicionarAmigo(){
    let campoNome = document.getElementById('amigo').value;

    if (campoNome == ''){
        alert('Por favor, insira um nome')
    } else {
        amigos.push(campoNome);
    }

    let listaDeNomes = "<ul>";
    for (let i=0; i < amigos.length; i++){
        listaDeNomes += `<li>${amigos[i]}</li>`;
    }
    listaDeNomes += "</li>"
    resultado.innerHTML = listaDeNomes;
    limparCampo();
}

function sortearAmigo() {

    if (amigos.length === 0) {
        exibirTextoNaTela("#resultado", "Você ainda não adicionou nomes a sua lista de amigos!");
        return;
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    exibirTextoNaTela("#resultado", `O amigo sorteado é: ${sorteado}`);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    if (campo) {
        campo.innerHTML = texto;
    }

    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}