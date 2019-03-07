function greatestCD() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    // console.log(num1);
    // console.log(num2);
    let createsDivisor = 0;

    for (let i = 1; i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            createsDivisor = i;
        }
    }
    document.getElementById('result').innerHTML = createsDivisor;
    console.log(createsDivisor);
}