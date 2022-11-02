let player1 = "" // Essa variável vai armazenar o icone escolhido pelo jogador 0
let player2 = "" // Já essa aqui, o  icone escolhido pelo jogador 1
let playerEscolha = "" // A variável vai definir quem estar escolhendo o icone
let playerJogada = "" // E essa aqui, qual é o player da vez

document.addEventListener("DOMContentLoaded", function(){
     //dom content loaded é um evento que executa o que esta na função apos o html ser carregado por completo

    let squares = document.querySelectorAll(".square")  //variavel squares é cada quadrado do tabuleiro

    // query selector pega todos os seletores que foram solicitados, tem funcionamento parecido com getelementsbyclassname
    //let squares = document.getElementsByClassName("square")

   
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
        playerJogada = 1 // Se for 0, ele coloca 0 na variável playerjogada
    }else{
        playerJogada = 1 // Se for 1, ele coloca 1 na variável playerjogada
    }

    if(handlemove(position)){ //se handlemove for verdadeiro, o jogo acaba e manda alerta de que o jogo acabou

            setTimeout(()=>{
            alert ("O Jogo Acabou, Clique no botão REINICIAR para jogar novamente ")
        },800) //depois de 200 milissegundos vai disparar o alerta de o jogo acabou
    }

    updatesquares(position) // ao clicar atualiza os squares   
    // Em updatesquares, colocamos como argumento o position, ele nos dar a posição do elemento que clicamos na tela. 

    //2 FUNCIONAMENTO: handleclick passa a posição do quadrado/square que foi clicado para a função handlemove 
    //que esta no outro arquivo js GAME. Logo apos isso roda da função updatesquares

}

function updatesquares (posicaoClicada) { // E aqui, eu posso colocar o argumento como posicaoClicada (que é o position)    

    let squares = document.querySelectorAll(".square")

    // squares.forEach(function(square){ //O método forEach() executa uma dada função em cada elemento de um array.
    
    // if (gameover == false){
        squares.forEach((square) => {
            let position = square.id
            let symbols = board[position]

            if(symbols !=''){
                square.innerHTML = `<div class='${symbols}'><div/>`  // se o symbol nao for vazio, coloca raposa ou lobo
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

function closemodal(){
    let modal = document.querySelector(".modalplayer")
    modal.innerHTML = ""
    modal.style.display = "none"
}

function openmodal1(){
    let modal = document.querySelector(".modalplayer")
    modal.style.display = "block"
    playerselect1()    
}

function openmodal2(){
    let modal = document.querySelector(".modalplayer")
    modal.style.display = "block"
    playerselect2()
} 

function playerselect1(){
    let squaresModal = document.querySelectorAll(".squaremodal")
    let persons = [  
        "\u{1F43A}",
        "\u{1F98A}", 
        "\u{1F435}",
        "\u{1F436}",
        "\u{1F99D}",
        "\u{1F431}",
        "\u{1F981}",
        "\u{1F42F}",
        "\u{1F434}",
        "\u{1F984}",
        "\u{1F993}",
        "\u{1F42E}",
        "\u{1F437}",
        "\u{1F42D}",
        "\u{1F439}",
        "\u{1F430}",
        "\u{1F43B}",
        "\u{1F428}",
        "\u{1F43C}",
        "\u{1F43C}",
        "\u{1F98B}",
        "\u{1F988}",
        "\u{1F41D}",
        "\u{1F41E}",  //padrão unicode
      ];
    
    for( i = 0 ; i < persons.length; i++){
    // for (i in persons){
        //adicionar quadrados junto do conteudo "codigos dos emojis" de acordo com o tamanho do array
        
        let modal = document.querySelector(".modalplayer")
        let div = document.createElement("div")
        div.className = "squaremodal"
        div.dataset.icon = persons[i]   //dataset é atributo personalizado, no caso a string do persons[i]
        div.dataset.iconp1 = persons[i]
        iconp1 = persons[i]
        div.setAttribute("id", [i])
        modal.appendChild(div)
        console.log(div)
                
    }

    squaresModal.addEventListener("click",function(){
        //ao clicar no square vai selecionar jogador
        closemodal(posicao)
    })

    // if() //definir personagem inicial quando a pessoa nao quiser trocar de personagem
    //    let personinitial =  document.querySelector("#p1").style.content
    //     personinitial = 

    // openmodal()
}

function playerselect2(){
    let persons = [  
        "\u{1F43A}",
        "\u{1F98A}", 
        "\u{1F435}",
        "\u{1F436}",
        "\u{1F99D}",
        "\u{1F431}",
        "\u{1F981}",
        "\u{1F42F}",
        "\u{1F434}",
        "\u{1F984}",
        "\u{1F993}",
        "\u{1F42E}",
        "\u{1F437}",
        "\u{1F42D}",
        "\u{1F439}",
        "\u{1F430}",
        "\u{1F43B}",
        "\u{1F428}",
        "\u{1F43C}",
        "\u{1F43C}",
        "\u{1F98B}",
        "\u{1F988}",
        "\u{1F41D}",
        "\u{1F41E}",  //padrão unicode
      ];
    
    for( i = 0 ; i < persons.length; i++){
    // for (i in persons){
        //adicionar quadrados junto do conteudo "codigos dos emojis" de acordo com o tamanho do array
        let modal = document.querySelector(".modalplayer")
        let div = document.createElement("div")
        div.className = "squaremodal"
        div.dataset.icon = persons[i]   //dataset é atributo personalizado, no caso a string do persons[i]
        div.dataset.iconp1 = persons[i]
        iconp2 = persons[i]
        div.setAttribute("id", [i])
        modal.appendChild(div)
        console.log(div)
                
    }
    
}



