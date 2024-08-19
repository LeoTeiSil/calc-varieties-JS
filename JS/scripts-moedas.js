const taxasDeCambio = {
    BRL: {
        USD: 0.20,
        EUR: 0.18,
        MXN: 3.60
    },
    USD: {
        BRL: 5.0,
        EUR: 0.90,
        MXN: 18.0
    },
    EUR: {
        BRL: 5.50,
        USD: 1.10,
        MXN: 20.0
    },
    MXN: {
        BRL: 0.28,
        USD: 0.055,
        EUR: 0.050
    }
};

function converter() {
    const valor = document.getElementById('valor').value;
    const moedaOrigem = document.getElementById('moeda-origem').value;
    const moedaDestino = document.getElementById('moeda-destino').value;

    if (valor === '' || isNaN(valor)) {
        alert('Por favor, insira um valor válido');
        return;
    }

    let taxaDeCambio = 1;
    if (moedaOrigem !== moedaDestino) {
        taxaDeCambio = taxasDeCambio[moedaOrigem][moedaDestino];
    }

    const valorConvertido = (valor * taxaDeCambio).toFixed(2);
    document.getElementById('resultado').value = `${valorConvertido} ${moedaDestino}`;
}
