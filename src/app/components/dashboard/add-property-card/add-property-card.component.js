import template from './add-property-card.html';
import controller from './add-property-card.controller';

let addPropertyCardComponent = {
  restrict: 'E',
  template: template,
  controller: controller,
  controllerAs: 'vm'
};

export default addPropertyCardComponent;