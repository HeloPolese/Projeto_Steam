
import dados2 from "../jogo/jogos.json" with {type: "json"};
import * as Jogos from "../jogo/jogos.js";



export const initLoja = () => {
    const divLoja = document.createElement('div');
    const divCatalogo = document.createElement('div');
    const divLinksCatalogo = document.createElement('div');

    divLinksCatalogo.classList.add("div-links-catalogo");

    const divVideoLoja = document.createElement('div');

    const divDescontosEventos = document.createElement('div');

    const divBuscaLoja = document.createElement('div');
    divBuscaLoja.classList.add("div-busca-loja");

    const inputBuscaLoja = document.createElement('input');
    inputBuscaLoja.classList.add("input-busca-loja");
    inputBuscaLoja.placeholder = "Procurar na loja...";
    divBuscaLoja.appendChild(inputBuscaLoja);
    const inputIconSearch = document.createElement('div');
    inputIconSearch.innerHTML = '<ion-icon name="search-outline"></ion-icon>';
    inputIconSearch.classList.add("input-icon-search");
    divBuscaLoja.appendChild(inputIconSearch);

    const iframe = document.createElement('iframe');

    divCatalogo.classList.add("div-catalogo-loja");

    const linkExplorar = document.createElement('a');
    linkExplorar.textContent = "Explorar";
    const linkRecomendacoes = document.createElement('a');
    linkRecomendacoes.textContent = "Recomendações";
    const linkCategoria = document.createElement('a');
    linkCategoria.textContent = "Categoria";
    const linkMais = document.createElement('a');
    linkMais.textContent = "Mais";

    divLinksCatalogo.appendChild(linkExplorar);
    divLinksCatalogo.appendChild(linkRecomendacoes);
    divLinksCatalogo.appendChild(linkCategoria);
    divLinksCatalogo.appendChild(linkMais);

    divCatalogo.appendChild(divLinksCatalogo);
    divCatalogo.classList.add('div-catalogo')
    divLinksCatalogo.appendChild(divBuscaLoja);

    divVideoLoja.classList.add("div-video-loja");
    iframe.classList.add("video-loja");
    iframe.src = "https://www.youtube.com/embed/D6io5XZWBHk?autoplay=1&mute=1&loop=1&playlist=D6io5XZWBHk&controls=0&rel=0";
    iframe.title = "YouTube video player";
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; fullscreen";
    iframe.allowFullscreen = true;

    divLoja.appendChild(divCatalogo);
    divVideoLoja.appendChild(iframe);

    divLoja.appendChild(divVideoLoja);

    //Descontos e Eventos
    const divPaiCategoria = document.createElement('div');
    divPaiCategoria.classList.add('super-categoria')
    const paragrafo = document.createElement('p');
    const paragrafo2 = document.createElement('p');
    paragrafo.textContent = "Descontos e Eventos";
    paragrafo2.textContent = "Explora por categoria";
    paragrafo.classList.add('titulo-desconto-loja');
    paragrafo2.classList.add('titulo-desconto-loja')

    const divGamesDesconto = document.createElement('div');
    divDescontosEventos.classList.add('div-desconto-eventos');
    divGamesDesconto.classList.add('div-game-desconto');
    const divjogo = document.createElement('div');
    divjogo.classList.add("div-jogo");
    const div1 = document.createElement('div');
    div1.classList.add('div-jogo-desconto-block');
    const btnEsquerda = document.createElement("button");
    btnEsquerda.innerHTML = "◀";
    btnEsquerda.classList.add("btn-scroll");

    const btnDireita = document.createElement("button");
    btnDireita.innerHTML = "▶";
    btnDireita.classList.add("btn-scroll");

    btnEsquerda.addEventListener("click", () => {
        div1.scrollBy({
            left: -600,
            behavior: "smooth"
        });
    });

    btnDireita.addEventListener("click", () => {
        div1.scrollBy({
            left: 600,
            behavior: "smooth"
        });
    });
    for (let index = 1; index < 13; index++) {
        div1.appendChild(Jogos.criaCardAleatorioDesconto());
    }

    const containerScroll = document.createElement("div");
    containerScroll.classList.add("container-scroll");

    containerScroll.appendChild(btnEsquerda);
    containerScroll.appendChild(div1);
    containerScroll.appendChild(btnDireita);

    divjogo.appendChild(containerScroll);

    divGamesDesconto.appendChild(paragrafo);
    divDescontosEventos.appendChild(divGamesDesconto);
    divGamesDesconto.appendChild(divjogo);
    divLoja.appendChild(divDescontosEventos);



    // Explorar Categoria 



    const tituloCategoria = document.createElement('p');
    tituloCategoria.textContent = "Explorar por Categoria";
    tituloCategoria.classList.add('titulo-categoria');

    const divCategoria = document.createElement('div');
    divCategoria.classList.add('div-pai-categoria');

    const divFilhaCategoria = document.createElement('div');
    divFilhaCategoria.classList.add('div-filha-categoria');




    const divSecaoCategoria = document.createElement('div');
    divSecaoCategoria.classList.add('div-cards-categoria');



    const btnEsquerdaCategoria = document.createElement("button");
    btnEsquerdaCategoria.innerHTML = "◀";
    btnEsquerdaCategoria.classList.add("btn-scroll");

    const btnDireitaCategoria = document.createElement("button");
    btnDireitaCategoria.innerHTML = "▶";
    btnDireitaCategoria.classList.add("btn-scroll");

    btnEsquerdaCategoria.addEventListener("click", () => {
        divSecaoCategoria.scrollBy({
            left: -600,
            behavior: "smooth"
        });
    });

    btnDireitaCategoria.addEventListener("click", () => {
        divSecaoCategoria.scrollBy({
            left: 600,
            behavior: "smooth"
        });
    });

    for (let index = 1; index < 11; index++) {
        divSecaoCategoria.appendChild(
            Jogos.criaCardImgAleatorio()
        );
    }

    divFilhaCategoria.appendChild(btnEsquerdaCategoria);
    divFilhaCategoria.appendChild(divSecaoCategoria);
    divFilhaCategoria.appendChild(btnDireitaCategoria);
    divCategoria.append(divFilhaCategoria);
    divPaiCategoria.append(paragrafo2)
    divPaiCategoria.append(divCategoria);
    divLoja.append(divPaiCategoria);
    return divLoja;
}
