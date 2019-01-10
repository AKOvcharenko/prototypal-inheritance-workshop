const Object = require('./02-native-prototypes');

describe('Prototypes modifying', () => {

  it('toString updated', () => {
    const result = (new Object()).toString();
    expect(result).toBe('Big Brother watching You! [object Object]');
  });
});
