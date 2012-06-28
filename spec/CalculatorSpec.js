describe("Unit testing for Calculator", function() {
  var calculator;

  beforeEach(function() {
  	calculator = new Calculator();
  });

  it("Should validate calculator was created", function() {
   	expect(calculator).not.toBe(null);
  });

  describe("Unit test for sum operation", function() {
  	it("should sum operands", function() {
    	var result = calculator.sum(1,1);
    	expect(result).toBe(2);
  	});

  	it("Should validate result using equal", function() {
    	var result = calculator.sum(2,1);
    	expect(result).toEqual(3);
  	});		
  });


  

});