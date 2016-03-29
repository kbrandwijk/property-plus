import template from './property-card.html';
import './property-card.less';

let propertyCardComponent = {
  restrict: 'E',
  template: template,
  bindings: { contract: '<' }
};

export default propertyCardComponent;