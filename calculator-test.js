
it('should calculate the monthly rate correctly', function() {
  const values = {
    amount: 150000,
    years: 30,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('805.23');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 150000,
    years: 30,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('805.23');
});

/// etc
