import template from './transactions-grid.html';
import './transactions-grid.less';

let transactionsGridComponent = {
    restrict: 'E',
    template: template,
    bindings: {
        transactions: '<'
    }
};

export default transactionsGridComponent;