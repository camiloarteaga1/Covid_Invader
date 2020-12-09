class Player
{
    #numVidas;
    #imagen;
    #xCentro;
    #yCentro;
    #radio

    constructor()
    {
        this.#xCentro = 0;
        this.#yCentro = 0;
        this.#radio = 15;
        this.#numVidas = 4;
    }

    dibujar(ctx)
    {
        ctx.beginPath();
        ctx.arc(this.#xCentro,this.#yCentro,this.#radio,0, 2.0 * Math.PI);
        //ctx.fillStyle = this.#colorRelleno;
        ctx.fill();
        //ctx.strokeStyle = this.#colorContorno;
        ctx.stroke();
        ctx.closePath();
    }

    colisionarCon(enemigo)
    {
        let dx, dy, distanciaCentros, sumaRadios, respuesta;
        sumaRadios = this.#radio + enemigo.radio;
        dx = Math.pow ((this.#xCentro - enemigo.xCentro), 2);
        dy = Math.pow ((this.#yCentro - enemigo.yCentro), 2);
        distanciaCentros = Math.sqrt(dx + dy);
        if (distanciaCentros < sumaRadios)
        {
            respuesta = true;
        }
        else
        {
            respuesta = false;
        }
        return respuesta;
    }

    restarVida()
    {
        this.#numVidas -= 1;
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

    moverIzquierda ()
    {
        this.#xCentro += - 10;
    }

    moverDerecha ()
    {
        this.#xCentro += 10;
    }
}