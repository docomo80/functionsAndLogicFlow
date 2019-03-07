function validate() {

    document.getElementsByTagName('button')[0].addEventListener('click', pressedBtn);

    function pressedBtn() {
        let input = document.getElementsByTagName('input')[0].value;
        // console.log(input);
        let sum = 0;

        function isItThenDigitsNumber(input) {
            return input.length === 10;
        }

        function isItValidNumber(input) {

            let weightsOfAllNumbers = [2, 4, 8, 5, 10, 9, 7, 3, 6];
            // console.log(weightsOfAllNumbers);
            if (isItThenDigitsNumber(input)) {
                for (let i = 0; i < input.length - 1; i++) {
                    sum += input[i] * weightsOfAllNumbers[i];
                    // console.log(`${input[i]} * ${weightsOfAllNumbers[i]} = ${input[i] * weightsOfAllNumbers[i]}`)
                    // console.log(input[i]);
                }
                // console.log(sum);
                // console.log(sum % 11);
            }

            if (sum % 11 === 10) {
                sum = 0;
            } else {
                sum = sum % 11;
            }
            // console.log(sum);
            return sum;
        }
        let response = document.getElementById('response');

        function isTheLastNumberEqualToReminder(sum) {
            console.log(sum);
            console.log(input[input.length - 1]);
            if (sum == input[input.length - 1]) {
                response.innerHTML = 'This number is Valid!';
            } else {
                response.innerHTML = 'This number is NOT Valid!';
            }
        }

        isItValidNumber(input);
        isTheLastNumberEqualToReminder(sum);
    }

}