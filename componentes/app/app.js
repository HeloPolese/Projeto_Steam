import dados2 from "../jogo/jogos.json" with { type: "json" };
import * as Jogos from "../jogo/jogos.js";
import { criaSecaoDeJogo } from "../jogo/jogos.js";
import { initLoja } from "./loja.js";
import { initComunidade } from "./comunidade.js";
import { initSobre } from "./sobre.js";

const app = document.getElementById("app");



const criarLink = (texto, link) => {
    const a = document.createElement("a");
    a.textContent = texto;
    a.setAttribute("href", link);
    a.setAttribute("data-link", "");
    a.classList.add("link-header");
    return a;
};

const criaHeader = () => {
    const header = document.createElement("header");
    header.classList.add("header");

    const div = document.createElement("div");
    const divLink = document.createElement("div");

    div.classList.add("div-logo");
    divLink.classList.add("div-links");

    const img = document.createElement("img");
    img.src = "./componentes/logo_steam.svg";
    img.classList.add("logo");
    div.appendChild(img);

    const nav = document.createElement("nav");

    const a1 = criarLink("Loja", "#/loja");
    const a2 = criarLink("Comunidade", "#/comunidade");
    const a3 = criarLink("Jogos", "#/jogos");
    const a4 = criarLink("Sobre", "#/sobre");

    nav.append(a1, a2, a3, a4);

    divLink.appendChild(nav);

    header.append(div, divLink);

    return header;
};



const criaFooter = () => {
    const footer = document.createElement("footer");
    footer.innerHTML = `<p>Página Desenvolvida para Aula de Front-End II</p>`;
    return footer;
};


document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-link]");
    if (link) {
        event.preventDefault();
        window.location.hash = link.getAttribute("href");
    }
});


function getPath() {
    return window.location.hash.replace("#", "") || "/";
}

function renderizandoRotas() {
    app.innerHTML = "";

    const path = getPath();
    const partes = path.split("/");
    const novoPath = "/" + (partes[1] || "");
    const id = Number(partes[2]);

    if (novoPath === "/jogos" && id) {
        const jogo = dados2.find(el => el.appid == id);

        if (jogo) {
            app.appendChild(
                criaSecaoDeJogo(
                    jogo.titulo,
                    jogo.descricao,
                    jogo.url_imagem
                )
            );
        }
         else {
            app.innerHTML = "<h1>Jogo não encontrado</h1>";
        }
        return;
    }


    if (novoPath === "/jogos") {
        app.appendChild(Jogos.criaHero());
        app.appendChild(Jogos.criaSecaoJogos());
        return;
    }
    if (novoPath === "/loja") {
        app.appendChild(initLoja());
        return;
    }
    if (novoPath === "/" || novoPath === "/index") {
        app.appendChild(initLoja());
        return;
    }
    if (novoPath === "/comunidade") {
        app.appendChild(initComunidade());
        return;
    }
    if (novoPath === "/sobre") {
        app.appendChild(initSobre());
        return;
    }

    app.innerHTML = "<h1>404</h1>";
}



window.addEventListener("hashchange", renderizandoRotas);
window.addEventListener("load", renderizandoRotas);


const init = () => {
    const root = document.getElementById("root");

    root.appendChild(criaHeader());
    root.appendChild(app);
    root.appendChild(criaFooter());

    renderizandoRotas();
};

init();