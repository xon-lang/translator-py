// import { parseCode, AddSubExpressionTree } from '@xon/ast';

import { FunctionTree, parse } from '@xon/ast';
import { FunctionTranslator } from './function.translator';

test('function', () => {
    const code = 'do (a): 1+1';
    const tree = new FunctionTree(parse(code).function());
    const translator = new FunctionTranslator(tree);
    expect(translator.translate()).toBe('def do (a):\n    1 + 1');
});
