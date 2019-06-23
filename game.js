class Game {
    constructor(parentElement, size = 4) {
        let gameFielElemnt = document.createElement('div', {class: 'game'});
        parentElement.appendChild(gameFielElemtn);

        let headerElement = document.createElement('div', {class: 'header'});
        gameFielElemnt.appendChild(headerElement);

        this.rating = 0;

        headerElement.innerHTML = 'Rating: ' + this.rating;

        let fieldElement = document.createElement('div', {class: 'field'});
        gameFielElemnt.appendChild(fieldElement);

        for (let i = 0; i < size; i++) {
            for (let k = 0; k < size; k++) {
                let cellElement = document.createElement('div', {class: 'cell'});
                gameFielElemnt.appendChild(cellElement);

                if (Math.random() > 0.8) {
                    cellElement.innerHTML = Math.random() > 0.5 ? 4 : 2;
                }

                fieldElement.appendChild(cellElement);
            }
        }
    }
}