class Form{
    constructor(){
        this.button = createButton('Add to Cart');
    }

    display(){
        this.button.position(1200,105);

        this.button.mousePressed(()=>{
            if(item != 1){
                item += 1;
            }
        })
    }
}