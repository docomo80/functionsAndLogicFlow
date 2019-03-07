function solve() {
    let from = document.getElementById('from');
    let to = document.getElementById('to');
    let cards = document.getElementById('cards');

    document.getElementsByTagName('button')[0]
        .addEventListener('click', clickedBtn);

    function clickedBtn() {
        let selectedSuit = document.getElementsByTagName('select')[0].value;

        let valuesOfRange = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        for (let i = valuesOfRange.indexOf(from.value); i <= valuesOfRange.indexOf(to.value); i++) {
            let divElement = document.createElement('div');
            divElement.classList.add('card');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');

            let unicodeCharacter = selectedSuit.split(' ')[1];
            p1.innerHTML = unicodeCharacter;
            p2.innerHTML = valuesOfRange[i];
            p3.innerHTML = unicodeCharacter;

            divElement.appendChild(p1);
            divElement.appendChild(p2);
            divElement.appendChild(p3);
            cards.appendChild(divElement);
        }
    }
}