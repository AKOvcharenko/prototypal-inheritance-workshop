const Wuss = require('./04-wuss');

const xavier = new Wuss('x-men', 'Pr. Xavier', 3, 99);

describe('Wuss', () => {
  it('should be defined', () => {
    expect(Wuss).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof Wuss).toBe('function');
  });

  it('should return an object', () => {
    expect(typeof xavier).toBe('object');
  });

  it('should return an instance of Wuss', () => {
    expect(xavier instanceof Wuss).toBe(true);
  });

  it('created instance should has method greet', () => {
    expect(typeof xavier.greet).toBe('function');
  });

  it('created instance should inherit method greet', () => {
    expect(xavier.hasOwnProperty('greet')).toBe(false);
  });

  it('created instance should inherits method greet from super class', () => {
    expect(Wuss.prototype.hasOwnProperty('greet')).toBe(false);
  });

  it('greet should returns', () => {
    expect(xavier.greet()).toBe('hello there! my name is Pr. Xavier, and I am x-men\'s team member.');
  });

  it('created instance should has method kickAsses', () => {
    expect(xavier).toHaveProperty('kickAsses');
  });

  it('created instance should has method kickAsses, in prototype', () => {
    expect(Wuss.prototype.hasOwnProperty('kickAsses')).toBe(true);
  });

  it('kickAsses should returns', () => {
    expect(xavier.kickAsses()).toBe('I can not kick asses :C my power is 3.');
  });

  it('created instance should has method manageTheTeam', () => {
    expect(typeof xavier.manageTheTeam).toBe('function');
  });

  it('created instance should inherits method manageTheTeam', () => {
    expect(xavier.hasOwnProperty('manageTheTeam')).toBe(false);
  });

  it('created instance should inherits method manageTheTeam, from super class', () => {
    expect(Wuss.prototype.hasOwnProperty('manageTheTeam')).toBe(false);
  });

  it('manageTheTeam should returns', () => {
    expect(xavier.manageTheTeam()).toBe('I manage x-men team, with experience 99.');
  });

  it('created instance should has proper property team', () => {
    expect(xavier).toHaveProperty('team', 'x-men');
  });

  it('created instance should has own  property power', () => {
    expect(xavier.hasOwnProperty('power')).toBe(true);
  });

  it('created instance should has proper property power', () => {
    expect(xavier).toHaveProperty('power', 3);
  });

  it('created instance should has own property exp', () => {
    expect(xavier.hasOwnProperty('exp')).toBe(true);
  });

  it('created instance should has proper property exp', () => {
    expect(xavier).toHaveProperty('exp', 99);
  });

  it('created instance should has own property name', () => {
    expect(xavier.hasOwnProperty('name')).toBe(true);
  });

  it('created instance should has proper property name', () => {
    expect(xavier).toHaveProperty('name', 'Pr. Xavier');
  });
});
