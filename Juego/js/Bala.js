class Bullet
{

    #image;
    #xCentro;
    #yCentro;
    #radio;

    constructor(xInicial, yInicial) // xInicial y yInicial corresponden a la pocicion del jugador en el momento del disparo
    {
        this.#radio = 30;
        this.#xCentro = xInicial;
        this.#yCentro = yInicial;
        this.#image = 'url';
    }


    dibujar (ctx)
    {
        ctx.beginPath();
        ctx.arc(this.#xCentro,this.#yCentro,this.#radio,0, 2.0 * Math.PI);
        //ctx.fillStyle = this.#colorRelleno;
        ctx.fill();
        //ctx.strokeStyle = this.#colorContorno;
        ctx.stroke();
        ctx.closePath();
    }

    colisionarCon( enemigo )
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

    moverArriba( )
    {
        this.#yCentro -= 10;
    }

    get yCentro () 
    {
        return this.#yCentro;
    }

    get xCentro ()
    {
        return this.#xCentro;
    }
}