import { translateExpression } from '../../../translate';

test('lambda', () => {
    const code = '\\x,y,z: x+y+z';
    const result = translateExpression(code);
    expect(result).toBe('lambda x, y, z: x + y + z');
});
