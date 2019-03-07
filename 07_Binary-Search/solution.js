function binarySearch() {
    let arr = document.getElementById('arr').value;
    let num = document.getElementById('num').value;

    let foundedNum = '';
    // if (arr && num){
    let splitedArr = arr.split(', ');
    // console.log(splitedArr);
    for (let i = 0; i < splitedArr.length; i++) {
        if (splitedArr[i] === num) {
            foundedNum = {number:splitedArr[i], index: i};
            // foundedNum.index = i;
            console.log(foundedNum.number);
            console.log(foundedNum.index);
        }
    }
    if (foundedNum) {
        document.getElementById('result').innerHTML = `Found ${foundedNum.number} at index ${foundedNum.index}`;
    } else {
        document.getElementById('result').innerHTML = `${num} is not in the array`;
    }

    // }

}