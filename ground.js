class Ground{

    constructor(x,y,w,h){
        var option = {isStatic:true};
        this.body = Bodies.rectangle(x,y,w,h,option);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
  
    show(){
        push();
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
    }
  }

//   function keyPressed() {
//       if(keyCode === UP_ARROW) {
//         Matter.Body.applyForce(body, position, force)
//       }
//   }