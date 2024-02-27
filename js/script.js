// Vai iniciar esse script apenas quando esse documento estiver pronto, basicamente vai esperar o html carregar todo

$(document).ready(function(){ 

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
  
    // Filtro dos botao de projetos
    $('.filter-btn').on('click', function() {
        // identificar os botões o id em que foi clicado, type é o tipó do botão
        let type = $(this).attr('id'); 

        // identificar as box(caixas) que tem no projeto
        let boxes = $('.project-box');

        //remover a active do botao principal e adiciona no botão que foi clicado 
        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        // para esconder as box(caixas) que nao quer que apareca quando clicar no tipo de botão, passar o tipo do botão (dsg-btn) e a variavel type
        if (type == 'dev-btn') {
            // passar a classe da imagem e a variavel boxes
            cadaCaixa('dev', boxes);
        } else if (type == 'dsg-btn') {
            cadaCaixa('dsg', boxes);
        } else if (type == 'seo-btn') {
            cadaCaixa('seo', boxes);
        }else {
            cadaCaixa('all', boxes);
        }


    });

    // função para escolher as caixas quando clica no botão

    function cadaCaixa (type, boxes){
        if (type == 'all') {
            //se o tipo for all vai mostrar todas, fadeIn evento jquery que mostra todos os item que esta escondido pelo fade
            $(boxes).fadeIn();
        } else {
            // each = todos (todos os boxes = caixas)
            $(boxes).each(function() {
            // passar por cada imagem if não tiver a classe do type que foi enviado se o botão que foi clicado não representa essa box (hasClass)
                if (!$(this).hasClass(type)) {
                    // se o type for diferte vai fazer um fadeOut = esconder em slow = devagar
                    $(this).fadeOut('slow');
                } else {
                    //fadeIn = aparecer
                    $(this).fadeIn();
                }
            });
        }
    }

    // scroll para seções quando clicar no menu 
    // criando variavel do menu
    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let serviceSection = $('#services-area');
    let teanSection = $('#team-area');
    let portifolioSection = $('#portifolio-area');
    let contactSection = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function(){
        // pegar o id 
        let btnId = $(this).attr('id');
        console.log(btnId);

        if(btnId == 'about-menu') {
            scrollTo = aboutSection;
        }
        else if(btnId == 'services-menu') {
            scrollTo = serviceSection;
        }
        else if(btnId == 'services-menu') {
            scrollTo = teanSection;
        }
        else if(btnId == 'services-menu') {
            scrollTo = portifolioSection;
        }
        else if(btnId == 'services-menu') {
            scrollTo = contactSection;
        }
        else{
            scrollTo = bannerSection
        }

     // Para garantir que vai fazer o scroll
        $([document.documentElement, document.body]).animate({
        // scrolltpo: tipo da animação, 70: rait da barra de navegação
        scrollTop: $(scrollTo).offset().top - 70
        // 1500 dizer que essa animação demora 1500 segundos que é um segundo e meio
    }, 1500);
    });

});