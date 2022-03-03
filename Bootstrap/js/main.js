import { divBuscarExtensao, divBuscarNome, divVoltar, nenhumResultado, limparDivResposta, loading } from './DOM.js';
import { receberRespostaAPI } from './API.js';
import { limpandoArray } from './atribuindo_valores.js';

window.divBuscarExtensao = divBuscarExtensao;
window.divBuscarNome = divBuscarNome;
window.divVoltar = divVoltar;
window.chamarAPI = chamarAPI;
window.loading = loading;
window.limparDivResposta = limparDivResposta;

export function chamarAPI() {

    switch (document.querySelector('.inputs').classList.contains('input_extensao') === true) {

        case true:

            let extensao = document.querySelector('.input_extensao').value;

            if (extensao !== '') {
                limpandoArray();
                receberRespostaAPI(extensao);
            } else {
                nenhumResultado();
            }

            break;

        case false:

            let nome = document.querySelector('.input_nome').value;

            if (nome !== '') {
                limpandoArray();
                receberRespostaAPI(nome);
            } else {
                nenhumResultado();
            }

            break;
    }
}