function calcularCupomEntrega() {
    const ticketMedio = parseFloat(document.getElementById('ticketMedio').value);
    const valorEntregaCupom = parseFloat(document.getElementById('valorEntregaCupom').value);
    const valorProduto = parseFloat(document.getElementById('valorProduto').value);

    if (isNaN(ticketMedio) || isNaN(valorEntregaCupom) || isNaN(valorProduto)) {
        document.getElementById('resultadoCupomEntrega').textContent = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    const coeficienteMultiplicacao = valorEntregaCupom / ticketMedio;
    const resultadoFinal = valorProduto + (valorProduto * coeficienteMultiplicacao);

    document.getElementById('resultadoCupomEntrega').textContent = `Valor final com cupom ou taxa de entrega: R$ ${resultadoFinal.toFixed(2)}`;
}
function calcularPrecoVenda() {
    const cmv = parseFloat(document.getElementById('cmv').value);
    const emb = parseFloat(document.getElementById('emb').value);
    const custoFixo = parseFloat(document.getElementById('custoFixo').value) / 100;
    const lucro = parseFloat(document.getElementById('lucro').value) / 100;

    if (isNaN(cmv) || isNaN(emb) || isNaN(custoFixo) || isNaN(lucro)) {
        alert("Por favor, insira todos os valores corretamente.");
        return;
    }

    const precoVenda = (cmv + emb) / (1 - (custoFixo + lucro));

    document.getElementById('resultado').innerText = `Preço de Venda: R$ ${precoVenda.toFixed(2)}`;
}
