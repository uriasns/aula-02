function lerImputUser(msg) {
    return new Promise((resolve) => {
        //pergunta ao usuario
        console.log(msg)

        //recebendo a informação do usuario
        process.stdin.on('readable', () => {

            // ler a informação de  usuario 
            let resposta = process.stdin.read();

            // transformando a informação inserida pelo usuario em txt
            resposta = resposta.toString().replace(/\n/, "");
            resposta = resposta.replace(/\r/, "");
            resolve(resposta)
            
        })
    })

}
lerImputUser("E ai mano tudo bem ?").then(response => {
    console.log("chegou até aqui " + response)


    return lerImputUser("fghjhuyg")
}).then(response => {
    console.log("chegou até aqui " + response)
})
