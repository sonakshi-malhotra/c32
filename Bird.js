class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage ("sprites/smoke.png")
    this.trajectory=[] 
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>0&&this.body.position.x>200){
    var position=[this.body.position.x,this.body.position.y]
    this.trajectory.push(position)
    }
    for (var index = 0; index < this.trajectory.length; index++) {     
      image(this.smokeImage,this.trajectory[ index][0],this.trajectory[index][1])
    }
  }
}


