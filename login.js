
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simples validação (substitua pelos seus valores reais)
    const validUsername = "usuario";
    const validPassword = "senha123";

    if (username === validUsername && password === validPassword) {
        // Redireciona para a página da home se as credenciais forem corretas
        window.location.href = "home.html";
    } else {
        document.getElementById('error-message').innerText = "Usuário ou senha incorretos.";
    }
}
