function validate() {
    let egn = '';

    document.getElementsByTagName('button')[0].addEventListener('click', pressedBtn);

    function pressedBtn() {
        let year = document.getElementById('year').value;
        let monthOfInput = document.getElementById('month');
        let dateOfInput = document.getElementById('date').value;
        let regionOfInput = document.getElementById('region').value;
        let maleOfInput = document.getElementById('male');
        let femaleOfInput = document.getElementById('female');
        // console.log(year);
        // console.log(monthInput);

        function yearOfBirth(year) {

            if (+year >= 1900 && +year <= 2100) {
                egn += year.substring(2, 4);
            }
        }

        function month(month) {
            for (let i = 1; i < month.children.length; i++) {
                // console.log(monthOfInput.children[i].value);
                if (month.children[i].value === month.value && i < 10) {
                    // console.log('haha');
                    egn += '0' + i;
                } else if (month.children[i].value === month.value && i > 9) {
                    egn += i;
                }
            }
        }

        function date(date) {
            if (+date > 0 && +date <= 31) {
                if (+date < 10) {
                    egn += '0' + date;
                } else {
                    egn += date;
                }
            }

        }

        function region(region) {
            if (+region >= 43 && +region <= 999) {
                if (+region < 100) {
                    egn += region;
                } else {
                    egn += region.substring(0, 2)
                }
            }
        }

        function gender(male, female) {
            if (male.checked) {
                egn += 2;
            } else if (female.checked) {
                egn += 1;
            }
        }

        function validatesTheEgn() {
            let sum = 0;
            let weightPosition = [2, 4, 8, 5, 10, 9, 7, 3, 6];
            for (let i = 0; i < egn.length; i++) {
                sum += egn[i] * weightPosition[i];
            }
            // console.log(sum);

            if (sum % 11 === 10) {
                egn += 0;
            } else {
                egn += sum % 11;
            }
        }

        yearOfBirth(year);
        month(monthOfInput);
        date(dateOfInput);
        region(regionOfInput);
        gender(maleOfInput, femaleOfInput);
        validatesTheEgn();

        document.getElementById('egn').innerHTML = 'Your EGN is: ' + egn;

        document.getElementById('year').value = '';
        document.getElementById('month').value = 'Select a month';
        document.getElementById('date').value = '';
        document.getElementById('region').value = '';
        document.getElementById('male').checked = false;
        document.getElementById('female').value = '';
        egn = '';

        // console.log(egn);
    }
}