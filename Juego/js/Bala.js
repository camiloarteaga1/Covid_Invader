class Bullet
{

    #image;
    #xCentro;
    #yCentro;
    #radio;

    constructor(xInicial, yInicial) // xInicial y yInicial corresponden a la posicion del jugador en el momento del disparo
    {
        this.#radio = 20;
        this.#xCentro = xInicial;
        this.#yCentro = yInicial;
        this.#image = new Image();
        this.#image.src = 'imgs/Gota.png';
    }

    dibujar (ctx)
    {
        ctx.beginPath();
        ctx.drawImage(this.#image,0,0,50,50,this.#xCentro-20, this.#yCentro-20,40,40);
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