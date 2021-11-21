const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Robert', 6969, 'RobAAugusta@gmail', 9);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Robert', 6969, 'RobAAugusta@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 