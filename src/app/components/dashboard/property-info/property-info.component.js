import template from './property-info.html';

let propertyInfoComponent = {
  restrict: 'E',
  template: template,
  bindings: { property: '<' }
};

export default propertyInfoComponent;