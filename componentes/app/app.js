import dados2 from "../jogo/jogos.json" with {type: "json"};
import * as Jogos from "../jogo/jogos.js";
import { criaSecaoDeJogo } from "../jogo/jogos.js";
import { initLoja } from "./loja.js";
import { initComunidade } from "./comunidade.js";


const criarLink = (texto, link) => {
    const a = document.createElement('a');
    a.textContent = texto;
    a.setAttribute('href', link);
    a.setAttribute('data-link', '');
    a.classList.add("link-header");
    return a;
}


const initSobre = () => {
    const divSobre = document.createElement('div');
    divSobre.classList.add('div-sobre');

    const divConteinerSobre = document.createElement('div');
    divConteinerSobre.classList.add('div-conteiner-sobre');

    const subConteinerSobre1 = document.createElement('div');
    subConteinerSobre1.classList.add('sub-conteirner-sobre1');

    const imgSteam = document.createElement('img');
    imgSteam.src = "./componentes/logo_steam.svg";
    imgSteam.classList.add('img-steam-sobre');

    const divOnlines = document.createElement('div');
    divOnlines.classList.add('div-onlines');

    const pOnline = document.createElement('p-online');
    pOnline.textContent = 'Online:  35,260,833';

    const pOnline2 = document.createElement('p-online');
    pOnline2.textContent = 'A jogar agora:  9,837,125';

    const bt = document.createElement('button');
    bt.textContent = 'Instalar Steam';
    bt.classList.add('bt-instalar-steam-sobre');



    divOnlines.append(pOnline);
    divOnlines.append(pOnline2);


    const pDescSteam = document.createElement('p');
    pDescSteam.textContent = 'O Steam é a derradeira plataforma para jogar, criar e falar sobre jogos.';
    pDescSteam.classList.add("p-desc-steam");


    const iframe = document.createElement('iframe');
    iframe.classList.add("video-loja2");
    iframe.src = "https://www.youtube.com/embed/ot7uXNQskhs?autoplay=1&mute=1&loop=1&playlist=ot7uXNQskhs&controls=0&rel=0";


    iframe.title = "YouTube video player";
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; fullscreen";
    iframe.allowFullscreen = true;

    const subConteinerSobre2 = document.createElement('div');
    subConteinerSobre2.classList.add('sub-conteirner-sobre2');

    subConteinerSobre1.append(imgSteam);
    subConteinerSobre1.append(pDescSteam);
    subConteinerSobre1.append(divOnlines);
    subConteinerSobre1.append(bt);
    subConteinerSobre2.append(iframe);


    const superdivSobre = document.createElement('div');
    superdivSobre.classList.add('super-div-sobre');


    const divAcesso = document.createElement('div');
    divAcesso.classList.add('div-acesso');

    const subDivAcesso = document.createElement('div');
    subDivAcesso.classList.add('sub-div-acesso');

    const tituloAcesso = document.createElement('h1');
    tituloAcesso.textContent = 'Acesso imediato a jogos';
    tituloAcesso.classList.add('titulo-acesso-sobre');

    const pAcesso = document.createElement('p');
    pAcesso.textContent = 'Com mais de 30.000 jogos, desde AAA até Indie, e tudo o mais pelo meio. Desfruta de promoções exclusivas, atualizações automáticas e muitas outras vantagens.';

    const linkLoja = document.createElement('a');
    linkLoja.textContent = "Visita a Loja";
    linkLoja.classList.add('link-loja');

    linkLoja.href = "/loja";
    linkLoja.setAttribute("data-link", "");
    const icon = document.createElement('i');
    icon.innerHTML = '<ion-icon name="arrow-forward-outline"></ion-icon>';
    icon.classList.add('icon');

    const divVisitar = document.createElement('div');
    divVisitar.classList.add('div-visitar');

    subDivAcesso.append(tituloAcesso);
    subDivAcesso.append(pAcesso);
    divVisitar.append(linkLoja);
    divVisitar.append(icon)
    subDivAcesso.append(divVisitar)
    divAcesso.append(subDivAcesso);


    superdivSobre.append(subConteinerSobre1);
    superdivSobre.append(subConteinerSobre2);

    divSobre.append(superdivSobre);
    divSobre.append(divAcesso);
    return divSobre;
}

const criaHeader = () => {
    const header = document.createElement('header')
    header.classList.add("header");

    const div = document.createElement('div');

    const divLink = document.createElement('div');

    divLink.classList.add("div-links");
    div.classList.add('div-logo');

    const img = document.createElement('img');
    img.src = "./componentes/logo_steam.svg";
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


const criaSobre = () => {
    const obj = document.createElement('section');
    obj.innerHTML = `
         <p>pag sobre</p>
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

        const novocaminho = link.getAttribute("href");

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
        return;
    }
    else if (novoPath === "/index.html") {
        app.appendChild(initLoja());
        return;
    }
    else if (novoPath === "/comunidade") {
        app.appendChild(initComunidade());
        return;
    }
    else if (novoPath === "/sobre") {
        app.appendChild(initSobre());
        return;
    }

    const pagina = rotasComArrow[novoPath];

    if (pagina) {
        app.innerHTML = pagina.renderizar();
    }
    else {
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



