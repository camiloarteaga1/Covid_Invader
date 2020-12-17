class Escenario
{
    #back;
    #type = 0;

    constructor(canvas)
    {
        this.#back =    [ 'imgs/scene1.png',
                         'imgs/scene2.png',
                         'imgs/scene3.png'         
                        ];
    

        canvas.style.backgroundImage = "url('" + this.#back[this.#type] + "')";

    }

    changeScene(canvas)
    {
        this.#type += 1;
        canvas.style.backgroundImage = "url('" + this.#back[this.#type] + "')";  
    }

  
}