import { cartas, atribuirValores } from './atribuindo_valores.js';
import { nenhumResultado, div_resposta } from './DOM.js';

let contador = 0;
let cardsAPI;

function hearthstoneAPIExtensao(set) {

    return fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${set}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "46a2224ba6msh030c63f1d0446e2p131d2fjsn2c4402b72d18"
        }
    })
}

function hearthstoneAPINome(nome) {

    return fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${nome}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "46a2224ba6msh030c63f1d0446e2p131d2fjsn2c4402b72d18"
        }
    })
}

export async function receberRespostaAPI(prop) {

    try {

        // verifica qual é o input que foi usado, pois a URL da API muda
        if (document.querySelector('.inputs').classList.contains('input_extensao') === true) {
            const respostaAPI = await hearthstoneAPIExtensao(prop);
            cardsAPI = await respostaAPI.json();

        } else if (document.querySelector('.inputs').classList.contains('input_nome') === true) {
            const respostaAPI = await hearthstoneAPINome(prop);
            cardsAPI = await respostaAPI.json();
        }

        if (cardsAPI.length > 0) {
            for (let i = 0; i < cardsAPI.length; i++) {

                switch (contador < 28) {

                    case true:

                        if (cardsAPI[i].img !== null && cardsAPI[i].img !== undefined) {

                            cartas.push(cardsAPI[i]);
                            contador++;
                        }

                        break;
                }
            }

            div_resposta.classList.remove('center');
            div_resposta.classList.add('grid_cartas');
            div_resposta.classList.add('row');

            atribuirValores(cartas);
            contador = 0;

        } else {
            nenhumResultado();
        }

    } catch (erro) {
        console.log(erro);
        alert('Ocorreu algum erro!');
    }
}