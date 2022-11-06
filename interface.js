let player1 = "" // Essa variável vai armazenar o icone escolhido pelo jogador 0
let player2 = "" // Já essa aqui, o  icone escolhido pelo jogador 1
let playerEscolha = "" // A variável vai definir quem esta escolhendo o icone
let playerJogada = "" // E essa aqui, qual é o player da vez
let persons = [  
    "\u{1F43A}","\u{1F98A}", "\u{1F435}",
    "\u{1F436}","\u{1F99D}","\u{1F431}",
    "\u{1F981}","\u{1F42F}","\u{1F434}",
    "\u{1F984}","\u{1F993}","\u{1F42E}",
    "\u{1F437}","\u{1F42D}","\u{1F439}",
    "\u{1F430}","\u{1F43B}","\u{1F428}",
    "\u{1F43C}","\u{1F423}","\u{1F98B}",
    "\u{1F988}","\u{1F41D}","\u{1F41E}",  //padrão unicode
  ];

document.addEventListener("DOMContentLoaded", function(){
     //dom content loaded é um evento que executa o que esta na função apos o html ser carregado por completo

    let squares = document.querySelectorAll(".square")  //variavel squares é cada quadrado do tabuleiro

    // query selector pega todos os seletores que foram solicitados, tem funcionamento parecido com getelementsbyclassname
    //let squares = document.getElementsByClassName("square")

    loadImage()// carrega as imagens dos jogadores da vez raposa e lobo
    player() // a função foi colocada aqui para o jogador da vez ja ficar selecionado antes do jogo começar

    squares.forEach(function(square){ //O método forEach() executa uma dada função em cada elemento de um array.
        square.addEventListener("click", handleclick)

        //1 FUNCIONAMENTO: depois do html(DOM) for carregado, o foreach vai 
        //varrer cada array (quadrado/square do tabuleiro/board)
        //cada quadrado square vai ter o evento click que vai rodar a função handleclick
    })
})

function handleclick(event){
    // console.log(event.target)  //event.target Obtem o elemento que acionou um evento 

    let squares = event.target   //event.target Obtem o elemento que acionou um evento 
    let position = squares.id    // todo quadrado (square) tem um id que vai ser atribuido a position

    // Aqui ele verifica quem estar jogando, se jogador 0 ou 1
    if(playertime == 0){
        playerJogada = 0 // Se for 0, ele coloca 0 na variável playerjogada
    }else{
        playerJogada = 1 // Se for 1, ele coloca 1 na variável playerjogada
    }

    if(handlemove(position)){ //se handlemove for verdadeiro, o jogo acaba e manda alerta de que o jogo acabou

            setTimeout(()=>{
            alert ("O Jogo Acabou, Clique no botão REINICIAR para jogar novamente ")
        },1000) //depois de 200 milissegundos vai disparar o alerta de o jogo acabou
    }

    updatesquares(position) // ao clicar atualiza os squares   
    // Em updatesquares, colocamos como argumento o position, ele nos dar a posição do elemento que clicamos na tela. 

    //2 FUNCIONAMENTO: handleclick passa a posição do quadrado/square que foi clicado para a função handlemove 
    //que esta no outro arquivo js GAME. Logo apos isso roda da função updatesquares

}

