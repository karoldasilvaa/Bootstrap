// Vai iniciar esse script apenas quando esse documento estiver pronto, basicamente vai esperar o html carregar todo

$(document).ready(function() {

// Progress bar (Estrutura do circulo de animação)   
    // criarCirculo(document.getElementById("circleA"), 60, "#64DAF9", 1400);
    // criarCirculo(document.getElementById("circleB"), 70, "#FFFF00", 1600);
    // criarCirculo(document.getElementById("circleC"), 80, "#FF00FF", 1800);
    // criarCirculo(document.getElementById("circleD"), 90, "#F4A460", 2000);

    var config = [
        {
            container: document.getElementById("circleA"),
            numero: 60,
            cor: "#64DAF9",
            duracao: 1600
        },
        {
            container: document.getElementById("circleB"),
            numero: 254,
            cor: "#FFFF00",
            duracao: 1800
        },
        {
            container: document.getElementById("circleC"),
            numero: 32,
            cor: "#FF00FF",
            duracao: 2000
        },
        {
            container: document.getElementById("circleD"),
            numero: 5243,
            cor: "#F4A460",
            duracao: 2200
        }
    ]

    for(var i = 0; i< config.length; i++) {
        criarCirculo(config[i].container, config[i].numero, config[i].cor, config[i].duracao);
    }

    function criarCirculo(container, numero, cor, duracao){
        // progress bar criado no css e o circle e do javascript
        let circle = new ProgressBar.Circle(container, {
            // cor do circulo
            color:cor,
            // largura do circulo
            strokeWidth: 8,
            // duração da animação (o circulo se mexendo)
            duration: duracao,
            // para começar com o cinza e terminar no azul
            from: {color: '#AAA'},
            to: {color: cor},

            // fazer passo da animação
            step: function(state, circle) {
                // state e circle faz parte da biblioteca para criar o circulo animado
                circle.path.setAttribute('stroke', state.color);

                // numero do final que vai ficar faz o arredondamento do 60 pra ir progredindo 
                let value = Math.round(circle.value() * numero);
                // mas o numero final é esse aqui
                circle.setText(value);
            }
        });
    
        // iniciando a animação dos circulos quando o usuario chega no elemento, pegar a posição do elemento o id da div 
        let dataAreaOffset = $ ('#data-area').offset();
        // parar a animação apos ela ser execultada um vez
        let stop = 0;
        $(window).scroll(function(e) {

                // com essa variavel tem a posição de scroll do usurio (Dentro de um navegador, scroll está relacionado a barra de rolagem e ao evento de rolar a página para cima ou para baixo.)
            let scroll = $(window).scrollTop();

            if (scroll > (dataAreaOffset.top - 500) && stop == 0 ) {
                
                // para disparar a animação vai dizer se for
                circle.animate(1.0);

                // Nao vai repetir a animação
                stop = 1;
            } 

        });
    }
    
});