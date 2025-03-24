const basketballGame = {
    score: 0,
    fouls: 0,
    
    freeThrow() {
      this.score++;
      return this; 
    },
  
    basket() {
      this.score += 2;
      return this; 
    },
  
    threePointer() {
      this.score += 3;
      return this;  
    },
  
    halfTime() {
      console.log(`Halftime score is ${this.score} with ${this.fouls} fouls.`);
      return this; 
    },
  
    fullTime() {
      console.log(`Fulltime score is ${this.score} with ${this.fouls} fouls.`);
      return this; 
    },
  
    foul() {
      this.fouls++;
      return this;  
    }
} 

basketballGame.basket().freeThrow().freeThrow().basket().threePointer()
              .halfTime().foul().foul().basket().freeThrow().fullTime();  
  
