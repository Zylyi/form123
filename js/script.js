const form = document.querySelector('.register__form'),
    registerButton = document.querySelector('.register__reg'),
    loginButton = document.querySelector('.register__login'),
    h1 = document.querySelector('.register__inner h1'),
    h2 = document.querySelector('.info'),
    nameForm = document.querySelector('.register__name'),
    passwordForm = document.querySelector('.register__password');

    const user = {
        name: '',
        password: '',
    }
    let symbolsList = ['_', '+', '-', '=']; 
    let letterBig = '';
    
    
    function registerForm () {
        let name = nameForm.value,
            password = passwordForm.value;

        user.name = name;
        user.password = password;

        if (name == user.name) {
            h2.textContent = `login ${name} используется`;
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
        });

        const passwordSymbol = password.split('').map((symbol) => {
            if (symbol == symbolsList[symbol]) {
                h2.textContent = 'nice password';
            }
        });

        if (letterBig < 3 ) {
            h2.textContent = 'password bad';
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

