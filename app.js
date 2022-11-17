

const form = document.querySelector(`form`);

let formInputs = document.querySelectorAll(`input`);

let inputFName = document.querySelector(`#fname`);
let inputTel = document.querySelector(`#tel`);
let inputEmail = document.querySelector(`#email`);
let inputPword = document.querySelector(`#pword`);

// let button1 = document.querySelector(".free-trial");
// button.onclick = function () {
//     console.log(`работает фиолетовая кнопка!!!`);
// }
let button2 = document.querySelector(".button");
button2.onclick = function () {
    console.log(` кнопка работает!!!`)
}

// function validateEmail(email) {

// }

let stop_fname = document.getElementById('fname-p');
let stop_tel = document.getElementById('tel-p');
let stop_email = document.getElementById('email-p');
let stop_pword = document.getElementById('pword-p');

form.addEventListener('submit', function (event) {

    formInputs.forEach(function (input) {
        if (input.value === ``) {
            input.classList.add(`error`);
            event.preventDefault();
        } else {

            input.classList.remove(`error`);
        }
    });



    let regexp = new RegExp(/^([A-Za-zА-Яа-я]){2,16}$/);

    if (!regexp.test(inputFName.value)) {
        inputFName.classList.add(`error`);
        event.preventDefault();
        stop_fname.innerHTML = 'Имя должно состоять минимум из двух букв';

        // console.log(`Только буквы`);
    } else {
        stop_fname.innerHTML = '';
        // inputFName.classList.add(`error.stop`);
    }

    let regexp2 = new RegExp(/^((\+7|7|8)+([0-9]){10,11})$/);
    if (!regexp2.test(inputTel.value)) {
        inputTel.classList.add(`error`);
        event.preventDefault();
        // console.log(`Только буквы`);
        stop_tel.innerHTML = 'Не корректный номер';
    } else {
        stop_tel.innerHTML = ' ';
        // inputLName.classList.add(`error.stop`);
    }

    let regexp3 = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);
    if (!regexp3.test(inputEmail.value)) {
        inputEmail.classList.add(`error`);
        event.preventDefault();
        // console.log(`Только буквы в почте`);
        stop_email.innerHTML = 'Не корректная почта';
    }  else {
        stop_email.innerHTML = '';

        // inputEmail.classList.add(`error.stop`);
    }

    let regexp4 = new RegExp(/(?=^.{3,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[a-zA-z]).*$/i);
    if (!regexp4.test(inputPword.value)) {
        inputPword.classList.add(`error`);
        event.preventDefault();
        stop_pword.innerHTML= "Не корректный пароль";
    } else {
        stop_pword.innerHTML= " ";

        // inputPword.classList.add(`error.stop`);
    }
})

