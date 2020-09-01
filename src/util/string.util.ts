export const EOL = '\n';
export const INDENT_STR = '    ';

export function indent(s: string) {
    return s
        .split('\n')
        .map((x) => INDENT_STR + x)
        .join('\n');
}

export function indentSkipFirst(s: string) {
    return s
        .split('\n')
        .map((x, i) => (i == 0 ? '' : INDENT_STR) + x)
        .join('\n');
}
