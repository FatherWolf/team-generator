const Employee = require('../lib/employee');

describe('Employee', () => {
  let testEmployee = new Employee('potato', 1, 'email@icloud.com')
  it('Should return name', () => {
    expect(testEmployee.getName()).toBe('potato');
  });
  it('Should return id', () => {
    expect(testEmployee.getId()).toBe(1);
  });
  it('Should return email', () => {
    expect(testEmployee.getEmail()).toBe('email@icloud.com');
  });
  it('Should return role', () => {
    expect(testEmployee.getRole()).toBe('Employee');
  });
});