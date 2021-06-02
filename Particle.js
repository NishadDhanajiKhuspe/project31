class Particle{
	constructor(x,y,r){
	var options={
		restitution: 0.3,
		friction: 5,
		density: 1
	}
	this.x=x;
	this.y=y;
	this.r=r
	this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);
    this.body = Bodies.circle(x,y,this.r,options);
    this.color = color(random(0,255),random(0,255),random(0,255));
	World.add(world, this.body);
    
	}
	display(){
			var srubberpos=this.body.position;		
			push()
			translate(srubberpos.x, srubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			ellipse(0,0,this.r,this.r);
			pop();
	}

}