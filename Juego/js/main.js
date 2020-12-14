window.addEventListener("load", main)

function main()
{
    //Elements
    let miCanvas = document.getElementById("miCanvas");
    let miScore = document.getElementById("score");
    let miLevel = document.getElementById("level");
    let ctx = miCanvas.getContext("2d");
    let body = document.getElementById("body");
    let w = miCanvas.clientWidth;
    let h = miCanvas.clientHeight;

    //Objects
    let enemies = new Array();
    let balas = new Array();
    let player = new Player();
    let escenario = new Escenario();
    player.dibujar(ctx);

    //Sprite Player
    let sprite = new Image();
    sprite.src = "imgs/Jeringa.png";

    //Data 
    let level = 0;
    let score = 0;
    

    //Events
    body.addEventListener("keydown", moverBoton);

    //Animations
    window.requestAnimationFrame(scene);         
    
    
    
    
    function scene( )
    {
       console.log(miCanvas.style.backgroundImage);
       
        if (score%100 == 0 && level <= 4) {
            escenario.changeScene(miCanvas);
            level += 1
        }

        score += 10;

        miLevel.value = level;
        miScore.value = score;

        setTimeout(function() {
            window.requestAnimationFrame(scene); 
        }, 1000 / 1); 
             
    }

    
    
    
    
    function moverBoton(e)
    {
        switch (e.key)
        {     
            case "ArrowLeft":
                player.moverIzquierda();
                ctx.clearRect(0, 0, w, h);
            break;

            case "ArrowRight":
                player.moverDerecha();
                ctx.clearRect(0, 0, w, h);
            break;
        }
        player.dibujar(ctx);
    }

    function generarRandom(min,max)
    {
        let numeroGenerado;
        let numeroEsperado;
        numeroGenerado = Math.random();
        numeroEsperado = Math.floor((numeroGenerado * (max - min) + min));
        return numeroEsperado;
    }
}