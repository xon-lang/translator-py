import { translateProgram } from '../../translate';

test('one_plus_one', () => {
    const code = '1 + 1';
    expect(translateProgram(code)).toBe('1 + 1');
});
