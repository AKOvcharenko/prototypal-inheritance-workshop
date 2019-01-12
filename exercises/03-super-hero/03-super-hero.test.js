const SuperHero = require('./03-super-hero');

const wolverine = new SuperHero('x-men', 'Logan', 45, 4);

describe('SuperHero', () => {
  it('should be defined', () => {
    expect(SuperHero).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof SuperHero).toBe('function');
  });

  it('should return an object', () => {
    expect(typeof wolverine).toBe('object');
  });

  it('should return an instance of SuperHero', () => {
    expect(wolverine instanceof SuperHero).toBe(true);
  });

  it('created instance should has method greet', () => {
    expect(wolverine).toHaveProperty('greet');
  });

  it('created instance should has method greet, in prototype', () => {
    expect(wolverine.hasOwnProperty('greet')).toBe(false);
  });

  it('greet should returns', () => {
    expect(wolverine.greet()).toBe('hello there! my name is Logan, and I am x-men\'s team member.');
  });

  it('created instance should has method kickAsses', () => {
    expect(wolverine).toHaveProperty('kickAsses');
  });

  it('created instance should has method kickAsses, in prototype', () => {
    expect(wolverine.hasOwnProperty('kickAsses')).toBe(false);
  });

  it('kickAsses should returns', () => {
    expect(wolverine.kickAsses()).toBe('I kick asses with power 45.');
  });

  it('created instance should has method manageTheTeam', () => {
    expect(wolverine).toHaveProperty('manageTheTeam');
  });

  it('created instance should has method manageTheTeam, in prototype', () => {
    expect(wolverine.hasOwnProperty('manageTheTeam')).toBe(false);
  });

  it('manageTheTeam should returns', () => {
    expect(wolverine.manageTheTeam()).toBe('I manage x-men team, with experience 4.');
  });

  it('created instance should has own property team', () => {
    expect(wolverine.hasOwnProperty('team')).toBe(true);
  });

  it('created instance should has proper property team', () => {
    expect(wolverine).toHaveProperty('team', 'x-men');
  });

  it('created instance should has own  property power', () => {
    expect(wolverine.hasOwnProperty('power')).toBe(true);
  });

  it('created instance should has proper property power', () => {
    expect(wolverine).toHaveProperty('power', 45);
  });

  it('created instance should has own property exp', () => {
    expect(wolverine.hasOwnProperty('exp')).toBe(true);
  });

  it('created instance should has proper property exp', () => {
    expect(wolverine).toHaveProperty('exp', 4);
  });

  it('created instance should has own property name', () => {
    expect(wolverine.hasOwnProperty('name')).toBe(true);
  });

  it('created instance should has proper property name', () => {
    expect(wolverine).toHaveProperty('name', 'Logan');
  });
});
