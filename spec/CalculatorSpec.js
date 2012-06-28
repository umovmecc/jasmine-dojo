describe("Unit testing for Calculator", function() {
  var calculator;

  beforeEach(function() {
  	calculator = new Calculator();
  });


  it("should sum operands", function() {
    var result = calculator.sum(1,1);
    expect(result).toBe(2);
  });

});