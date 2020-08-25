import { translateExpression } from '../../../translate';

test('one pipe', () => {
    const code = '5+5 |x: x+1 ';
    expect(translateExpression(code)).toBe('(lambda x: x + 1)(5 + 5)');
});

test('several pipe', () => {
    const code = '5+5 |x: x+1 |x: x*x |z: 10';
    expect(translateExpression(code)).toBe('(lambda z: 10)((lambda x: x * x)((lambda x: x + 1)(5 + 5)))');
});
