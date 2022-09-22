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

    if(handlemove(position)){ //se handlemove for verdadeiro, o jogo acaba e manda alerta de que o jogo acabou

            setTimeout(()=>{
            alert ("O Jogo Acabou, Clique no botão REINICIAR para jogar novamente ")
        },300) //depois de 200 milissegundos vai disparar o alerta de o jogo acabou
    }

    updatesquares() // ao clicar atualiza os squares    

    //2 FUNCIONAMENTO: handleclick passa a posição do quadrado/square que foi clicado para a função handlemove 
    //que esta no outro arquivo js GAME. Logo apos isso roda da função updatesquares

}

function updatesquares () {    

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
        document.querySelector("#lobo").style.backgroundColor = 'red'
        document.querySelector("#lobo").style.scale = '1.4'
        document.querySelector("#raposa").style.backgroundColor = 'beige'
        document.querySelector("#raposa").style.scale = '1'
    }else{
        document.querySelector("#lobo").style.backgroundColor = 'beige'
        document.querySelector("#lobo").style.scale = '1'
        document.querySelector("#raposa").style.backgroundColor = 'red'
        document.querySelector("#raposa").style.scale = '1.4'
    }
}



