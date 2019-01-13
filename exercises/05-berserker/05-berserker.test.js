const Berserker = require('./05-berserker');

const hulk = new Berserker('avengers', 'Hulk', 1000, 1);

describe('Berserker', () => {
  it('should be defined', () => {
    expect(Berserker).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof Berserker).toBe('function');
  });

  it('should return an object', () => {
    expect(typeof hulk).toBe('object');
  });

  it('should return an instance of Berserker', () => {
    expect(hulk instanceof Berserker).toBe(true);
  });

  it('created instance should has method greet', () => {
    expect(typeof hulk.greet).toBe('function');
  });

  it('created instance should inherit method greet', () => {
    expect(hulk.hasOwnProperty('greet')).toBe(false);
  });

  it('created instance should inherits method greet from super class', () => {
    expect(Berserker.prototype.hasOwnProperty('greet')).toBe(false);
  });

  it('greet should returns', () => {
    expect(hulk.greet()).toBe('hello there! my name is Hulk, and I am avengers\'s team member.');
  });

  it('created instance should has method manageTheTeam', () => {
    expect(hulk).toHaveProperty('manageTheTeam');
  });

  it('created instance should has method manageTheTeam, in prototype', () => {
    expect(Berserker.prototype.hasOwnProperty('manageTheTeam')).toBe(true);
  });

  it('manageTheTeam should returns', () => {
    expect(hulk.manageTheTeam()).toBe('I can not manage team, I am too strong for this, my power is 1000.');
  });

  it('created instance should has method kickAsses', () => {
    expect(typeof hulk.kickAsses).toBe('function');
  });

  it('created instance should inherits method kickAsses', () => {
    expect(hulk.hasOwnProperty('kickAsses')).toBe(false);
  });

  it('created instance should inherits method kickAsses, from super class', () => {
    expect(Berserker.prototype.hasOwnProperty('kickAsses')).toBe(false);
  });

  it('kickAsses should returns', () => {
    expect(hulk.kickAsses()).toBe('I kick asses with power 1000.');
  });

  it('created instance should has proper property team', () => {
    expect(hulk).toHaveProperty('team', 'avengers');
  });

  it('created instance should has own  property power', () => {
    expect(hulk.hasOwnProperty('power')).toBe(true);
  });

  it('created instance should has proper property power', () => {
    expect(hulk).toHaveProperty('power', 1000);
  });

  it('created instance should has own property exp', () => {
    expect(hulk.hasOwnProperty('exp')).toBe(true);
  });

  it('created instance should has proper property exp', () => {
    expect(hulk).toHaveProperty('exp', 1);
  });

  it('created instance should has own property name', () => {
    expect(hulk.hasOwnProperty('name')).toBe(true);
  });

  it('created instance should has proper property name', () => {
    expect(hulk).toHaveProperty('name', 'Hulk');
  });
});
