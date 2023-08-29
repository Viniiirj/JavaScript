let opcao = "5"

do {
    opcao = prompt(`Escolha uma opção:
    1 - Saber meu nome
    2 - Saber minha idade
    3 - Saber meus objetivos
    4 - Saber o nome do meu cachorro
    5 - Sair`)
    switch(opcao) {
        case "1":
            alert('Vinicius')
            break;
        case "2":
            alert('34 anos')
            break;
        case "3":
            alert('Conseguir minha primeira vaga como dev')
            break;
        case "4":
            alert('Taiga Cabrita')
            break;
        case "5":
            alert('Você escolheu sair')
            alert("encerrando")
            break;
        default:
            alert('Opção invalida')
            break;
    }
} while ( opcao !== "5")
