class Escenario
{
    #back;
    #type;

    constructor()
    {
        this.#back =    [ './imgs/scene1.png',
                         './imgs/scene2.png',
                         './imgs/scene3.png',
                         './imgs/scene4.png',         
                        ];
    }

    changeScene(canvas)
    {

        console.log(canvas.style.backgroundImage);

        // let sceneIndex = this.#back.findIndex( scene => canvas.style.backgroundImage == scene );
        // console.log(sceneIndex);
        // sceneIndex += 1;
        // canvas.style.backgroundImage = "url('" + this.#back[sceneIndex] + "')";  
    }
}