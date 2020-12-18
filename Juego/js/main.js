//window.addEventListener("load", main);

let miEstado = false; // Var que controla el inicio del juego. 

function main() // Func que da incio al juego.
{
    document.getElementById("start").style.display =  "none";
    miEstado = true;  
    juego();  
}

function skins() {
    alert("Función en proceso");
}

function  juego()
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
    let escenario = new Escenario(miCanvas);
    player.dibujar(ctx);
    player.line(ctx);
    // enemies[0] = new Enemigo(1, undefined, 50, 60);
    // enemies[0].dibujar(ctx);

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
    window.requestAnimationFrame(generarEnemigos);

    function generarEnemigos()
    {
        let random = generarRandom(60, 540);

        if(score < 1400)
        {
            enemies.push(new Enemigo(1, undefined, random, 60));
            enemies[enemies.length-1].dibujar(ctx);
        }

        setTimeout(function() {
            window.requestAnimationFrame(generarEnemigos); 
        }, 1000 / 0.5);
    }
    
    function scene( )
    {
      
        if (score%200 == 0 && level <= 4 && score != 0) {
            escenario.changeScene(miCanvas, score);
            level += 1
        }

        console.log(score);

        miLevel.value = level;
        miScore.value = score;

        setTimeout(function() {
            window.requestAnimationFrame(scene); 
        }, 1000 / 1); 
             
    }

    function moverBala()
    {
        ctx.clearRect(0, 0, w, 485)
        for (let j = 0; j < enemies.length; ++j)
        {
            enemies[j].moverAbajo();
            enemies[j].dibujar(ctx);

            if(enemies[j].yCentro+40 >= 483)
            {
                enemies.splice(j, 1);
                j-=1;
                //console.log(enemies);
            }
        }

        for (let i = 0; i < balas.length; ++i)
        {
            // balas[i].clear(ctx, w, h);
            balas[i].moverArriba();
            balas[i].dibujar(ctx);
            if (balas[i].yCentro <= 0)
            {
                balas.splice(i, 1);
                i-=1;
                //console.log(balas);
            }
            puntos();
        }
        timerBala();
    }

    function puntos()
    {
        let aux;

        for(let i = 0; i < balas.length; ++i)
        {
            for(let j = 0; j < enemies.length; ++j)
            {
                aux = balas[i].colisionarCon(enemies[j]);

                if (aux == true)
                {
                    score += 50;
                    balas.splice(i, 1);
                    enemies.splice(j, 1);
                }
            }
        }
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
            balas.push(new Bullet(player.xCentro, player.yCentro-70));
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

