const Imba = require('./06-imba');

const steven = new Imba('avengers', 'Steven Rogers', 300, 100);

describe('Imba', () => {
  it('should be defined', () => {
    expect(Imba).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof Imba).toBe('function');
  });

  it('should return an object', () => {
    expect(typeof steven).toBe('object');
  });

  it('should return an instance of Imba', () => {
    expect(steven instanceof Imba).toBe(true);
  });

  it('created instance should has method greet', () => {
    expect(typeof steven.greet).toBe('function');
  });

  it('created instance should inherit method greet', () => {
    expect(steven.hasOwnProperty('greet')).toBe(false);
  });

  it('created instance should inherits method greet from super class', () => {
    expect(Imba.prototype.hasOwnProperty('greet')).toBe(false);
  });

  it('greet should returns', () => {
    expect(steven.greet()).toBe('hello there! my name is Steven Rogers, and I am avengers\'s team member.');
  });
  it('created instance should has method manageTheTeam', () => {
    expect(typeof steven.manageTheTeam).toBe('function');
  });

  it('created instance should inherits method manageTheTeam', () => {
    expect(steven.hasOwnProperty('manageTheTeam')).toBe(false);
  });

  it('created instance should inherits method manageTheTeam, from super class', () => {
    expect(Imba.prototype.hasOwnProperty('manageTheTeam')).toBe(false);
  });

  it('manageTheTeam should returns', () => {
    expect(steven.manageTheTeam()).toBe('I manage avengers team, with experience 100.');
  });

  it('created instance should has method kickAsses', () => {
    expect(typeof steven.kickAsses).toBe('function');
  });

  it('created instance should inherits method kickAsses', () => {
    expect(steven.hasOwnProperty('kickAsses')).toBe(false);
  });

  it('created instance should inherits method kickAsses, from super class', () => {
    expect(Imba.prototype.hasOwnProperty('kickAsses')).toBe(false);
  });

  it('kickAsses should returns', () => {
    expect(steven.kickAsses()).toBe('I kick asses with power 300.');
  });

  it('created instance should has proper property team', () => {
    expect(steven).toHaveProperty('team', 'avengers');
  });

  it('created instance should has own  property power', () => {
    expect(steven.hasOwnProperty('power')).toBe(true);
  });

  it('created instance should has proper property power', () => {
    expect(steven).toHaveProperty('power', 300);
  });

  it('created instance should has own property exp', () => {
    expect(steven.hasOwnProperty('exp')).toBe(true);
  });

  it('created instance should has proper property exp', () => {
    expect(steven).toHaveProperty('exp', 100);
  });

  it('created instance should has own property name', () => {
    expect(steven.hasOwnProperty('name')).toBe(true);
  });

  it('created instance should has proper property name', () => {
    expect(steven).toHaveProperty('name', 'Steven Rogers');
  });

  it('created instance should has method doAnything, in prototype', () => {
    expect(steven.hasOwnProperty('doAnything')).toBe(false);
  });

  it('doAnything should returns', () => {
    expect(steven.doAnything()).toBe('I can do anything, because I am imba.');
  });
});
