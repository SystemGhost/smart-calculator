class SmartCalculator {
  constructor(initialexpression) {
   this.expression  = String(initialexpression);
  }

  add(number) {
		this.expression += String("+" + number);
		return this;
  }
  
  subtract(number) {
		this.expression += String("-" + number);
		return this;
  }

  multiply(number) {
		this.expression += String("*" + number);
		return this;
  }

  devide(number) {
    this.expression += String("/" + number);
		return this;
  }

  pow(number) {
    this.expression += String("**"+number);
    return this;
	}
	
	valueOf() {
		return eval(this.expression);
	}

}

module.exports = SmartCalculator;
