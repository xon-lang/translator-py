import { translateExpression } from '../../../translate';

test('array', () => {
    const code = "[1+1, 34, 'str']";
    expect(translateExpression(code)).toBe('[1 + 1, 34, """str"""]');
});

test('array spread', () => {
    const code = "[1+1, ...[1,2], 'str']";
    expect(translateExpression(code)).toBe('[1 + 1, *[1, 2], """str"""]');
});
