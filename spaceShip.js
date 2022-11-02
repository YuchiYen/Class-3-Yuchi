// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    constructor(name, topSpeed){
        this.name = name;
        this.topSpeed = topSpeed;
    }
    accelerate(){
        console.log(`${this.name} moving to ${this.topSpeed}`)
    }
}


// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const lexx = new SpaceShip("lexx", 12000);
lexx.accelerate();
const shapiro = new SpaceShip("Shapiro", "Warp Speed 5");
shapiro.accelerate();