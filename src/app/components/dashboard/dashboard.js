import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './dashboard.component';

import addPropertyCardComponent from './add-property-card/add-property-card.component';
import propertyCardComponent from './property-card/property-card.component';
import loadingCardComponent from './loading-card/loading-card.component';
import ribbonComponent from './ribbon/ribbon.component';
import transactionsGridComponent from './transactions-grid/transactions-grid.component';
import propertyInfoComponent from './property-info/property-info.component';

let dashboardModule = angular.module('dashboard', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      template: '<dashboard></dashboard>',
      resolve: {
        loginRequired: loginRequired
      }
    });
})

.component('dashboard', dashboardComponent)
.component('addPropertyCard', addPropertyCardComponent)
.component('propertyCard', propertyCardComponent)
.component('ribbon', ribbonComponent)
.component('transactionsGrid', transactionsGridComponent)
.component('propertyInfo', propertyInfoComponent)
.component('loadingCard', loadingCardComponent);

function loginRequired($q, $auth, $state) {
  "ngInject";
  var deferred = $q.defer();
  if ($auth.isAuthenticated()) {
    deferred.resolve();
  }
  else {
    $state.go('login');
  }
  return deferred.promise;
}

export default dashboardModule;