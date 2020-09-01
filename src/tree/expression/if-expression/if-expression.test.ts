import { translateExpression } from '../../../translate';

test('if', () => {
    const code = 'if a== 4 && b>5: do()';
    expect(translateExpression(code)).toBe('if a == 4 and b > 5:\n    do()');
});

test('if else', () => {
    const code = 'if a== 4 && b>5: do() elif 44: dodo() else: 77';
    expect(translateExpression(code)).toBe(
        `
if a == 4 and b > 5:
    do()
elif 44:
    dodo()
else:
    77
`.trim()
    );
});
