class Enemigo
{
    #type
    #vida
    #imagen
    #xCentro
    #yCentro
    #radio

    constructor(tipo, imagen, xCentro, yCentro)
    {
        this.#type = tipo;
        this.#imagen = imagen;
        this.#xCentro = xCentro;
        this.#yCentro = yCentro;

        if (this.#type == 1)
        {
            this.#vida = 1;
            this.#radio = 30;
        }
        if (this.#type == 2)
        {
            this.#vida = 20;
            this.#radio = 60;
        }
    }

    dibujar (ctx)
    {
        ctx.beginPath();
        ctx.arc(this.#xCentro,this.#yCentro,this.#radio,0, 2.0 * Math.PI);
        //ctx.fillStyle = this.#colorRelleno;
        ctx.fillStyle = 'green';
        ctx.fill();
        //ctx.strokeStyle = this.#colorContorno;
        ctx.stroke();
        ctx.closePath();
    }

    restarVida()
    {
        this.#vida -= 1;
    }

    get xCentro()
    {
        return this.#xCentro;
    }

    get yCentro()
    {
        return this.#yCentro;
    }

    set xCentro (value)
    {
        this.#xCentro = value;
    }

    set yCentro (value)
    {
        this.#yCentro = value;
    }

    get vidas()
    {
        return this.#vida;
    }

    get tipo()
    {
        return this.#type;
    }

    moverIzquierda ()
    {
        this.#xCentro += - 5;
    }

    moverDerecha ()
    {
        this.#xCentro += 5;
    }

    moverAbajo ()
    {
        this.#yCentro += 3;
    }

    get radio ()
    {
        return this.#radio;
    }

    desaparece()
    {
        this.#radio = 0;
    }
}