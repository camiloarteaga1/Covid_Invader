class Escenario
{
    #back;
    #type;

    constructor()
    {
        this.#back =    [ 'url1',
                         'url2',
                         'url3',
                         'url4',
                         'url5',
                         'url6',
                         'final'           
                        ];
    }

    changeScene(srcActual, canvas)
    {
        let sceneIndex = this.#back.findIndex( scene => srcActual == scene );
        sceneIndex += 1;
        canvas.style.background = this.#back[sceneIndex];
    }
}