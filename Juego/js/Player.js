class Player
{
    #numVidas;
    #imagen;
    #xCentro;
    #yCentro;
    #radio;

    constructor()
    {
        this.#xCentro = 300;
        this.#yCentro = 540;
        this.#radio = 40;
        this.#numVidas = 4;
        this.#imagen = new Image();
        this.#imagen.src = "imgs/Jeringa.png";
    }

    dibujar(ctx)
    {
        
        ctx.beginPath();
        ctx.arc(this.#xCentro, this.#yCentro, this.#radio, 0, 2.0 * Math.PI);
        ctx.drawImage(this.#imagen,0,0,300,300,this.#xCentro-33, this.#yCentro-40,80,80);
        
        ctx.stroke();
        ctx.closePath();
    }

    line(ctx)
    {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "black";
        ctx.moveTo(0, 483);
        ctx.lineTo(600, 483);
        ctx.stroke();
        ctx.closePath();
    }

    get vidas()
    {
        return this.#numVidas;
    }

    get xCentro()
    {
        return this.#xCentro;
    }

    get yCentro()
    {
        return this.#yCentro;
    }

    lessVida()
    {
        this.#numVidas -= 1;
    }

    moverIzquierda ()
    {
        this.#xCentro += - 10;
    }

    moverDerecha ()
    {
        this.#xCentro += 10;
    }
}