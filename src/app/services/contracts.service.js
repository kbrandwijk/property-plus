export default class ContractsService {
    constructor($http, $auth) {
        "ngInject";
        this.$http = $http;
        this.$auth = $auth;
    }
    
    getContracts() {
        return this.$http.get('http://demoapi03032016.azurewebsites.net/api/Contracts', { headers: {'Authorization': 'Bearer ' + this.$auth.getToken()}}).then(results => results.data);
    }
    
    getTransactions(contractID) {

        return this.$http.get('http://demoapi03032016.azurewebsites.net/api/Transaction?contractId=' + contractID, { headers: {'Authorization': 'Bearer ' + this.$auth.getToken()}}).then(results => results.data);
    }
}