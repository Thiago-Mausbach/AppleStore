const  imagemVisualizacao = document.getElementById('imagem-visualizacao');
const titulo = document.getElementById('titulo-produto');
const cores = document.getElementById('cores');
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniatura1 = document.getElementById('0-imagem-miniatura');
const miniatura2 = document.getElementById('1-imagem-miniatura');
const miniatura3 = document.getElementById('2-imagem-miniatura');

const verdeCipreste = {
    nome: 'Azul-Cipreste',
    pasta: 'imagens-verde-cipreste',
};

const azulInverno = {
    nome: 'Azul-Inverno',
    pasta: 'imagens-azul-inverno',
};

const meiaNoite = {
    nome: 'Meia-Noite',
    pasta: 'imagens-meia-noite',
};

const estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar',
};

const rosaClaro = {
    nome: 'Rosa-Claro',
    pasta: 'imagens-rosa-claro',
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcoesTamanho = ['41 mm', '45 mm'];

let imagemSelecionada = 1;
let tamanhoSelecionado = 1;
let corSelecionada = 1;

function trocarImagem () {
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = "./imagens/opcoes-cores/"+ opcoesCores[corSelecionada].pasta +"/imagem-" + imagemSelecionada + ".jpeg";

}

function trocarTamanho () {
    const idTamanhoSelecionado = document.querySelector('[name=opcao-tamanho]:checked').id;
    tamanhoSelecionado = idTamanhoSelecionado.charAt(0);
    titulo.innerText = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado];
    tamanhoSelecionado == 0 ? imagemVisualizacao.classList.add('caixa-pequena') : imagemVisualizacao.classList.remove('caixa-pequena');
}

function trocarCor () {
    const idCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idCorSelecionada.charAt(0);
    titulo.innerText = 'Pulseira loop esportiva ' + opcoesCores[corSelecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado];
    nomeCor.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome
    imagemVisualizacao.scr = "./imagens/opcoes-cores/" + opcoesCores[corSelecionada].pasta + "/imagem-" + imagemSelecionada + ".jpeg";
    miniatura1.src = "./imagens/opcoes-cores/"+ opcoesCores[corSelecionada].pasta +"/imagem-0.jpeg"
    miniatura2.src = "./imagens/opcoes-cores/"+ opcoesCores[corSelecionada].pasta +"/imagem-1.jpeg"
    miniatura3.src = "./imagens/opcoes-cores/"+ opcoesCores[corSelecionada].pasta +"/imagem-2.jpeg"
    imagemVisualizacao.src = "./imagens/opcoes-cores/"+ opcoesCores[corSelecionada].pasta +"/imagem-" + imagemSelecionada + ".jpeg";

}
