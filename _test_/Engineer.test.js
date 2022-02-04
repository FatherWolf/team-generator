const Engineer = require('../lib/engineer');

describe('Engineer', () => {
  let testEngineer = new Engineer('zeus', 3, 'email@icloud.com', 'github')
  it('Should return name', () => {
    expect(testEngineer.getName()).toBe('zeus');
  });
  it('Should return id', () => {
    expect(testEngineer.getId()).toBe(3);
  });
  it('Should return email', () => {
    expect(testEngineer.getEmail()).toBe('email@icloud.com');
  });
  it('Should return github user', () => {
    expect(testEngineer.getGithub()).toBe('github');
  });
  it('Should return role', () => {
    expect(testEngineer.getRole()).toBe('Engineer');
  });
});