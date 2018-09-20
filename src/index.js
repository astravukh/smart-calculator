class SmartCalculator {
  constructor(initialValue) {
    this.elements = [];
    this.elements.push(initialValue)
  }

  add(number) {
    this.elements.push("add");
    this.elements.push(number);
    return this;
  }
  
  subtract(number) {
    this.elements.push("subtract");
    this.elements.push(number);
    return this;
  }

  multiply(number) {
    this.elements.push("multiply");
    this.elements.push(number);
    return this;
  }

  devide(number) {
    this.elements.push("devide");
    this.elements.push(number);
    return this;
  }

  pow(number) {
    this.elements.push("pow");
    this.elements.push(number);
    return this;
  }

  valueOf(){
    
    while(this.elements.indexOf("pow") !== -1){
      this.elements.reverse();
      let result = 0;
      let index = this.elements.indexOf("pow");
      result = Math.pow(this.elements[index+1],this.elements[index-1])
      this.elements[index] = result;
      this.elements.splice(index-1, 1);
      this.elements.splice(index, 1);
      this.elements.reverse();
    }

    while(this.elements.indexOf("multiply") !== -1){
      let result = 0;
      let index = this.elements.indexOf("multiply");
      result = this.elements[index-1] * this.elements[index+1];
      this.elements[index] = result;
      this.elements.splice(index-1, 1);
      this.elements.splice(index, 1);
    }
    
    while(this.elements.indexOf("devide") !== -1){
      let result = 0;
      let index = this.elements.indexOf("devide");
      result = this.elements[index-1] / this.elements[index+1];
      this.elements[index] = result;
      this.elements.splice(index-1, 1);
      this.elements.splice(index, 1);
    }

    while(this.elements.length !== 1){
      if(this.elements[1] == "add"){
        let result = 0;
        result = this.elements[0] + this.elements[2];
        this.elements[1] = result;
        this.elements.splice(0, 1);
        this.elements.splice(1, 1);
      }
      else{
        let result = 0;
        result = this.elements[0] - this.elements[2];
        this.elements[1] = result;
        this.elements.splice(0, 1);
        this.elements.splice(1, 1);

      }
    }
    return this.elements[0];
  }
}

module.exports = SmartCalculator;
