import { chamarAPI } from './main.js';

const div_conteudo = document.querySelector('#div_conteudo');
const div_voltar = document.querySelector('#div_voltar');
export const div_resposta = document.querySelector('#div_resposta');

export function divBuscarExtensao() {

    div_conteudo.classList.remove('center');
    div_conteudo.classList.add('div_inputs');

    div_voltar.style.display = 'block';
    div_resposta.style.display = 'flex';

    div_conteudo.innerHTML = '';
    div_conteudo.innerHTML = `
        <div class="input-group mb-3" id="div_input">
            <input type="text" class="form-control inputs input_extensao" placeholder="Extensão" aria-label="Extensão"
                aria-describedby="button-addon2">
            <button onclick='limparDivResposta(loading)' class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
        </div>
    `;
}

export function divBuscarNome() {

    div_conteudo.classList.remove('center');
    div_conteudo.classList.add('div_inputs');

    div_voltar.style.display = 'block';
    div_resposta.style.display = 'flex';

    div_conteudo.innerHTML = '';
    div_conteudo.innerHTML = `
        <div class="input-group mb-3" id="div_input">
            <input type="text" class="form-control inputs input_nome" placeholder="Nome" aria-label="Nome"
                aria-describedby="button-addon2">
            <button onclick='limparDivResposta(loading)' class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
        </div>
    `;
}

export function divVoltar() {

    div_conteudo.classList.remove('div_inputs');
    div_conteudo.classList.add('center');

    div_voltar.style.display = 'none';
    div_resposta.style.display = 'none';

    div_resposta.innerHTML = '';
    div_conteudo.innerHTML = '';

    div_conteudo.innerHTML = `
        <div id="div_buttons">
            <button onclick="divBuscarExtensao()" type="button" class="btn btn-secondary">Procurar extensão</button>
            <button onclick="divBuscarNome()" type="button" class="btn btn-secondary">Procurar nome</button>
        </div>
    `;
}

export function loading(callback) {

    div_resposta.classList.remove('grid_cartas');
    div_resposta.classList.add('center');

    div_resposta.innerHTML = '';
    div_resposta.innerHTML = `
        <div id="div_loading">
            <img id="loading" src="img/loading.gif">
        </div>
    `;

    callback();
}

export function nenhumResultado() {

    div_resposta.classList.remove('grid_cartas');
    div_resposta.classList.add('center');

    div_resposta.innerHTML = '';
    div_resposta.innerHTML = `
        <div id="div_nenhum_resultado">
            <p>Nenhum resultado encontrado</p>
        </div>
    `;
}

export function limparDivResposta(callback) {

    div_resposta.innerHTML = '';
    callback(chamarAPI);
}

export function mostrarCartas(cartas) {

    div_resposta.innerHTML = '';

    for (let i = 0; i < cartas.length; i++) {

        let div_card = document.createElement('div');
        let div_imagem = document.createElement('div');
        let div_informacoes = document.createElement('div');

        div_card.classList.add('col');
        div_imagem.classList.add('div_imagem');
        div_informacoes.classList.add('div_informacoes');

        div_resposta.appendChild(div_card);
        div_card.appendChild(div_imagem);
        div_card.appendChild(div_informacoes);

        let objCarta = cartas[i];

        for (let elemento of Object.keys(objCarta)) {

            switch (objCarta[elemento] !== '') {

                case true:
                    if (elemento === 'imagem') {
                        div_imagem.innerHTML += objCarta[elemento];

                    } else if (elemento === 'mecanicas') {
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