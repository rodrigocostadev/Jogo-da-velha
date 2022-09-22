//iniciar minhas variaveis

let board = ['','','','','','','','',''] // tabuleiro
let playertime = 0    // vai ser 0 pro jogador 1, e 1 pro jogador 2 
let symbols = ['o','x']
let gameover = false


function handlemove(position){

    // if (gameover){  //se gameover for verdadeiro acaba o jogo, caso contrario, roda normalmente
    //     return
    // }

    // if (gameover){
    //     board [position] = ''
    //     playertime = 0

    // }

    if(board[position] == ''){

    board[position] = symbols[playertime]

    gameover = iswin() 

    if(gameover == false){  //se não houver vencedor, continua o jogo e troca a vez do jogador
        if (playertime == 0){
            playertime = 1
        }else{
            playertime = 0
        }

    player()
        
    }
    
    // if (playertime == 0 && playertime != 1 && board[position] == 'x' && board[position] != '' ){
    //     document.querySelector("#lobo").style.backgroundColor = 'red'
    //     document.querySelector("#raposa").style.backgroundColor = 'beige'
    // }else{
    //     document.querySelector("#lobo").style.backgroundColor = 'beige'
    //     document.querySelector("#raposa").style.backgroundColor = 'red'
    // }

    return gameover //retorna se o jogo acabou ou nao

    //3 FUNCIONAMENTO: A função handlemove vai pegar a posição que foi dada na função handleclick 
    //que esta no arquivo INTERFACE. vai pegar essa posição e colocar como index do tabuleiro/ board, que vai receber
    // os simbolos de acordo com a vez do jogador/playertime, 
    //os simbolos tem como index a variavel playertime 
    // depois que for escolhido o simbolo o ou x, ele vai buscar no css a div correspondente a vez do jogador/playertime
    // e vai atualizar para o tabuleiro/ board atraves da função updatesquares que esta no arquivo INTERFACE
    }
}
// }


function iswin(){
    
    let winstates = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for ( let i = 0; i < winstates.length; i++){
        let seq = winstates[i]

        var pos0 = seq[0]
        var pos1 = seq[1]
        var pos2 = seq[2]

        var winner = [pos0, pos1, pos2] // var winner vai mostrar a sequencia vencedora           //modificaçao rodrigo 

        function selecionados(){  // função selecionados deixa o background vermelho da sequencia vencedora 

                 //modificaçao rodrigo 
                document.getElementsByClassName("square")[pos0].style.backgroundColor = 'red'
                document.getElementsByClassName("square")[pos1].style.backgroundColor = 'red'
                document.getElementsByClassName("square")[pos2].style.backgroundColor = 'red'
            
        }        

        if(board[pos0] == board[pos1] && 
            board[pos0] == board[pos2] && 
            board[pos0] != '') //se posiçao 0 é igual a posição 1 e a posiçao 3 e é diferente de vazio

            {  
            console.log(winner + " é a sequencia vencedora")  //modificaçao rodrigo 
            console.log(winner)  //modificaçao rodrigo 
            selecionados()  //modificaçao rodrigo 
            return true } 

                
            //se alguma das combinações de winstates for executada retorna true para a variavel gameover e fim de jogo
    }    

    return false  //se alguma das combinações de winstates nao for concluida e executada retorna false e jogo continua
}



