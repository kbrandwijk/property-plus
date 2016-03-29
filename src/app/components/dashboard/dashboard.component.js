import template from './dashboard.html';
import controller from './dashboard.controller';
import './dashboard.less';

let dashboardComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default dashboardComponent;