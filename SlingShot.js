class SlingShot{
    constructor(bodyA,  pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.2,
            length: 10
        }
        this.pointB=pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){ 
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

    
fly(){
    if(this.sling.bodyA){ 
Matter.Body.applyForce(this.sling.bodyA,this.sling.bodyA.position,{x:this.pointB.x,y:this.pointB.y})
this.sling.bodyA=null
    }
}

attach(body){
    this.sling.bodyA=body

}
}