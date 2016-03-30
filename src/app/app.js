import angular from 'angular';
import uiRouter from 'angular-ui-router';
import authConfig from 'satellizer';
import Components from './components/components';
import Services from './services/services';
import AppComponent from './app.component';
import AuthConfig from './app.authConfig';
import NavBarComponent from './components/navbar/navbar.component';

import 'tether/dist/js/tether';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './sticky-footer-navbar.less';
import 'normalize.css';

angular.module('app', [
  authConfig,
  uiRouter,
  Components.name,
  Services.name
])

.config(AuthConfig)

.component('app', AppComponent)
.component('navbar', NavBarComponent);
