import angular from 'angular';
import uiRouter from 'angular-ui-router';
import landingComponent from './landing.component';
import aboutUsComponent from './aboutus.component';
import termsOfUseComponent from './termsofuse.component';

let contentPagesModule = angular.module('contentPages', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('landing', {
      url: '/',
      template: '<landing></landing>'
    })
    .state('aboutus', {
      url: '/aboutus',
      template: '<aboutus></aboutus>'
    })
    .state('terms', {
      url: '/terms',
      template: '<terms></terms>'
    });
})

.component('landing', landingComponent)
.component('aboutus', aboutUsComponent)
.component('terms', termsOfUseComponent);

export default contentPagesModule;
