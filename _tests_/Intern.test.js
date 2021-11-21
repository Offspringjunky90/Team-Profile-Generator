const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Robert', 6969, 'RobAAugusta@gmail', 'UNH');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Robert', 6969, 'RobAAugusta@gmail', 'UNH');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Robert', 6969, 'RobAAugusta@gmail', 'UNH');

    expect(intern.getRole()).toEqual("Intern");
}); 