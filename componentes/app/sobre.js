export const initSobre = () => {
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