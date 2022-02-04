const Manager = require('../lib/manager');

describe('Manager', () => {
  let testManager = new Manager('Ant', 6, 'email@icloud.com', 7273981111)
  it('Should return name', () => {
    expect(testManager.getName()).toBe('Ant');
  });
  it('Should return id', () => {
    expect(testManager.getId()).toBe(6);
  });
  it('Should return email', () => {
    expect(testManager.getEmail()).toBe('email@icloud.com');
  });
  it('Should return Number', () => {
    expect(testManager.getOfficeNumber()).toBe(7273981111);
  });
  it('Should return Role', () => {
    expect(testManager.getRole()).toBe('Manager');
  });
});