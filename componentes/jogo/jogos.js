import dados from "./jogos.json" with {type: "json"};

 const criaCardImg = (id, url) => {

    const card = document.createElement("a");
    card.classList.add("game-card-img");
    card.setAttribute("href", `/jogos/${id}`);
    card.setAttribute("data-link", "");

    const img = document.createElement("img");
    img.classList.add('imagem-jogo');
    img.src = url;
    img.width = 200;

    card.appendChild(img);
    return card;
}
export const criaCardImgAleatorio = () => {
    var ind = Math.floor(Math.random() * dados.length);
    let card = criaCardImg(dados[ind].appid,dados[ind].url_imagem);
    return card;
}

const criaCard = (id, tituloCard, descricao, url,desconto,valor_mercado) => {
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
    p.textContent  = "De R$ " + valor_mercado + " Por R$" + valorAposDesconto.toFixed(2) ;
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
    let card = criaCard(dados[ind].appid, dados[ind].titulo, dados[ind].descricao, dados[ind].url_imagem,dados[ind].desconto,dados[ind].valor_mercado);
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
    const obj = document.createElement('section');

    obj.innerHTML = `<section class="hero">
        <div class="hero-content">
            <h1>Promoção de Verão Steam</h1>
            <p>Milhares de jogos com até 90% de deconto. Não perca essa oportunidade!</p>
            <button class="cta">Explorar Ofertas</button>
        </div>
    </section>`
    return obj
}



