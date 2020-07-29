import helloWorld from '../modules/helloWorld';

test('should return "Hello Wolrd!" not given any string', () => {
  expect(helloWorld()).toBe('Hello World!');
});

test('should return given string when given a specif string', () => {
  expect(helloWorld('First test done!')).toBe('First test done!');
});
