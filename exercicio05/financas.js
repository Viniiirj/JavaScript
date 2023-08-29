let saldo = parseFloat(prompt('Informe a quantidade de dinheiro inicial: '))
let opcao = ""

do {
    opcao = prompt(`
    Saldo disponivel ${saldo}
    1. Adicionar dinheiro
    2. Remover dinheiro
    3. Sair`)

    switch(opcao) {
        case "1":
            saldo += parseFloat(prompt(`Informe o valor a ser adicionado:`))
            break;
        case "2":
            saldo -= parseFloat(prompt('Informe o valor que deseja sacar:'))
            break;
        case "3":
            alert('Encerrando')
            break;
        default:
            alert('opção invalida')
            break;
    }
} while (opcao !== '3')