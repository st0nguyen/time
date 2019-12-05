let today = new Date();

function loadInputDate() {
    let test = document.getElementById('select');
    if (test.value == 'date') {
        document.getElementById("1").style.display = 'block';
        document.getElementById("2").style.display = 'none';
        document.getElementById("3").style.display = 'none';
        document.getElementById("4").style.display = 'none';

    }
    else if (test.value == 'been') {
        document.getElementById("1").style.display = 'none';
        document.getElementById("2").style.display = 'block';
        document.getElementById("3").style.display = 'none';
        document.getElementById("4").style.display = 'none';

    }
    else if (test.value == 'tet') {
        document.getElementById("1").style.display = 'none';
        document.getElementById("2").style.display = 'none';
        document.getElementById("3").style.display = 'block';
        document.getElementById("4").style.display = 'none';

    }
    else if (test.value == 'holiday') {
        document.getElementById("1").style.display = 'none';
        document.getElementById("2").style.display = 'none';
        document.getElementById("3").style.display = 'none';
        document.getElementById("4").style.display = 'block';
    }
}

function checkLeapYear(year_to_check) {
    let isLeapYear = false;
    let isDivisibleBy4 = year_to_check % 4 === 0;
    if (isDivisibleBy4) {
        let isDivisibleBy100 = year_to_check % 100 === 0;
        if (isDivisibleBy100) {
            let isDivisibleBy400 = year_to_check % 400 === 0;
            if (isDivisibleBy400) {
                isLeapYear = true;
            }
        } else {
            isLeapYear = true;
        }
    }
    return isLeapYear;
}

function count_day(dateAdded) {
    let days_count;
    if (dateAdded.getFullYear() < today.getFullYear()) {
        switch (dateAdded.getMonth()) {
            case 0:
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
                days_count = 31 - dateAdded.getDate();
                break;
            case 3:
            case 5:
            case 8:
            case 10:
                days_count = 30 - dateAdded.getDate();
                break;
            case 1:
                if (checkLeapYear(dateAdded.getFullYear())) {
                    days_count = 29 - dateAdded.getDate();
                }
                else {
                    days_count = 28 - dateAdded.getDate();
                }
                break;
        }
        for (let i = (dateAdded.getMonth()) + 1; i <= 11; i++) {
            switch (i) {
                case 0:
                case 2:
                case 4:
                case 6:
                case 7:
                case 9:
                case 11:
                    days_count += 31;
                    break;
                case 3:
                case 5:
                case 8:
                case 10:
                    days_count += 30;
                    break;
                case 1:
                    if (checkLeapYear(dateAdded.getFullYear())) {
                        days_count += 29;
                    }
                    else {
                        days_count += 28;
                    }
                    break;
            }
        }

        for (let j = ((dateAdded.getFullYear()) + 1); j < today.getFullYear(); j++) {

            if (checkLeapYear(j)) {
                days_count += 366;
            }
            else {
                days_count += 365;
            }
        }
        console.log(days_count + 'a');
        for (let k = 0; k < today.getMonth(); k++) {
            switch (k) {
                case 0:
                case 2:
                case 4:
                case 6:
                case 7:
                case 9:
                case 11:
                    days_count += 31;
                    break;
                case 3:
                case 5:
                case 8:
                case 10:
                    days_count += 30;
                    break;
                case 1:
                    if (checkLeapYear(today.getFullYear())) {
                        days_count += 29;
                    }
                    else {
                        days_count += 28;
                    }
                    break;
            }
        }
        days_count += today.getDate();
    }
    else {
        days_count = today.getDate() - dateAdded.getDate();
    }


    return days_count;
}

function count_months(dateAdded) {
    let months_count = 11 - dateAdded.getMonth();
    if (dateAdded.getFullYear() < today.getFullYear()) {
        for (let year_count = dateAdded.getFullYear(); year_count < today.getFullYear(); year_count++) {
            months_count += 12;
        }
        months_count += (today.getMonth() + 1);
    }
    return months_count;
}

function count_hours(dateAdded) {
    let hours_count;
    hours_count = count_day(dateAdded) * 24 - dateAdded.getHours() + today.getHours();
    return hours_count;
}

function count_minutes(dateAdded) {
    let minutes_count;
    minutes_count = count_hours(dateAdded) * 60 - dateAdded.getMinutes() + today.getMinutes();
    return minutes_count;
}

function count_seconds(dateAdded) {
    let seconds_count;
    seconds_count = count_minutes(dateAdded) * 60 - dateAdded.getSeconds() + today.getSeconds();
    return seconds_count;
}
function loadCoutLive() {
    let a = document.getElementById('datelive').value;

    let my_birthday = new Date(a);
    let year = (today.getFullYear() - my_birthday.getFullYear()),
        month = count_months(my_birthday),
        day = count_day(my_birthday),
        hours = count_hours(my_birthday),
        minute = count_minutes(my_birthday),
        second = count_seconds(my_birthday);

    let text = document.getElementById('load1');
    if (my_birthday < today) {
        text.innerHTML = 'Bạn đã sống ' + year + " năm<br>" +
            "Bạn đã sống " + month + " tháng<br>" +
            "Bạn đã sống " + day + " ngày<br>" +
            "Bạn đã sống " + hours + " giờ<br>" +
            "Bạn đã sống " + minute + " phút<br>" +
            "Bạn đã sống " + second + " giây<br>";
    }
    else {
        text.innerHTML = "Hình như bạn chưa sinh ra thì phải ㋡ !!"
    }
    console.log(my_birthday);

}

