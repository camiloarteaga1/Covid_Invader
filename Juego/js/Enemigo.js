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
        
        this.#xCentro = xCentro;
        this.#yCentro = yCentro;

        if (this.#type == 1)
        {
            this.#imagen = new Image();
            this.#imagen.src = "imgs/Virus.png";
            this.#vida = 1;
            this.#radio = 30;
        }
        if (this.#type == 2)
        {
            this.#imagen = new Image();
            this.#imagen.src = "imgs/Virusrojo.png";
            this.#vida = 20;
            this.#radio = 30;
        }
    }

    dibujar (ctx)
    {
        ctx.beginPath();
        ctx.arc(this.#xCentro,this.#yCentro,this.#radio,0, 2.0 * Math.PI);
        ctx.drawImage(this.#imagen,0,0,300,300,this.#xCentro-30, this.#yCentro-30, 60,60);
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

    moverAbajo ()
    {
        this.#yCentro += 3;
    }

    get radio ()
    {
        return this.#radio;
    }

}