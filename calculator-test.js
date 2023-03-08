
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 20000, years: 15, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual("158.16")
});



it("should return a result with 2 decimal places", function() {
  const values = {amount: 20012, years: 15, rate: 5};
  expect(calculateMonthlyPayment(values)).toEqual("158.25")
});

/// etc
