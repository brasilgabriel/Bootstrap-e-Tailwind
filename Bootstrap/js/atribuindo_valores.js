import { mostrarCartas } from './DOM.js';

export let cartas = [];
let conteudoCartas = [];

export function limpandoArray() {
    cartas = [];
    conteudoCartas = [];
}

export function atribuirValores(cardsAPI) {

    cardsAPI.forEach(carta => {
        let mechanics = []

        if (carta.mechanics !== undefined) {
            for (let i = 0; i < carta.mechanics.length; i++) {
                mechanics.push(`<p><b>Mecânica:</b> ${carta.mechanics[i].name}</p>`)
            }
        }

        const objCard = {
            nome: carta.name !== undefined ? `<p><b>Nome:</b> ${carta.name}</p>` : '',
            expansao: carta.cardSet !== undefined ? `<p><b>Expansão:</b> ${carta.cardSet}</p>` : '',
            custo: carta.cost !== undefined ? `<p><b>Custo:</b> ${carta.cost}</p>` : '',
            classe: carta.playerClass !== undefined ? `<p><b>Classe:</b> ${carta.playerClass}</p>` : '',
            textoInformativo: carta.text !== undefined ? `<p><b>Texto Informativo:</b> ${carta.text}</p>` : '',
            raca: carta.race !== undefined ? `<p><b>Raça:</b> ${carta.race}</p>` : '',
            mecanicas: mechanics !== '' ? mechanics : '',
            imagem: `<img src="${carta.img}">`,
            atributoAtaque: carta.attack !== undefined ? `<p><b>Atributo de Ataque:</b> ${carta.attack}</p>` : '',
            atributoVida: carta.health !== undefined ? `<p><b>Atributo de Vida:</b> ${carta.health}</p>` : '',
            tipo: carta.type !== undefined ? `<p><b>Tipo:</b> ${carta.type}</p>` : '',
            historia: carta.flavor !== undefined ? `<p><b>História da carta:</b> ${carta.flavor}</p>` : '',
            artista: carta.artist !== undefined ? `<p><b>Artista:</b> ${carta.artist}</p>` : ''
        };

        conteudoCartas.push(objCard);
    });

    mostrarCartas(conteudoCartas);
    limpandoArray();
}