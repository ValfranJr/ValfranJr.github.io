// Função para logar o usuário
function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simples validação (substitua pelos seus valores reais)
            const validUsername = "usuario";
            const validPassword = "senha123";

            if (username === validUsername && password === validPassword) {
                // Armazenar a informação de que o usuário está logado
                localStorage.setItem('isLoggedIn', 'true');
                // Mostrar a calculadora e esconder o formulário de login
                document.getElementById('loginForm').style.display = 'none';
                document.getElementById('calculatorContent').style.display = 'block';
            } else {
                document.getElementById('error-message').innerText = "Usuário ou senha incorretos.";
            }
        }
// Função para verificar se o usuário está logado
        function checkLogin() {
            const isLoggedIn = localStorage.getItem('isLoggedIn');
            if (isLoggedIn) {
                // Mostrar a calculadora se o usuário estiver logado
                document.getElementById('loginForm').style.display = 'none';
                document.getElementById('calculatorContent').style.display = 'block';
            } else {
                // Mostrar o formulário de login se o usuário não estiver logado
                document.getElementById('loginForm').style.display = 'block';
                document.getElementById('calculatorContent').style.display = 'none';
            }
        }
//Função para calcular o preço de venda
        function calcularPrecoVenda() {
            const cmv = parseFloat(document.getElementById('cmv').value);
            const emb = parseFloat(document.getElementById('emb').value);
            const custoFixo = parseFloat(document.getElementById('custoFixo').value) / 100;
            const lucro = parseFloat(document.getElementById('lucro').value) / 100;

            const precoVenda = (cmv + emb) / (1 - (custoFixo + lucro));
            document.getElementById('resultado').innerText = `Preço de Venda: R$ ${precoVenda.toFixed(2)}`;
        }