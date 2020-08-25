import { translateExpression } from '../../../translate';
import { BaseTranslator } from '../../base.translator';

test('loop infinity', () => {
    const code = 'loop: 1+1';
    const result = translateExpression(code);
    expect(result).toBe('while True:\n    1 + 1');
});

test('loop expression', () => {
    BaseTranslator.uniqueCounter = 0;
    const code = 'loop 5+5: 1+1';
    const result = translateExpression(code);
    expect(result).toBe(`___id_0 = 0
for ___id_2 in 5 + 5:
    ___id_0++
    1 + 1`);
});

test('loop value in', () => {
    BaseTranslator.uniqueCounter = 0;
    const code = 'loop x in 5+5: x+x';
    const result = translateExpression(code);
    expect(result).toBe(`___id_0 = 0
for x in 5 + 5:
    ___id_0++
    x + x`);
});

test('loop key in', () => {
    BaseTranslator.uniqueCounter = 0;
    const code = 'loop val, key in 5+5: val+val';
    const result = translateExpression(code);
    expect(result).toBe(`___id_0 = 0
for val in 5 + 5:
    ___id_0++
    val + val`);
});

test('loop index in', () => {
    BaseTranslator.uniqueCounter = 0;
    const code = 'loop val,,i  in 5+5: val+val';
    const result = translateExpression(code);
    expect(result).toBe(`i = 0
for val in 5 + 5:
    i++
    val + val`);
});
