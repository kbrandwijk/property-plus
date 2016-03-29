import template from './landing.html';
import controller from './landing.controller';

let landingComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default landingComponent;
