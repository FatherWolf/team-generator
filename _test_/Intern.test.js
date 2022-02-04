const Intern = require('../lib/intern');

describe('Intern', () => {
  let testIntern = new Intern('man', 2, 'email@icloud.com', 'school')
  it('Should return name', () => {
    expect(testIntern.getName()).toBe('man');
  });
  it('Should return id', () => {
    expect(testIntern.getId()).toBe(2);
  });
  it('Should return email', () => {
    expect(testIntern.getEmail()).toBe('email@icloud.com');
  });
  it('Should return github user', () => {
    expect(testIntern.getSchool()).toBe('school');
  });
  it('Should return role', () => {
    expect(testIntern.getRole()).toBe('Intern');
  });
});