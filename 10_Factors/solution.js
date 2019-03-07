function solve() {
    let num = document.getElementById('num').value;

    // console.log(num);
    let numbers = [];
    
    function factors(num) {
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                numbers.push(i);
            }
        }
    }

    factors(num);

    // console.log(numbers);
    document.getElementById('result').innerHTML = numbers.join(' ');
}