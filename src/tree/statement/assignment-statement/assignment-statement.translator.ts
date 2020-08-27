import { AssignmentStatementTree } from '@xon/ast';
import { getExpressionTranslator } from '../../expression/expression-helper';
import { StatementTranslator } from '../statement.translator';

export class AssignmentStatementTranslator extends StatementTranslator {
    constructor(public tree: AssignmentStatementTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.value).translate();
        if (this.tree.singleAssigments.length == 1 && this.tree.arrayAssginments.length == 0) {
            return `${this.tree.singleAssigments[0].name} = ${value}`;
        }

        const valueId = this.getUniqueId();
        let result = `${valueId} = ${value}`;

        for (const item of this.tree.singleAssigments) {
            result += `\n${item.name} = ${valueId}[${item.index}]`;
        }

        for (const item of this.tree.arrayAssginments) {
            result +=
                `\n${item} = ${valueId}` +
                `[${this.tree.startArraysIndex}:${this.tree.endArraysIndex}]`;
        }

        return result;
    }
}
