class Rope{
    constructor(bodya,pointB){
        console.log(pointB);
        var options = {

            bodyA: bodya,
            pointB: pointB,
            stiffness:0.05,
            length:200
    
        }
        console.log(pointB);
        this.pointB = pointB;
        console.log(this.pointB);
        console.log(options);
    
        this.Sling = Constraint.create(options);
        World.add(world,this.Sling);
    }
    fly(){
        this.Sling.bodyA = null;
    }
    display(){
        var PointA = this.Sling.bodyA.position;
        var PointB = this.pointB;

        strokeWeight(4);
        line(PointA.x,PointA.y,PointB.x,PointB.y);
        
    }
}