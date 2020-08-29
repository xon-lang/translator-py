// import { parseCode, AddSubExpressionTree } from '@xon/ast';

import { translateStatement } from '../../../translate';
import { BaseTranslator } from '../../base.translator';

test('simple assign', () => {
    const code = 'a = 5';
    expect(translateStatement(code)).toBe('a = 5');
});

test('several assign', () => {
    BaseTranslator.uniqueCounter = 0;
    const code = 'a,, b,c = 5, ...[1,2,3]';
    expect(translateStatement(code)).toBe(`___id_0 = [5, *[1, 2, 3]]
a = ___id_0[0]
b = ___id_0[2]
c = ___id_0[3]`);
});

test('spread assign', () => {
    BaseTranslator.uniqueCounter = 0;
    const code = 'a, ...b,c = [1,2,3]';
    expect(translateStatement(code)).toBe(`___id_0 = [1, 2, 3]
a = ___id_0[0]
c = ___id_0[-1]
b = ___id_0[1:-1]`);
});
