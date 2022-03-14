const { TestWatcher } = require('jest')
const {returnTwo, greeting, add, subtract, multiply, divide} = require('./functions.js')


test('returnTwo should return 2', () => {
    expect(returnTwo()).toEqual(2)
});

test('greeting should equal hello, (name)', () => {
    expect(greeting('James')).toEqual("Hello, James.")
    expect(greeting('Jill')).toEqual("Hello, Jill.")
});
describe('Math Functions', () => {

    test('sum of num1 plus num2', () => {
        expect(add(1, 2)).toEqual(3)
        expect(add(5, 9)).toEqual(14)
    });
    
    test('sum of num1 subtract num2', () => {
        expect(subtract(16, 13)).toEqual(3)
        expect(subtract(7, 10)).toEqual(-3)
    });
    
    test('sum of num1 multiplied by num2', () => {
        expect(multiply(10, 15)).toEqual(150)
        expect(multiply(40, .25)).toEqual(10)
    });
    
    test('sum of num1 divided by num2', () => {
        expect(divide(21, 3)).toEqual(7)
        expect(divide(360, 90)).toEqual(4)
    });
});