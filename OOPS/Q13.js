function Dog(name) {
    this.name = name; 
  }
  
  Dog.prototype = {
    // Add your code below this line
    numLegs:4,
    eat : function (){
      console.log("Bow Bow Bow")
  
    },
    describe: function (){
      console.log("My Name Is + this.name")
    }
  };