const Singleton = require('./01-singleton');

describe('Singleton', () => {
  it('should be defined', () => {
    expect(Singleton).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof Singleton).toBe('function');
  });

  it('should return an object', () => {
    expect(typeof new Singleton()).toBe('object');
  });

  it('should return an instance of Singleton', () => {
    const obj = new Singleton();

    expect(obj instanceof Singleton).toBe(true);
  });

  it('created instance should be Singleton', () => {
    const firstInstance = new Singleton();
    const secondInstance = new Singleton();

    expect(secondInstance === firstInstance).toBe(true);
  });
});
