import { ProgramTree } from '@xon/ast';
import { BaseTranslator } from '../base.translator';
import { DefinitionTranslator } from '../definition/definition.translator';
import { FunctionStatementTranslator } from '../statement/function-statement/function-statement.translator';
import { getStatementTranslator } from '../statement/statement-helper';

export class ProgramTranslator extends BaseTranslator {
    constructor(public tree: ProgramTree) {
        super();
    }

    translate() {
        if (!this.tree.statements.length || !this.tree.statements.length) return '';

        this.scopes.push([]);

        let statements = [];
        let functions = [];
        for (const stmt of this.tree.statements.map(getStatementTranslator)) {
            if (stmt instanceof FunctionStatementTranslator) {
                functions.push(stmt.translate());
            } else {
                statements.push(stmt.translate());
            }
        }

        const definitions = this.tree.definitions
            .map((x) => new DefinitionTranslator(x))
            .map((x) => x.translate());

        let vars = '';
        let export_vars = [];
        let private_vars = [];
        for (const v of this.scopes.pop()) {
            if (v.startsWith('_')) {
                private_vars.push(v);
            } else {
                export_vars.push(v);
            }
        }
        if (export_vars.length) {
            vars += `${export_vars.join(', ')}`;
        }
        if (private_vars.length) {
            vars += `\n${private_vars.join(', ')}`;
        }

        return (
            vars +
            (statements.length ? '\n' : '') +
            statements.join('\n') +
            (functions.length ? '\n\n' : '') +
            functions.join('\n\n') +
            (definitions.length ? '\n\n' : '') +
            definitions.join('\n\n')
        ).trim();
    }
}
