// import { parseCode, AddSubExpressionTree } from '@xon/ast';

test('simple assign', () => {
    const code = 'a = 5';
    // const tree = parseCode(code, AddSubExpressionTree);
    // const result = getExpressionTranslator(tree).translate();
    expect(code).toBe('a = 5');
});
