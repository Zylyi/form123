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
    const symbolsList = ['_', '+', '-', '=']; 
    let letterBig = '';
    let symbol = '';
    
    
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
            for (let i = 0; i < symbolsList.length; i++) {
                if (symbolsList[i] == letter) {
                    symbol++;
                }
            }
        });

        

        if (letterBig < 3 ) {
            h2.textContent = 'password bad';
        } 
        if (symbol < 2) {
            h2.textContent = 'easy password';
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
