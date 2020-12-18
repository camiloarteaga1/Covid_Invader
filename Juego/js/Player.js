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

    // dibujar(ctx)
    // {
    //     ctx.beginPath();
    //     let relleno = new Image();
    //     relleno.src = "imgs/Jeringa.png";
    //     relleno.onload = function()
    //     {
    //         let img = ctx.createPattern(relleno, "no-repeat");
    //         ctx.arc(this.#xCentro, this.#yCentro, this.#radio, 0, 2.0 * Math.PI);
    //         //ctx.fillStyle = this.#colorRelleno;
    //         ctx.fillStyle = img;
    //         ctx.fill();
    //         //ctx.strokeStyle = this.#colorContorno;
    //         ctx.stroke();
    //         ctx.closePath();
    //     }
    // }

    // dibujar (ctx)
    // {
    //     ctx.beginPath();
    //     ctx.arc(this.#xCentro, this.#yCentro, this.#radio, 0, 2.0 * Math.PI);
        
    //     img = new Image();
    //     img.addEventListener('load', function(e){
    //         ctx.fillStyle = ctx.createPattern(this, 'no-repeat');
    //         ctx.fill();
    //     }, true);
    //     img.src = "./imgs/Jeringa.png";
    // }

    // dibujar(ctx)
    // {
    //     let img = document.createElement('img');

    //     img.src = 'imgs/Jeringa.png';
    //     img.onload = function(){
    //         ctx.save();
    //         ctx.beginPath();
    //         ctx.arc(this.#xCentro, this.#yCentro, this.#radio, 0, 2.0 * Math.PI, true);
    //         ctx.closePath();
    //         ctx.clip();

    //         ctx.drawImage(img, 100, 100, 400, 400);
    //         ctx.beginPath();
    //         ctx.arc(this.#xCentro, this.#yCentro, this.#radio, 0, 2.0 * Math.PI, true);
    //         ctx.clip();
    //         ctx.closePath();
    //         ctx.restore();
    //     }
    // }

    dibujar(ctx)
    {
        
        ctx.beginPath();
        ctx.arc(this.#xCentro, this.#yCentro, this.#radio, 0, 2.0 * Math.PI);
        ctx.drawImage(this.#imagen,0,0,300,300,this.#xCentro-33, this.#yCentro-40,80,80);
        // ctx.fillStyle = this.#colorRelleno;
        // ctx.fillStyle = "red";
        // ctx.fill();
        //ctx.strokeStyle = this.#colorContorno;
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