function updatesquares (posicaoClicada) { // E aqui, eu posso colocar o argumento como posicaoClicada (que é o position)    

    let squares = document.querySelectorAll(".square")

    // squares.forEach(function(square){ //O método forEach() executa uma dada função em cada elemento de um array.
        squares.forEach((square) => {
            let position = square.id
            let symbols = board[position]

            let jogadorescolhido1 = localStorage.getItem("jogadorEscolhido1")
            let jogadorescolhido2 = localStorage.getItem("jogadorEscolhido2")

            // se symbols ja recebeu a posição clicada do board, ou diferente de nada.
            if(symbols !=''){
                // Essa verificação, é se a posicaoClicada é igual ao square.id
                if(posicaoClicada == position){
                    //se o jogo foi reiniciado, carrega o ultimo jogador escolhido para os squares
                    if(jogadorescolhido1 != '' && jogadorescolhido2 != ''){
                        if(playerJogada == 0){
                            square.innerHTML = `<div data-iconp1="${jogadorescolhido1}" class='${symbols}'><div/>`
                        }else if(playerJogada == 1){
                            square.innerHTML = `<div data-iconp2="${jogadorescolhido2}" class='${symbols}'><div/>`
                        }
                    }else{
                        // Se o player da jogada for o 0 e o jogo ainda nao foi iniciado
                        if(playerJogada == 0){
                            square.innerHTML = `<div data-iconp1="${player1}" class='${symbols}'><div/>`
                        }else if(playerJogada == 1){
                            square.innerHTML = `<div data-iconp2="${player2}" class='${symbols}'><div/>`
                        }
                    }
                    //se o jogo foi reiniciado, carrega o ultimo jogador escolhido atualiza os squares
                    if(jogadorescolhido1 != '' && jogadorescolhido2 != ''){
                        square.innerHTML = `<div data-iconp1="${jogadorescolhido1}" data-iconp2="${jogadorescolhido2}" class='${symbols}'><div/>`
                    }
                    // aqui define os personagens iniciais dos squares sendo eles nao tenham sido escolhidos ainda
                    // lobo e raposa
                    else if (player1 == ''){
                        player1 = persons[0]
                        player2 = persons[1]
    
                        square.innerHTML = `<div data-iconp1="${player1}" data-iconp2="${player2}" class='${symbols}'><div/>`
                    }
                    
                    
                }
                
                // square.innerHTML = `<div class='${symbols}'><div/>`  // se o symbol nao for vazio, coloca raposa ou lobo
            }
        }
    )
    
    //4 FUNCIONAMENTO: Updatesquares vai atualizar a situação atual dos arrays do tabuleiro/board 
    //que foram ou nao atribuido os simbolos.
    //Vai varrer todos os arrays novamente, passando a posição do quadrado/square 
    //que foi clicado para a função handlemove que esta no outro arquivo js GAME.

    //se simbolo nao for vazio, ou seja, ja foi atribuido, vai atualizar e passar para a pagina através do innerhtml 
    //o simbolo que se refere a lobo ou raposa

    }

function Reiniciar(){   //modificaçao rodrigo 

        let squares = document.querySelectorAll(".square")     
        
        squares.forEach((square)=>{
            // let position = square
            // let symbols = board[position] 
            board = ['','','','','','','','','']
            square.innerHTML = `<div class='${symbols}'><div/>` // muda simbolos para passar "vazio"
            square.style.backgroundColor = 'beige'  //muda background dos squares pra bege
        })
        
        playertime = 0 // se 0 vai reinicia com lobo, se 1 reinicia com raposa
        player() // executa player para nao bugar e ficar trocado o jogador da vez
        document.location.reload(true); 
        //atualiza a pagina para o hover dos squares ficarem azuis (background-color)
}

function player(){
    
    if (playertime == 0 ){
        document.querySelector("#p1").style.backgroundColor = 'red'
        document.querySelector("#p1").style.scale = '1.4'
        document.querySelector("#p2").style.backgroundColor = 'beige'
        document.querySelector("#p2").style.scale = '1'
        // document.querySelector("#p1").style.content = "\u{1F43A}"
    }else{
        document.querySelector("#p1").style.backgroundColor = 'beige'
        document.querySelector("#p1").style.scale = '1'
        document.querySelector("#p2").style.backgroundColor = 'red'
        document.querySelector("#p2").style.scale = '1.4'
        // document.querySelector("#p2").style.content = "\u{1F98A}"
    }
    
}

