describe('Help ALF', function() {
	beforeEach(function() {
		calculator = new HelpALF();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual("Spaceship lost forever.");
	});

	it('should return Spaceship found! for 7,2 string', function() {
		expect(calculator.add('7,2')).toEqual('Spaceship found!');
	});

	
});
