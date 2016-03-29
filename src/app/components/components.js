import angular from 'angular';

import Login from './login/login';
import About from './about/about';
import Dashboard from './dashboard/dashboard';
import Landing from './landing/landing';

export default angular
  .module('app.components', [
    Login.name,
    About.name,
    Dashboard.name,
    Landing.name
  ]);