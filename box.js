class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      
    }

    display(){
      //console.log(this.body.speed);
      if(this.body.speed < 3){
       super.display();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
      }
     }
  
  };