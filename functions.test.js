const { TestWatcher } = require('jest')
const {returnTwo, greeting, add} = require('./functions.js')


test('returnTwo should return 2', () => {
    expect(returnTwo()).toEqual(2)
});

test('greeting should equal hello, (name)', () => {
    expect(greeting('James')).toEqual("Hello, James.")
    expect(greeting('Jill')).toEqual("Hello, Jill.")
});

test('sum of num1 and num2', () => {
    expect(add(1, 2)).toEqual(3)
    expect(add(5, 9)).toEqual(14)
});