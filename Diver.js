class Diver {
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x,y,this.width,this.height,options);

        this.animation = loadAnimation("images/diverImg_1.png", "images/diverImg_2.png", "images/diverImg_3.png");
        World.add(world, this.body);

    }

    display(){

        animation(this.animation, this.body.position.x, this.body.position.y, this.width, this.height);

    }
}
