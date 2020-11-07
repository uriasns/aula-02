//pergunta ao usuario
console.log("digite o valor do produto??")

//recebendo a informação do usuario
process.stdin.on('readable', () => {
    var carteira = 10;

    // ler a informação de  usuario 
    let resposta = process.stdin.read();

    // transformando a informação inserida pelo usuario em txt
    resposta = resposta.toString().replace(/\n/, "");
    resposta = resposta.replace(/\r/, "");

    if (carteira >= resposta) {
        console.log("saldo atual é de: "+carteira+" reias");

        // console.log("quantas unidades vc deseja adquirir?")
        //      //process.stdin.on('readable', () => {
        //         let quantidade = process.stdin.read();
        //         quantidade = quantidade.toString().replace(/\n/, "");
        //         quantidade = quantidade.replace(/\r/, "");
        //         let resut = resposta * quantidade 
        //         if (carteira >= resut){
        //             console.log("saldo disponível para compra \nvalor totalde" + resut)
        //         }else {
        //             console.log("saldo insuficiente")
        //         }
        //     //})   
    } else {
        console.log("você está sem dinheioro \nseu saldo atual é de: "+carteira+" reais") 
    }
});

