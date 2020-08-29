// import { parseCode, AddSubExpressionTree } from '@xon/ast';

import { FunctionTree, parseCode } from '@xon/ast';
import { FunctionTranslator } from './function.translator';

test('function', () => {
    const code = 'do (a): 1+1';
    const tree = parseCode(code, FunctionTree);
    const result = new FunctionTranslator(tree).translate();
    expect(result).toBe('def do (a):\n    1 + 1');
});
