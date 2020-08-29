import { translateExpression } from '../../../translate';

test('if', () => {
    const code = 'if a== 4 && b>5: do()';
    expect(translateExpression(code)).toBe('if a == 4 and b > 5:\n    do()');
});

// test('if else', () => {
//     const code = 'if a== 1 && b>8: do()\nelse: 8+8';
//     console.log(translateExpression(code))
//     expect(translateExpression(code)).toBe('if a == 1 and b > 8:\n    do()\nelse: 8 + 8');
// });
