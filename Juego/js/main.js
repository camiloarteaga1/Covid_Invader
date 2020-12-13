window.addEventListener("load", main)

function main()
{
    //Elements
    let miCanvas = document.getElementById("miCanvas")
    let ctx = miCanvas.getContext("2d")
    let body = document.getElementById("body")
    let w = miCanvas.clientWidth;
    let h = miCanvas.clientHeight;

    //Objects
    let enemies = new Array();
    let balas = new Array();
    let player = new Player();
    player.dibujar(ctx);

    //Sprite Player
    let sprite = new Image();
    sprite.src = "imgs/Jeringa.png";

    body.addEventListener("keydown", moverBoton);


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