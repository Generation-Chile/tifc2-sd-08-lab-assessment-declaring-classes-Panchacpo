/*
5. Experiment with allowing the player to level up based on gained experience points.
    * An experience point is a **number**. A level up should occur when a player gains enough experience points.
    * Try adding a method to allow a player to gain a given number of experience points.
    * How many experience points should result in a level up? How can you keep track of this number?*/


export class Player {
  constructor(name, level, points) {
    this.name = name
    this.points = points
    this.level = level
  }
  info(){
    console.log(`${this.name} has reached Level ${this.level}!`)
  }
  levelUp() {
     this.level += 1;
      
  }
  points(){
    for (var i= 0; i<1000; i++);
     if(i==i+1){
      this.levelUp()
      console.log(`${this.name} has reached Level ${this.level}!`)
     }else{
      console.log(`${this.name} has reached maximum level!`)
     }
    
  }
  }
const Player1= new Player("Tara");

 
  