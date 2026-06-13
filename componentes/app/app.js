import dados2 from "../jogo/jogos.json" with {type: "json"};
import * as Jogos from "../jogo/jogos.js";

const criarLink = (texto, link) => {
    const a = document.createElement('a');
    a.textContent = texto;
    a.setAttribute('href', link);
    a.setAttribute('data-link', '');
    a.classList.add("link-header");
    return a;
}
const sobre = () => {
    const divSobre = document.createElement('div');
    const paragrafo = document.createElement('p');
    paragrafo.textContent = "Sobre";
    divSobre.appendChild(paragrafo);
    return divSobre;
}

const criaHeader = () => {
    const header = document.createElement('header')
    header.classList.add("header");
    const div = document.createElement('div')
    const divLink = document.createElement('div');
    divLink.classList.add("div-links");
    div.classList.add('div-logo')
    const img = document.createElement('img');
    img.src = "./componentes/logo_steam.svg"
    img.classList.add("logo");
    div.appendChild(img);

    const nav = document.createElement('nav')
    nav.setAttribute('id', 'subnav')

    const a1 = criarLink('Loja', '/loja')
    const a2 = criarLink('Comunidade', '/comunidade')
    const a3 = criarLink('Jogos', '/jogos')
    const a4 = criarLink('Sobre', '/sobre')


    header.appendChild(div)
    header.appendChild(divLink)
    nav.appendChild(a1)
    nav.appendChild(a2)
    nav.appendChild(a3)
    nav.appendChild(a4)
    divLink.appendChild(nav);

    return header;
}

const criaSecaoDeJogo = (h1Param, pParam, img) => {
    const divJogoContent = document.createElement("div");
    divJogoContent.classList.add("jogo-content");

    const divjogoInfo = document.createElement("div");
    divjogoInfo.classList.add("jogo-info");

    const divjogoBotao = document.createElement("div");
    divjogoInfo.classList.add("div-botao");

    const h1 = document.createElement("h1");
    h1.textContent = h1Param;

    const paragrafo = document.createElement("p");
    paragrafo.textContent = pParam;
    paragrafo.classList.add("paragrafo-secao-jogo");

    const divImagem = document.createElement("div");
    divImagem.classList.add("jogo-imagem");

    const botao = document.createElement("button");
    botao.textContent = "Comprar NOME DO JOGO";
    botao.classList.add("cta");

    const imagem = document.createElement("img");
    imagem.src = img;
    imagem.width = 700;

    divJogoContent.appendChild(divjogoInfo);
    divjogoInfo.appendChild(h1);
    divjogoInfo.appendChild(paragrafo);
    divImagem.appendChild(imagem);
    divjogoBotao.appendChild(botao);
    divjogoInfo.appendChild(divImagem);
    divjogoInfo.appendChild(divjogoBotao);

    return divJogoContent;
}

const criaContato = () => {
    const obj = document.createElement('section');
    obj.innerHTML = `<section class="contact">
        <h2>Receba Ofertas Exclusivas</h2>
        <form>
            <input type="text" placeholder="Seu Nome" required>
            <input type="email" placeholder="Seu Email" required>
            <button type="submit">Cadastrar</button>
        </form>
    </section>`
    return obj;
}
const criaFooter = () => {
    const obj = document.createElement('section');
    obj.innerHTML = `<footer>
         <p>Página Desenvolvida para Aula de Front-End II </p>
     </footer>`
    return obj;
}
const criaLoja = () => {
    const obj = document.createElement('section');
    obj.innerHTML = `
         <p>pag loja</p>
    `
    return obj;
}
const criaSobre = () => {
    const obj = document.createElement('section');
    obj.innerHTML = `
         <p>pag sobre</p>
    `
    return obj;
}
const criaComunidade = () => {
    const obj = document.createElement('section');
    obj.innerHTML = `
         <p>pag comunidade</p>
    `
    return obj;
}
const initApps = () => {
    const root = document.getElementById("root");
    root.appendChild(criaHeader());
    root.appendChild(Jogos.criaHero());
    root.appendChild(Jogos.criaSecaoJogos());
    root.appendChild(criaContato());
    root.appendChild(criaFooter());
}

