function leapYear() {

    document.getElementsByTagName('button')[0].addEventListener('click', clickedBtn);

    function clickedBtn(){
        let inputYear = document.getElementsByTagName('input')[0].value;
        let year = document.getElementById('year');
        let h2 = year.children[0];

        function isLeapYear(year){
            return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
        }

        if (isLeapYear(inputYear)){
            h2.innerHTML = 'Leap Year';
        } else {
            h2.innerHTML = 'Not Leap Year';
        }
        let innerDiv = year.children[1];
        innerDiv.innerHTML = inputYear;
        document.getElementsByTagName('input')[0].value = '';
    }
}