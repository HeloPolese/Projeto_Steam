export const initComunidade = () => {
    const superCominidade = document.createElement('div');
    superCominidade.classList.add('super-comunidade');

    const tituloComunidade = document.createElement('h2');
    tituloComunidade.classList.add('titulo-comunidade');
    tituloComunidade.textContent = 'Atividades da Comunidade';

    const paragrafoComunidade = document.createElement('p');
    paragrafoComunidade.classList.add('paragrafo-comunidade');
    paragrafoComunidade.textContent = 'Conteúdo oficial e comunitário para todos os jogos e software no Steam.';


    superCominidade.append(tituloComunidade);

    const divTextoComunidade = document.createElement('div');
    divTextoComunidade.classList.add('div-texto-comunidade');

    const divSecaoComunidade = document.createElement('div');
    divSecaoComunidade.classList.add("div-secao-comunidade");


    const divSecaoComunidade1 = document.createElement('div');
    divSecaoComunidade1.classList.add("div-secao-comunidade1");

    const divSecaoComunidade2 = document.createElement('div');
    divSecaoComunidade2.classList.add("div-secao-comunidade2");

    const tituloSecao2 = document.createElement('h2');
    tituloSecao2.textContent = 'Centrais Populares';

    const pCentrais = document.createElement('p');
    pCentrais.classList.add('text-centrais');
    pCentrais.textContent = 'Bem-vindo à comunidade de Centrais Populares! Este é o espaço onde jogadores podem compartilhar experiências, discutir estratégias, tirar dúvidas e acompanhar as novidades relacionadas ao jogo.';


    const tituloSecao = document.createElement('h2');
    tituloSecao.classList.add('titulo-secao');
    tituloSecao.textContent = 'Bem-vindo(a) à Comunidade Steam';


    const textoSecao = document.createElement('p');
    textoSecao.classList.add('texto-secao');
    textoSecao.textContent = 'Inicia a sessão na Comunidade Steam para achares mais Centrais para explorar.';

    const divBtComunidade = document.createElement('div');
    divBtComunidade.classList.add('div-bt-comunidade');

    const botaoComunidade1 = document.createElement('button');
    botaoComunidade1.classList.add('bt-comunidade-1');
    botaoComunidade1.textContent = 'Iniciar Seção';

    const botaoComunidade2 = document.createElement('button');
    botaoComunidade2.classList.add('bt-comunidade-1');
    botaoComunidade2.textContent = "Criar Conta";



    const superDivComentarios = document.createElement('div');
    superDivComentarios.classList.add('super-div-comentarios');

    const tituloComentarios = document.createElement('h2');
    tituloComentarios.textContent = "Recomendações";
    tituloComentarios.classList.add('titulo-comentarios')

    superDivComentarios.append(tituloComentarios);



    const divComentarios = document.createElement('div');
    divComentarios.classList.add('div-comentarios');

    const divComentarios2 = document.createElement('div');
    divComentarios2.classList.add('div-comentarios');

    const maeDivsComentario = document.createElement('div');
    maeDivsComentario.classList.add('mae-div-comentario');



    const divCardComentario1 = document.createElement('div');
    divCardComentario1.classList.add('card-comentarios');

    const imgCardComentario1 = document.createElement('img');
    imgCardComentario1.classList.add('img-comentarios');
    imgCardComentario1.src = 'https://i.pinimg.com/736x/9f/40/25/9f4025d498a39fd76a0d58d54ffd4d94.jpg';

    const textoComentario = document.createElement('p');
    textoComentario.textContent = '@Bia: Comprei este jogo sem muitas expectativas e acabei me surpreendendo bastante. '
    textoComentario.classList.add('texto-comentario');


    const divCardComentario2 = document.createElement('div');
    divCardComentario2.classList.add('card-comentarios');

    const imgCardComentario2 = document.createElement('img');
    imgCardComentario2.classList.add('img-comentarios');
    imgCardComentario2.src = 'https://i.pinimg.com/1200x/14/a9/19/14a919dfbe0c229925f90fa03c3d636d.jpg';

    const textoComentario2 = document.createElement('p');
    textoComentario2.textContent = '@analise: Comprei este jogo sem muitas expectativas e acabei me surpreendendo bastante. ';
    textoComentario2.classList.add('texto-comentario');



    const divCardComentario3 = document.createElement('div');
    divCardComentario3.classList.add('card-comentarios');

    const imgCardComentario3 = document.createElement('img');
    imgCardComentario3.classList.add('img-comentarios');
    imgCardComentario3.src = 'https://i.pinimg.com/736x/ba/94/40/ba9440a16bfa047a86277e62628ec8d8.jpg';

    const textoComentario3 = document.createElement('p');
    textoComentario3.textContent = '@Alex: Depois de mais de 50 horas jogadas, posso dizer que este é um dos melhores títulos do gênero.';
    textoComentario3.classList.add('texto-comentario');



    const divCardComentario4 = document.createElement('div');
    divCardComentario4.classList.add('card-comentarios');

    const imgCardComentario4 = document.createElement('img');
    imgCardComentario4.classList.add('img-comentarios');
    imgCardComentario4.src = 'https://i.pinimg.com/1200x/ec/2d/81/ec2d81971c1a3a289e8b8314d4e7a0df.jpg';

    const textoComentario4 = document.createElement('p');
    textoComentario4.textContent = '@JoãoPires: Comprei este jogo sem muitas expectativas e acabei me surpreendendo bastante. ';
    textoComentario4.classList.add('texto-comentario');

    divCardComentario1.append(imgCardComentario1);
    divCardComentario1.append(textoComentario)

    divCardComentario2.append(imgCardComentario2);
    divCardComentario2.append(textoComentario2);

    divCardComentario3.append(imgCardComentario3);
    divCardComentario3.append(textoComentario3);

    divCardComentario4.append(imgCardComentario4);
    divCardComentario4.append(textoComentario4);

    divComentarios.append(divCardComentario1);
    divComentarios.append(divCardComentario2);
    divComentarios2.append(divCardComentario3);
    divComentarios2.append(divCardComentario4);
    maeDivsComentario.append(divComentarios);
    maeDivsComentario.append(divComentarios2);
    superDivComentarios.append(maeDivsComentario);
 

    divTextoComunidade.append(tituloComunidade);
    divTextoComunidade.append(paragrafoComunidade);

    divSecaoComunidade1.append(tituloSecao);
    divSecaoComunidade1.append(textoSecao);
    divSecaoComunidade2.append(tituloSecao2);
    divSecaoComunidade2.append(pCentrais);
    
    divBtComunidade.append(botaoComunidade1);
    divBtComunidade.append(botaoComunidade2);

    divSecaoComunidade1.append(divBtComunidade);

    divSecaoComunidade.append(divSecaoComunidade1);
    divSecaoComunidade.append(divSecaoComunidade2);




    const divImagemRecomendacoes = document.createElement('div-img-recomendacoes');
    superCominidade.append(divTextoComunidade);
    superCominidade.append(divSecaoComunidade);
    superCominidade.append(superDivComentarios);


    return superCominidade;
}
