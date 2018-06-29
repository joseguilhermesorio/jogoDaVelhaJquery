var rodada = 1;
var matriz = [3];

matriz['a'] = [3];
matriz['b'] = [3];
matriz['c'] = [3];

matriz['a'][1] = 0;
matriz['a'][2] = 0;
matriz['a'][3] = 0;

matriz['b'][1] = 0;
matriz['b'][2] = 0;
matriz['b'][3] = 0;

matriz['c'][1] = 0;
matriz['c'][2] = 0;
matriz['c'][3] = 0;

$(document).ready(function(){
    escondeTelajogo();
    $('.btn_iniciar').click(function(){
        var nome_jogador1 = $('#jogador1').val();
        var nome_jogador2 = $('#jogador2').val();

        if(nome_jogador1 == '' || nome_jogador1 == null){
            alert('Preencha o nome do jogador 1');
            return false;
        }
        
        if(nome_jogador2 == '' || nome_jogador2 == null){
            alert('Preencha o nome do jogador 2');
            return false; 
        }

        $(".nome_jogador1").append(nome_jogador1);
        $(".nome_jogador2").append(nome_jogador2);

        mostraTelaJogo();
        jogada();
    });

})

function escondeTelajogo(){
    $('#tela_jogo').hide();
}

function mostraTelaJogo(){
    $('#tela_jogo').show();
    $('#tela_inicial').hide()
}

function jogada(){
    $('.jogada').click(function(){
        var id_campo_clicado = this.id;
        jogadaPartida(id_campo_clicado);
    });
}

function jogadaPartida(id){
    var icone = '';
    var ponto = 0;

    if((rodada % 2) == 1){
        ponto = -1;
        icone = 'url("imagens/marcacao_1.png")';
    }else{
        ponto = 1;
        icone = 'url("imagens/marcacao_2.png")';
    }

    rodada = rodada + 1;
    $('#'+id).css('background-image',icone);

    var linha_coluna = id.split('-');

    matriz[linha_coluna[0]][linha_coluna[1]] = ponto;
    verifica_combinacao();
}

function verifica_combinacao(){
    //varifica na horizontal
    var pontos = 0;
    for(var i = 1; i <= 3; i++){
        pontos = pontos + matriz['a'][i];
    }
    ganhador(pontos);

    var pontos = 0;
    for(var i = 1; i <= 3; i++){
        pontos = pontos + matriz['b'][i];
    }
    ganhador(pontos);

    var pontos = 0;
    for(var i = 1; i <= 3; i++){
        pontos = pontos + matriz['c'][i];
    }
    ganhador(pontos);


    //verifica na vertical
    for(var l = 1; l<= 3; l++){
        pontos = 0;
        pontos += matriz['a'][l];
        pontos += matriz['b'][l];
        pontos += matriz['c'][l];

        ganhador(pontos);
    }


    //Verifica na diagonal

    pontos = 0;

    pontos = matriz['a'][1] + matriz['b'][2] + matriz['c'][3];
    ganhador(pontos);

    pontos = 0;
    pontos = matriz['c'][1] + matriz['b'][2] + matriz['a'][3];
    ganhador(pontos);
}

function ganhador(pontos){
    if(pontos == -3){
        var jogador1 = $('#jogador1').val();
        alert('O jogador '+ jogador1 + ' é o vencedor!!');
        $('.jogada').off();
    }
    if(pontos == 3){
        var jogador2 = $('#jogador2').val();
        alert('O jogador '+ jogador2 + ' é o vencedor!!');
        $('.jogada').off();
    }
}


// Reiniciar Partida

function reiniciar(){
    window.location.href="index.html";
}