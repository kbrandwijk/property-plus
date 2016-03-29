import template from './ribbon.html';
import './ribbon.less';

let ribbonComponent = {
    restrict: 'E',
    template: template,
    bindings: {
        position: '@',
        color: '@',
        size: '@'
    },
    transclude: true
};

export default ribbonComponent;