
    class Hero {

        constructor(x,y,r) {
        
        var option={
        frictionAir:0.005,
        density:1.,
        
        }
        this.image=loadImage("images/Superhero-01.png")

        this.body = Bodies.circle(x,y,50,option);
        World.add(world, this.body);
    
        }
        display(){
    
            var pos =this.body.position;
            imgMode(CENTRE) 
image(this.image,0,0,this.width,this.height)
    
        }
    
    
        }