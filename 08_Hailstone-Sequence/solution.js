function getNext() {
    let input = document.getElementById('num').value;

    let result = input;
    let arr = [];
    arr.push(+input);

    function hailstoneSequence(num) {
        while (true) {
            if (result === 1) {
                break;
            }
            if (+result % 2 === 0) {
                result /= 2;
                arr.push(result);
            } else if (+result % 2 !== 0) {
                result = 3 * result + 1;
                arr.push(result);
            }

        }

    }

    hailstoneSequence(result);
    let test = arr.join(' ');
    document.getElementById('result').innerHTML = test + ' ';

}