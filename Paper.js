class Paper{
    constructor(x,y){
    var options = {
    isStatic : false,
    restitution : 0.3,
    fricton : 0.5,
    density: 1.2
        }
        this.Body = Bodies.circle(x,y,20,options)
        World.add(world,this.Body)
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.Body.position.x,this.Body.position.y,20,20)
    }
}