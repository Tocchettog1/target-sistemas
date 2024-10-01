import { readFile } from 'fs/promises';
const dados = JSON.parse(await readFile('./src/dados.json', 'utf8'));
const dados2 = JSON.parse(await readFile('./src/dados2.json', 'utf8'));

/**
 * 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
 * Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } Imprimir(SOMA);
 * Ao final do processamento, qual será o valor da variável SOMA? 91
 * */
function imprimeSoma() {
    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
        k += 1;
        soma += k;
    }

    return soma;
};
console.log(imprimeSoma());

/*-------------------------------------------------------------------------------------- */

/**
 * 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
 * (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a 
 * sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
 */
function fibonacci(valor) {
    let a = 0;
    let b = 1;

    if (valor == a || valor == b)
        return `${valor} pertence a sequência de Fibonacci.`;

    let proximo = a + b;

    while (proximo <= valor) {
        a = b;
        b = proximo;
        proximo = a + b;

        if (proximo == valor)
            return `${valor} pertence a sequência de Fibonacci.`;
    }

    return `${valor} não pertence a sequência de Fibonacci.`;
}
console.log(fibonacci(21));

/*-------------------------------------------------------------------------------------- */

/**
 * 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
 * faça um programa, na linguagem que desejar, que calcule e retorne:
 * • O menor valor de faturamento ocorrido em um dia do mês;
 * • O maior valor de faturamento ocorrido em um dia do mês;
 * • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
 */
function faturamento(dados) {
    const diasComFaturamento = dados.filter((faturamento) => faturamento.valor > 0);
    let menorValor = 0;
    let maiorValor = 0;
    let totalFaturado = 0;
    let totalDeDias = 0;
    let diasAcimaDaMedia = 0;

    for (const dia of diasComFaturamento) {
        const valor = dia.valor;

        if (menorValor == 0 || valor < menorValor)
            menorValor = valor;

        if (maiorValor == 0 || valor > maiorValor)
            maiorValor = valor;

        totalFaturado += valor;

        totalDeDias ++
    }

    const mediaFaturamento = totalFaturado / totalDeDias;

    for (const dia of diasComFaturamento) {
        if (dia.valor > mediaFaturamento)
            diasAcimaDaMedia ++
    }
    return {
        "Menor valor faturado": menorValor,
        "Maior valor faturado": maiorValor,
        "Total de dias acima da média": diasAcimaDaMedia
    }
}
console.log(faturamento(dados));

/*-------------------------------------------------------------------------------------- */

/**
 * 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
 * • SP – R$67.836,43
 * • RJ – R$36.678,66
 * • MG – R$29.229,88
 * • ES – R$27.165,48
 * • Outros – R$19.849,53
 * Escreva um programa na linguagem que desejar onde calcule o percentual de representação que
 * cada estado teve dentro do valor total mensal da distribuidora.  
 */

function percentualPorEstado(dados) {
    let totalMensal = 0;
    let perceituais = [];

    dados.forEach(dado => totalMensal += dado.valor);

    for (const dado of dados){
        perceituais.push({
            Estado : dado.estado,
            Percentual : `${((dado.valor / totalMensal) * 100).toFixed(2)}%`
        })
    }

    return perceituais;
}
console.log(percentualPorEstado(dados2));

/*-------------------------------------------------------------------------------------- */

/**
 * 5) Escreva um programa que inverta os caracteres de um string.
 */
function inverteString(string) {
    let stringInvertida = '';

    for (let index = (string.length - 1); index >= 0; index--) {
        stringInvertida += string[index];
    }

    return stringInvertida;
}
console.log(inverteString("Teste de inverção"));