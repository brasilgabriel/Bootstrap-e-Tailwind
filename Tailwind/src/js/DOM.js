import { receberRespostaAPI } from './API.js';

const section = document.querySelector('#section');
const div_botao = document.querySelector('#div_botao');

// função para mostrar um gif de loading
export function loading() {

    div_botao.style.display = "none";
    let div_loading = document.createElement('div');

    div_loading.setAttribute('id', 'div_loading');
    div_loading.classList.add('flex'); // adicionando as classes do Tailwind
    div_loading.classList.add('items-center');
    div_loading.classList.add('justify-center');

    div_loading.innerHTML = `<img id="loading" src="img/loading.gif">`;

    section.appendChild(div_loading);

    receberRespostaAPI();
}

// função para colocar as cartas no HTML
export function mostrarCartas(cartas) {

    div_loading.style.display = "none";
    let div_cartas = document.createElement('div');

    div_cartas.classList.add('grid'); // adicionando as classes do Tailwind
    div_cartas.classList.add('grid-cols-1');
    div_cartas.classList.add('lg:grid-cols-2');
    div_cartas.classList.add('2xl:grid-cols-3');

    section.appendChild(div_cartas);

    for (let i = 0; i < cartas.length; i++) {

        let div_card = document.createElement('div');
        let div_imagem = document.createElement('div');
        let div_informacoes = document.createElement('div');

        div_imagem.classList.add('div_imagem');
        div_informacoes.classList.add('div_informacoes');

        div_cartas.appendChild(div_card);
        div_card.appendChild(div_imagem);
        div_card.appendChild(div_informacoes);

        let objCarta = cartas[i];

        for (let elemento of Object.keys(objCarta)) {

            switch (objCarta[elemento] !== '') {

                case true:
                    if (elemento === 'imagem') { // se for uma imagem, vai ser adicionada em uma div diferente
                        div_imagem.innerHTML += objCarta[elemento];

                    } else if (elemento === 'mecanicas') { // se for mecânicas, vai rodar um loop para adicionar cada mecânica na div informações
                        for (let i = 0; i < objCarta[elemento].length; i++) {
                            let mecanica = objCarta[elemento];
                            div_informacoes.innerHTML += mecanica[i];
                        }

                    } else {
                        div_informacoes.innerHTML += objCarta[elemento];
                    }

                    break;
            }
        }
    };
}