describe('Help ALF', function() {
	beforeEach(function() {
		calculator = new HelpALF();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual("Spaceship lost forever.");
	});

	it('should return Spaceship lost forever. for 2 string', function() {
		expect(calculator.add('2')).toEqual('Spaceship lost forever.');
	});

	it('should return Spaceship lost forever. for 2,4 string', function() {
		expect(calculator.add('2,4')).toEqual('Spaceship lost forever.');
	});

	it('should return Spaceship lost forever. for abc,def string', function() {
		expect(calculator.add('abc,def')).toEqual('Spaceship lost forever.');
	});

	it('should return Spaceship found! for 7,2 string', function() {
		expect(calculator.add('7,2')).toEqual('Spaceship found!');
	});

	
});
