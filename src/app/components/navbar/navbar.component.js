import template from './navbar.html';
import controller from './navbar.controller';

let navbarComponent = {
  restrict: 'E',
  template: template,
  controller: controller,
  controllerAs: 'vm'
};

export default navbarComponent;