const initCorpo = () => {
    const div = document.createElement("div");

    div.appendChild(Jogos.criaHero());
    div.appendChild(Jogos.criaSecaoJogos());
    div.appendChild(criaContato());

    return div;
}

const initJogo = () => {
    const root = document.getElementById("root");

    const linkCss = document.createElement("link");
    linkCss.setAttribute("rel", "stylesheet");
    linkCss.setAttribute("href", "./componentes/app/app.css");
    document.head.appendChild(linkCss);

    root.appendChild(criaHeader());
    root.appendChild(criaSecaoDeJogo("NOME DO JOGO", "Grand Theft Auto V é um jogo eletrônico de ação e aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games.", "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg"));
    root.appendChild(Jogos.criaHero());
    root.appendChild(Jogos.criaSecaoJogos());
    root.appendChild(criaContato());
    root.appendChild(criaFooter());
}

// loja ------------------------------------------------------------------------------------------------------------------
const initLoja = () => {
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

    const paragrafo = document.createElement('p');
    paragrafo.textContent = "Descontos e Eventos";
    paragrafo.classList.add('titulo-desconto-loja')

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
const divCategoriaTittle = document.createElement('div');
divCategoriaTittle.classList.add('div-tittle-categoria');

const tituloCategoria = document.createElement('p');
tituloCategoria.textContent = "Explorar por Categoria";
tituloCategoria.classList.add('titulo-categoria');

const divCategoria = document.createElement('div');
divCategoria.classList.add('div-pai-categoria');
const divFilhaCategoria = document.createElement('div');
divFilhaCategoria.classList.add('div-filha-categoria')
divCategoriaTittle.append(tituloCategoria);

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
divCategoriaTittle.append(divFilhaCategoria);

divCategoria.appendChild(divCategoriaTittle);
divLoja.append(divCategoria);
return divLoja;
}










const app = document.getElementById("app");

const rotasComArrow = {
    "/index.html": {
        renderizar: function () {
            return `
        <h1>Home</h1>`}
    },

    "/loja": {
        renderizar: function () {
            return `
        <h1>Loja</h1>
        <p>Página Loja</p>`}
    },

    "/sobre": {
        renderizar: function () {
            return `
        <h1>sobre</h1>
        <p>Informações sobre o Sistema</p>`}
    },

    "/comunidade": {
        renderizar: function () {
            return `
         <h1>comunidade</h1>
        <p>Página comunidade</p>`}
    },
    "/jogos": {
        renderizar: function (id) {
            return `
         <h1>jogos</h1>
        <p>ID: ${id}</p>`
        }
    },
};


document.addEventListener("click", function (event) {

    const link = event.target.closest("[data-link]");

    if (link) {
        event.preventDefault();

        const novocaminho = link.getAttribute("href"); //pega href="/jogos/10"

        navegarPara(novocaminho);
    }
});

function renderizandoRotas(path) {
    app.innerHTML = "";
    let partes = path.split("/");
    const novoPath = "/" + partes[1];
    const id = Number(partes[2]);


    if (novoPath === "/jogos" && id) {
        const jogo = dados2.find(elemento => elemento.appid == id);
        if (jogo) {
            app.appendChild(
                criaSecaoDeJogo(
                    jogo.titulo,
                    jogo.descricao,
                    jogo.url_imagem
                )
            );
        } else {
            app.innerHTML = "<h1>Jogo não encontrado</h1>";
        }
        return;
    }

    if (novoPath === "/jogos") {
        app.appendChild(initCorpo());
        return;
    }
    else if (novoPath === "/loja") {
        app.appendChild(initLoja());
        return
    }
    const pagina = rotasComArrow[novoPath];
    if (pagina) {
        app.innerHTML = pagina.renderizar();
    } else {
        app.innerHTML = "<h1>404</h1>";
    }
}

function navegarPara(path) {
    history.pushState({}, "", path);
    renderizandoRotas(path);
}

window.addEventListener("popstate", function () {
    renderizandoRotas(window.location.pathname);
});

const init = () => {
    const root = document.getElementById("root");

    root.appendChild(criaHeader());
    root.appendChild(app);
    root.appendChild(criaFooter());

    renderizandoRotas(window.location.pathname);
};

init();



