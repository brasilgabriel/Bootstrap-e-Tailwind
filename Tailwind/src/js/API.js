import { loading } from './DOM.js';
import { atribuirValores } from './atribuindo_valores.js';

window.loading = loading;

let contador = 0;
let cartas = [];

const hearthstoneAPI = () => {

    return fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "46a2224ba6msh030c63f1d0446e2p131d2fjsn2c4402b72d18"
        }
    })
}

export async function receberRespostaAPI() {

    try {
        const respostaAPI = await hearthstoneAPI();
        const cardsAPI = await respostaAPI.json();

        for (let i = 0; i < cardsAPI.Legacy.length; i++) {

            switch (contador < 28) {

                case true:

                    if (cardsAPI.Legacy[i].img !== null && cardsAPI.Legacy[i].img !== undefined) {

                        cartas.push(cardsAPI.Legacy[i]);
                        contador++;
                    }

                    break;
            }
        }

        atribuirValores(cartas);
        contador = 0;

    } catch (erro) {
        console.log(erro);
        alert('Ocorreu algum erro!');
    }
}