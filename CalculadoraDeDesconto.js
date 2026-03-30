class CalculadoraDeDesconto {
  calcular(valor, isVip = false) {
    // Regra: Valor nunca pode ser negativo [cite: 28]
    if (valor < 0) {
      throw new Error("Valor não pode ser negativo");
    }

    let desconto = 0;

    // Regra: Valor entre 100 e 500 -> 10% [cite: 23]
    if (valor >= 100 && valor <= 500) {
      desconto = 0.10;
    } 
    // Regra: Valor > 500 -> 20% [cite: 25]
    else if (valor > 500) {
      desconto = 0.20;
    }

    // Regra: Se cliente for VIP -> +5% adicional [cite: 27]
    if (isVip) {
      desconto += 0.05;
    }

    const valorFinal = valor - (valor * desconto);
    return valorFinal;
  }
}

module.exports = CalculadoraDeDesconto;