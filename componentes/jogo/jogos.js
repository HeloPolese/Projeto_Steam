import dados from "./jogos.json" with {type: "json"};

const criaCardImgCategoria = (id, url, categoria, cor) => {

    const card = document.createElement("a");
    card.classList.add("game-card-img-categoria");
    card.setAttribute("href", `/jogos/${id}`);
    card.setAttribute("data-link", "");

    const img = document.createElement("img");
    img.classList.add('imagem-jogo-categoria');
    img.src = url;
    img.width = 200;

    const divGradient = document.createElement('div');
    divGradient.classList.add("div-categoria-gradient");
    divGradient.style.backgroundColor = cor;

    const paragrafoCategoria = document.createElement('p');
    paragrafoCategoria.classList.add('categoria-paragrafo-gradient');
    paragrafoCategoria.textContent = categoria;
    


    divGradient.appendChild(paragrafoCategoria);


    card.appendChild(img);

    card.appendChild(divGradient);
    return card;
}


export const criaCardImgAleatorio = () => {
    const vetCor = [
        "rgba(255, 99, 71, 0.5)",
        "rgba(255, 165, 0, 0.5)",
        "rgba(255, 215, 0, 0.5)",
        "rgba(50, 205, 50, 0.5)",
        "rgba(0, 128, 0, 0.5)",
        "rgba(0, 191, 255, 0.5)",
        "rgba(30, 144, 255, 0.5)",
        "rgba(75, 0, 130, 0.5)",
        "rgba(138, 43, 226, 0.5)",
        "rgba(255, 20, 147, 0.5)",
        "rgba(220, 20, 60, 0.5)",
        "rgba(128, 0, 0, 0.5)",
        "rgba(0, 206, 209, 0.5)",
        "rgba(72, 209, 204, 0.5)",
        "rgba(199, 21, 133, 0.5)",
        "rgba(139, 69, 19, 0.5)",
        "rgba(112, 128, 144, 0.5)",
        "rgba(47, 79, 79, 0.5)"
    ];

    var corAleatoria = vetCor[Math.floor(Math.random() * vetCor.length)];

    var ind = Math.floor(Math.random() * dados.length);
    let card = criaCardImgCategoria(dados[ind].appid, dados[ind].url_imagem, dados[ind].genero, corAleatoria);
    return card;
}

const criaCard = (id, tituloCard, descricao, url, desconto, valor_mercado) => {
    const card = document.createElement("a");
    card.classList.add("game-card");
    card.setAttribute("href", `/jogos/${id}`);
    card.setAttribute("data-link", "");
    const divTexto = document.createElement('div')


    const img = document.createElement("img");
    img.classList.add('imagem-jogo');
    img.src = url;
    img.width = 200;


    const titulo = document.createElement("h3");
    titulo.textContent = tituloCard;

    const p = document.createElement("p");
    const valorAposDesconto = valor_mercado * (desconto / 100);
    p.textContent = "De R$ " + valor_mercado + " Por R$" + valorAposDesconto.toFixed(2);
    divTexto.classList.add('div-texto-desconto');

    divTexto.appendChild(titulo);
    divTexto.appendChild(p);

    card.appendChild(img);
    card.appendChild(divTexto);

    return card;
}


export const criaCardAleatorio = () => {
    var ind = Math.floor(Math.random() * dados.length);
    let card = criaCard(dados[ind].appid, dados[ind].titulo, dados[ind].descricao, dados[ind].url_imagem);
    return card;
}
export const criaCardAleatorioDesconto = () => {
    var ind = Math.floor(Math.random() * dados.length);
    let card = criaCard(dados[ind].appid, dados[ind].titulo, dados[ind].descricao, dados[ind].url_imagem, dados[ind].desconto, dados[ind].valor_mercado);
    return card;
}
dados.filter(elemento => {
    if (elemento.desconto > 10) {
        console.log(elemento);
    }
});

export const criaSecaoJogos = () => {
    const secao = document.createElement('section');
    secao.classList.add('games');

    const h2 = document.createElement('h2')
    h2.textContent = "Jogos em Destaque";

    const div = document.createElement('div');

    div.classList.add('game-grid');
    div.setAttribute("id", "cardsGrid");

    dados.forEach((elemento) => {
        div.appendChild(criaCardAleatorio(elemento))
    });

    secao.appendChild(h2);
    secao.appendChild(div);

    return secao;
}

export const criaHero = (classes) => {
    const superDiv = document.createElement('div');
    superDiv.classList.add('hero');

    const mediumDiv = document.createElement('div');
    mediumDiv.classList.add('hero-content');

    const h1 = document.createElement('h1');
    h1.textContent = "Promoção de Verão Steam";
    

    const paragrafo = document.createElement('p');
    paragrafo.textContent = "Milhares de jogos com até 90% de deconto. Não perca essa oportunidade!";

    const divBotao = document.createElement('div');
    divBotao.classList.add('div-botao');

    const botao = document.createElement('button');
    botao.textContent = "Explorar Ofertas";
    botao.classList.add('cta');

    mediumDiv.append(h1);
    mediumDiv.append(paragrafo);
    divBotao.append(botao)
    mediumDiv.append(divBotao);
    superDiv.append(mediumDiv);

    return superDiv
}


export const criaSecaoDeJogo = (titulo, descricao, imagem) => {

    const section = document.createElement("section");
    section.classList.add("secao-jogo");

    const divImagem = document.createElement("div");
    divImagem.classList.add("div-imagem-jogo");

    const img = document.createElement("img");
    img.src = imagem;
    img.alt = titulo;
    img.classList.add("img-jogo");

    divImagem.appendChild(img);

    const divInfo = document.createElement("div");
    divInfo.classList.add("div-info-jogo");

    const h1 = document.createElement("h1");
    h1.textContent = titulo;
    h1.classList.add("titulo-jogo");

    const p = document.createElement("p");
    p.textContent = descricao;
    p.classList.add("descricao-jogo");

    const btn = document.createElement("button");
    btn.textContent = "Adicionar à Biblioteca";
    btn.classList.add("btn-jogo");

    divInfo.appendChild(h1);
    divInfo.appendChild(p);
    divInfo.appendChild(btn);

    section.appendChild(divImagem);
    section.appendChild(divInfo);

    return section;
};

