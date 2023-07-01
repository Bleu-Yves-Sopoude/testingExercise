import { stringLength ,reverseString } from "./string";


test('length', () => {
  const str = 'hello';
  const len = 5;
  expect(stringLength(str)).toBe(len);
});

test('reverse', () => {
    const str = 'hello';
    const rev = 'olleh';
    expect(reverseString(str)).toBe(rev);
  });
