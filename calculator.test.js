const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 3000;
    actual = sum(1000, 2000);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -10;
    actual = sum(-9, -1);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 10;
    actual = sum(10, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {
  test('can subtract two small positive numbers', () => {
    expected = 4;
    actual = subtract(10, 6);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => {
    expected = 9000;
    actual = subtract(10000, 1000);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -5;
    actual = subtract(-7,-2);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 5;
    actual = subtract(5, 0);
    expect(actual).toBe(expected);
  });


});

describe('multiply', () => {
  test('can multiply two positive numbers', () => {
    expected = 10;
    actual = multiply(5, 2);
    expect(actual).toBe(expected);
  });

  test('can multiply large positive numubers', () => {
    expected = 1000000;
    actual = multiply(500, 2000);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 10;
    actual = multiply(-5, -2);
    expect(actual).toBe(expected);
  });

  test('can multiply by zero', () => {
    expected = 0;
    actual = multiply(5, 0);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide a multiple by a number', () => {
    expected = 2;
    actual = divide(10, 5);
    expect(actual).toBe(expected);
  });

  test('can divide a number by non integer', () => {
    expected = 4;
    actual = divide(1, 0.25);
    expect(actual).toBe(expected);
  });

  test('can divide a number by negative number', () => {
    expected = -2;
    actual = divide(-10, 5);
    expect(actual).toBe(expected);
  });

  test('can divide a number by non integer', () => {
    expected = 4;
    actual = divide(1, 0.25);
    expect(actual).toBe(expected);
  });

  test('cannot divide by zero: positive infinity', () => {
    expected = Infinity;
    actual = divide(1, 0);
    expect(actual).toBe(expected);
  });

  test('cannot divide by zero: minus infinity', () => {
    expected = -Infinity;
    actual = divide(-5, 0);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {
  test('can return division remainder of zero', () => {
    expected = 0;
    actual = modulus(4, 2);
    expect(actual).toBe(expected);
  });

  test('can return remainder for positive divsion', () => {
    expected = 1;
    actual = modulus(5, 2);
    expect(actual).toBe(expected);
    
  });
  test('can return remainder for negative divsion', () => {
    expected = -1;
    actual = modulus(-7, 2);
    expect(actual).toBe(expected);
  });

  test('can return remainder for non-integer divsion', () => {
    expected = 1.5;
    actual = modulus(7.5, 2);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {
  test.skip('can add zero', () => {
    
  });
  test.skip('can add zero', () => {
    
  });
  test.skip('can add zero', () => {
    
  });

});

describe('odd', () => {
  test.skip('can add zero', () => {
    
  });
  test.skip('can add zero', () => {
    
  });
  test.skip('can add zero', () => {
    
  });

});
