import { InstanceMemberExpressionTree } from '@xon/ast';
import { ExpressionTranslator } from '../expression.translator';

export class InstanceMemberExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: InstanceMemberExpressionTree) {
        super();
    }

    translate() {
        return `self.${this.tree.memberName}`;
    }
}
