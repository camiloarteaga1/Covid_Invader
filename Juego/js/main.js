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
    player.line(ctx);
    enemies[0] = new Enemigo(1, undefined, 50, 120);
    enemies[0].dibujar(ctx);

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
    window.requestAnimationFrame(moverBala);
    
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

    function moverBala()
    {
        for (let i = 0; i < balas.length; ++i)
        {
            balas[i].clear(ctx, w, h);
            balas[i].moverArriba();
            balas[i].dibujar(ctx);
        }
        timerBala();
    }

    function timerBala()
    {
        setTimeout(function() {
            window.requestAnimationFrame(moverBala);;
        }, 1000 / 20);
    }
    
    function moverBoton(e)
    {
        switch (e.key)
        {     
            case "ArrowLeft":
                player.moverIzquierda();
                ctx.clearRect(0, 485, w, 115);
            break;

            case "ArrowRight":
                player.moverDerecha();
                ctx.clearRect(0, 485, w, 115);
            break;

        }
        if (e.code == "Space")
        {
            balas.push(new Bullet(player.xCentro, player.yCentro));
            console.log("creada");
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