//aqui o icone inicial do jogador da vez
function loadImage(){
    
    let jogadorescolhido1 = localStorage.getItem("jogadorEscolhido1")
    let jogadorescolhido2 = localStorage.getItem("jogadorEscolhido2")

    //se o jogo foi reiniciado, o jogador anterior ja foi escolhido, então carrega jogador anterior
    if(jogadorescolhido1 != '' && jogadorescolhido2 != ''){

        p1.textContent = `${jogadorescolhido1}`
        p2.textContent = `${jogadorescolhido2}`

        document.getElementById("p1").style.fontSize = "50px"
        document.getElementById("p1").style.position = "relative"
        document.getElementById("p1").style.lineHeight = "100px"
        document.getElementById("p2").style.fontSize = "50px"
        document.getElementById("p2").style.position = "relative"
        document.getElementById("p2").style.lineHeight = "100px"
    }

    //se player 1 e 2 nao forem definidos/ escolhido ainda, lobo e raposa
    else if (player1 == '' && player2 == ''){
        let p1 = document.querySelector("#p1")
        let p2 = document.querySelector("#p2")

        player1 = persons[0]
        player2 = persons[1]

        // player1 = "\u{1F43A}" lobo
        // player2 = "\u{1F98A}" raposa

        p1.textContent = `${player1}`
        p2.textContent = `${player2}`

        document.getElementById("p1").style.fontSize = "50px"
        document.getElementById("p1").style.position = "relative"
        document.getElementById("p1").style.lineHeight = "100px"
        document.getElementById("p2").style.fontSize = "50px"
        document.getElementById("p2").style.position = "relative"
        document.getElementById("p2").style.lineHeight = "100px"
        
    }
}

function closemodal(){
    let modal = document.querySelector(".modalplayer")
    modal.innerHTML = ""
    modal.style.display = "none"
}

function openmodal1(){
    let modal = document.querySelector(".modalplayer")
    let p1 = document.querySelector("#p1")
    modal.style.display = "block"
    playerEscolha = 0
    escolhaIcon(playerEscolha)
    p1.textContent = `` //ao abrir a janela modal apaga o lobo e coloca outro jogador da vez 

    // playerselect1()    
}

function openmodal2(){
    let modal = document.querySelector(".modalplayer")
    let p2 = document.querySelector("#p2")
    modal.style.display = "block"
    playerEscolha = 1
    escolhaIcon(playerEscolha)
    p2.textContent = `` //ao abrir a janela modal apaga a raposa e coloca outro jogador da vez


    // playerselect2()
} 

// function playerselect1(){
function escolhaIcon(jogador){
    if( jogador == 0){
        
        for( i = 0 ; i < persons.length; i++){
        // for (i in persons){
            //adicionar quadrados junto do conteudo "codigos dos emojis" de acordo com o tamanho do array
            
            let modal = document.querySelector(".modalplayer")
            let div = document.createElement("div")
            div.className = "squaremodal"
            div.dataset.icon = persons[i]   //dataset é atributo personalizado, no caso a string do persons[i]
            // div.dataset.iconp1 = persons[i]
            div.setAttribute("id", [i])
            modal.appendChild(div)
            console.log(div)

            let squaremodal = document.querySelectorAll(".squaremodal")
            for( let i = 0; i < squaremodal.length; i++){
                squaremodal[i].addEventListener("click",function(){
                    let p1 = document.getElementById("p1")
                    player1 = persons[squaremodal[i].getAttribute("id")]

                    p1.setAttribute("data-iconp1", player1)
                    localStorage.setItem("jogadorEscolhido1", player1)
                    closemodal()
                })
            }
                      
            //ao clicar no square vai fechar a janela modal
            // div.addEventListener("click",function(){
            //     //ao clicar no square vai selecionar jogador
            //     closemodal()
            //     updatesquares() //atualiza os squares
            // })                      
                    
        }    

    }
    // function playerselect2(){
    else if (jogador == 1 ){
        
        for( i = 0 ; i < persons.length; i++){
        // for (i in persons){
            //adicionar quadrados junto do conteudo "codigos dos emojis" de acordo com o tamanho do array
            let modal = document.querySelector(".modalplayer")
            let div = document.createElement("div")
            div.className = "squaremodal"
            div.dataset.icon = persons[i]   //dataset é atributo personalizado, no caso a string do persons[i]
            // div.dataset.iconp2 = persons[i]
            div.setAttribute("id", [i])
            modal.appendChild(div)
            console.log(div)

            let squaremodal = document.querySelectorAll(".squaremodal")
            for( let i = 0; i < squaremodal.length; i++){
                squaremodal[i].addEventListener("click",function(){
                    let p2 = document.getElementById("p2")
                    player2 = persons[squaremodal[i].getAttribute("id")]
                    // E no p2, usaremos i setAttribute para adicionar a propriedade data-iconp2, e colocar o valor que estar em player1.
                    p2.setAttribute("data-iconp2", player2)
                    localStorage.setItem("jogadorEscolhido2", player2)
                    closemodal()
                })

            }
                    
        }
        
    }

}



