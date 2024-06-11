// let n1, n2, soma, subt, divi, multi

// n1 = Number (prompt ("Digite o 1° numero: "))
// n2 = Number (prompt ("Digite o 2° numero: "))

// soma = n1 + n2
// subt = n1 - n2
// divi = n1 / n2
// multi = n1 * n2

// alert (`A soma de ${n1} + ${n2} = ${soma}
// A subtação de ${n1} - ${n2} = ${subt}
// A divisão de ${n1} / ${n2} = ${divi}
// A multiplicação de ${n1} X ${n2} = ${multi}`)

let n1, n2, resultado, operacao, escolha

alert ("Vamos calcular?")

n1 = Number (prompt ("Digite o 1° numero: "))
n2 = Number (prompt ("Digite o 2° numero: "))
operacao = (prompt ("Escolha a operação desejada [+, -, *, /]"))

if (operacao === '+') {
    resultado = n1 + n2; 
    escolha = 'soma';
}

if (operacao === '-') {
    resultado = n1 - n2;
    escolha = 'subtração';
}

if (operacao === '*') {
    resultado = n1 * n2;
    escolha = 'multicação';
}

if (operacao === '/') {
    resultado = n1 / n2;
    escolha = 'divisão';
}

alert (`A ${escolha} de ${n1} ${operacao} ${n2} = ${resultado}`)
