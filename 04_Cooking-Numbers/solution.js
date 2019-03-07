function solve() {

    let input = document.getElementById('exercise').children[0];
    // let output = document.getElementById('output').innerHTML;

    let number = input;

    Array.from(document.getElementById('operations').children).forEach((btn) => {
        btn.addEventListener('click', pressedBtn);
    });

    function pressedBtn(btn) {
        if (!number){
            number = 0;
        }

        function chop(inputNumber) {
            number.value = +inputNumber.value / 2;
        }

        function dice(inputNumber) {
            number.value = Math.sqrt(inputNumber.value);
        }

        function spice(inputNumber) {
            number.value = +inputNumber.value + 1;
        }

        function bake(inputNumber) {
            number.value = +inputNumber.value * 3
        }

        function fillet(inputNumber) {
            number.value = +inputNumber.value - inputNumber.value / 5;
        }

        if (btn.target.innerHTML === 'Chop') {
            chop(number);
            document.getElementById('output').innerHTML = number.value;
        } else if (btn.target.innerHTML === 'Dice') {
            dice(number);
            document.getElementById('output').innerHTML = number.value;
        } else if (btn.target.innerHTML === 'Spice') {
            spice(number);
            document.getElementById('output').innerHTML = number.value;
        } else if (btn.target.innerHTML === 'Bake') {
            bake(number);
            document.getElementById('output').innerHTML = number.value;
        }else if (btn.target.innerHTML === 'Fillet') {
            fillet(number);
            document.getElementById('output').innerHTML = number.value;
        }
    }
}
