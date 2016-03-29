import angular from 'angular';

import todoList from './todoList';
import ContractsService from './contracts.service';

export default angular
  .module('app.services', [])
  .service({
    todoList,
    ContractsService
  });
