const registerButton = document.querySelector('.register__reg'),
    loginButton = document.querySelector('.register__login'),
    h1 = document.querySelector('.register__inner h1'),
    nameForm = document.querySelector('.register__name'),
    passwordForm = document.querySelector('.register__password');

    const user = {
        name: [],
        password: [],
    }
    
    function registerForm () {
        let name = nameForm.value,
            password = passwordForm.value;
    
        user.name.push(name);
        user.password.push(password);
    
        h1.textContent = "Авторизация";
    
        registerButton.type = "reset";
    }
    
    function loginForm () {
        let name = nameForm.value,
            password = passwordForm.value;
    
        for (let i = 0; i < user.name.length; i++) {
            for (let j = 0; j < user.password.length; j++) {
                if (name == user.name[i]) {
                    if (password == user.password[i]) {
                        h1.textContent = `Welcome ${user.name[i]}`;
                        user.name[i].pop;
                        user.password[j].pop;
                    } else {
                        h1.textContent = "invalid user";
                    }
                }
            }
        }
        registerButton.type = "button";
    }
registerButton.addEventListener("click", registerForm);
loginButton.addEventListener("click", loginForm);
