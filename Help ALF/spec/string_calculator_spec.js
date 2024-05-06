describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new HelpALF();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual("Spaceship lost forever.");
	});



	
});
