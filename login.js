
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simples validação (substitua pelos seus valores reais)
    const validUsername = "usuario";
    const validPassword = "senha123";

    if (username === validUsername && password === validPassword) {
        // Armazenar a informação de que o usuário está logado
        localStorage.setItem('isLoggedIn', 'true');
        // Redireciona para a página da calculadora se as credenciais forem corretas
        window.location.href = "home.html";
    } else {
        document.getElementById('error-message').innerText = "Usuário ou senha incorretos.";
    }
}

function checkLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        // Redireciona para a página de login se o usuário não estiver logado
        window.location.href = "index.html";
    }
}
