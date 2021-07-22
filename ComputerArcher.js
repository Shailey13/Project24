class ComputerArcher {
  
    constructor(x, y, width, height, options){

      var options = {
        isStatic: true
      }

        this.body = Bodies.rectangle(x, y, width, height, options);
      
          this.width = width;
          this.height = height;

          this.image = loadImage("./assets/computerArcher.png");

          Matter.Body.setAngle(this.body, PI/2);
      
          World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        /*if (keyIsDown(UP_ARROW)&& this.angle < 1.77){
          this.angle += 0.02;
        }
        if (keyIsDown(DOWN_ARROW) && this.angle > 1.47){
          this.angle -= 0.02;
        }*/
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}