function loadCoutLove() {
    let a = document.getElementById('dateLove').value;

    let my_love = new Date(a);
    let text = document.getElementById('load2');
    if (my_love < today) {
        text.innerHTML = "Tình yêu của bạn đã được " + (today.getFullYear() - my_love.getFullYear()) + " năm<br>" +
            "Tình yêu của bạn đã được " + count_months(my_love) + " tháng<br>" +
            "Tình yêu của bạn đã được " + count_day(my_love) + " ngày<br>" +
            "Tình yêu của bạn đã được " + count_hours(my_love) + " giờ<br>" +
            "Tình yêu của bạn đã được " + count_minutes(my_love) + " phút<br>" +
            "Tình yêu của bạn đã được " + count_seconds(my_love) + " giây<br>"
    }
    else {
        text.innerHTML = "Bạn đã FA quá lâu ư ☹ ? Đừng lo hãy để mình tiên đoán khi nào có gấu nhé, kích vào phía dưới để biến hình ⇓ "

        document.getElementById('bonus').style.display = 'block';
       
    }
}
function loveTime() {
    let text2 = document.getElementById('loadFa').innerHTML =
        'Chúc mừng ' + (Math.floor(Math.random() * 2)+1) + ' năm ' + (Math.floor(Math.random() * 12) + 1) + ' tháng ' +
        (Math.floor(Math.random() * 30) + 1) + ' ngày nữa là bạn có người yêu rồi đấy ♡ ♥ !!!';
}
function countDay2(dateAdded2) {

    let days_count2 = dateAdded2.getDate();

    for (let i = (dateAdded2.getMonth()) - 1; i > 0; i--) {
        switch (i) {
            case 0:
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
                days_count2 += 31;
                break;
            case 3:
            case 5:
            case 8:
            case 10:
                days_count2 += 30;
                break;
            case 1:
                if (checkLeapYear(dateAdded2.getFullYear())) {
                    days_count2 += 29;
                }
                else {
                    days_count2 += 28;
                }
                break;
        }


    }
    console.log(days_count2);
    return days_count2;
}
function countDay1(dateAdded) {
    let days_count1 = 0;

    switch (dateAdded.getMonth()) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
            days_count1 = 31 - dateAdded.getDate();
            break;
        case 3:
        case 5:
        case 8:
        case 10:
            days_count1 = 30 - dateAdded.getDate();
            break;
        case 1:
            if (checkLeapYear(dateAdded.getFullYear())) {
                days_count1 = 29 - dateAdded.getDate();
            }
            else {
                days_count1 = 28 - dateAdded.getDate();
            }
            break;
    }
    for (let i = dateAdded.getMonth() + 1; i <= 11; i++) {
        switch (i) {
            case 0:
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
                days_count1 += 31;
                break;
            case 3:
            case 5:
            case 8:
            case 10:
                days_count1 += 30;
                break;
            case 1:
                if (checkLeapYear(dateAdded.getFullYear())) {
                    days_count1 += 29;
                }
                else {
                    days_count1 += 28;
                }
                break;
        }
    }
    return days_count1;

}
function countDay1_To_Day2(dateAdded2, dateAdded) {
    let days_count = countDay1(dateAdded) + countDay2(dateAdded2);
    let t = dateAdded2.getFullYear() - dateAdded.getFullYear();
    if (t > 2) {
        for (let j = dateAdded.getFullYear() + 1; j < dateAdded2.getFullYear(); j++) {
            if (checkLeapYear(dateAdded.getFullYear() + 1)) {
                days_count += 366;
            }
            else {
                days_count += 365;
            }
        }
    }
    return days_count;
}

function tet1() {
    let tet = new Date(2020, 01, 01);
    console.log(tet);

    let text = document.getElementById('load3');
    let x = 'Còn ' + (countDay1_To_Day2(tet, today) - 1) + ' ngày ' + (23 - today.getHours()) + ' giờ '
        + (59 - today.getMinutes()) + ' phút ' + (59 - today.getSeconds()) + ' giây ' + ' là đến tết!!!';
    text.innerHTML = x;
}


function tet2() {
    let tetAl = new Date(2020, 01, 25, 0, 0, 0, 0);
    let text1 = document.getElementById('load4');

    let x = 'Còn ' + (countDay1_To_Day2(tetAl, today) - 1) + ' ngày ' +
        (23 - today.getHours()) + ' giờ ' +
        (59 - today.getMinutes()) + ' phút ' + (59 - today.getSeconds()) + ' giây ' + ' là đến tết!!!';
    text1.innerHTML = x;


}

function loadCoutHoliday() {
    let a = document.getElementById('select2').value;
    let holiday = new Date(a);
    let text = document.getElementById('load5');
    text.innerHTML = "Còn " + countDay1_To_Day2(holiday, today) + " ngày là đến rồi.<br>" + '(' + a + ')';

}




