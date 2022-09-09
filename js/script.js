const form = document.querySelector('.register__form');
const registerButton = document.querySelector('.register__reg');
const loginButton = document.querySelector('.register__login');
const h1 = document.querySelector('.register__inner h1');
const h2 = document.querySelector('.info');
const nameForm = document.querySelector('.register__name');
const passwordForm = document.querySelector('.register__password');

const user = {
    name: '',
    password: '',
}
const symbolsList = ['_', '+', '-', '='];
const arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я'];
const arr_RU = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ', 'Э', 'Ю', 'Я'];  

let letterBig = '';
let symbol = '';
let rus = '';
    
function registerForm () {
    let name = nameForm.value,
        password = passwordForm.value;

    user.name = name;
    user.password = password;

    if (name == user.name) {
        h2.textContent = `login ${name} используется`;
        user.name = '';
    } 
    if (password.length < 2) {
        passwordForm.classList.toggle('wrong-password');
        h2.textContent = 'password short';
        user.password = '';

    } else {
        h2.textContent = '';
        passwordForm.classList.remove('wrong-password');
    }
    
    const passwordCase = password.split('').map((letter) => {
        if (letter.toUpperCase() == letter) {
            letterBig++;
        }
        for (let i = 0; i < symbolsList.length; i++) {
            if (symbolsList[i] == letter) {
                symbol++;
            }
        }
        for (let i = 0; i < arr_ru.length; i++) {
            if (arr_RU[i] == letter) {
                rus++;
            }
            if (arr_ru[i] == letter) {
                rus++;
            }
        }
    });
    

    if (rus >= 1 || letterBig < 3 || symbol < 2) {
        h2.textContent = 'password bad';
        user.password = '';
        passwordForm.classList.toggle('wrong-password');
    } 

    h1.textContent = "autorisation";
    form.reset()
}
    
function loginForm () {
    let name = nameForm.value,
        password = passwordForm.value;

    if (name == user.name && password == user.password) {
        h1.textContent = `Welcome ${user.name}`;
    } else {
        h2.textContent = `unknown user`;
    }
}

registerButton.addEventListener("click", registerForm);
loginButton.addEventListener("click", loginForm);
