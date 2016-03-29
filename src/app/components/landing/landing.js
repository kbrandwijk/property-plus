import angular from 'angular';
import uiRouter from 'angular-ui-router';
import landingComponent from './landing.component';

let landingModule = angular.module('landing', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('landing', {
      url: '/landing',
      template: '<landing></landing>'
    });
})

.component('landing', landingComponent);

export default landingModule;
