describe("Unit testing for Calculator", function() {
  var calculator;

  beforeEach(function() {
  	calculator = new Calculator();
  });

  describe("Unit test for sum operation", function() {
  	it("should sum operands", function() {
    	var result = calculator.sum(1,1);
    	expect(result).toBe(2);
  	});

  	it("should return null when sum letters", function() {
    	var result = calculator.sum(2,1);
    	expect(result).toEqual(3);
  	});		
  });


  

});