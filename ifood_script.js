document.addEventListener('DOMContentLoaded', () => {
    const ifoodCalculatorForm = document.getElementById('ifood-calculator-form');

    ifoodCalculatorForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const valorProduto = parseFloat(document.getElementById('valor-produto').value);
        const tipoEntrega = parseFloat(document.getElementById('tipo-entrega').value);

        const valorFinal = valorProduto / tipoEntrega;
        document.getElementById('resultado-ifood').textContent = `O valor do produto no iFood é R$${valorFinal.toFixed(2)}`;
    });
});
