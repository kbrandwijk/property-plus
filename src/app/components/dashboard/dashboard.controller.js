class DashboardController {
  constructor(ContractsService) {
    "ngInject";

    this.ContractsService = ContractsService;

    this.className = 'grid-group-item';

    this.loading = true;

    this.ContractsService.getContracts().then(results => {
      this.contractsList = results;
      this.maptemp = [];
      this.contractsList.forEach(con => {
        this.ContractsService.getTransactions(con.recordId).then(result => con.transactions = result);
        con.loc = { center: { latitude: 51.4924543, longitude: -0.1582781 } };
      });
      this.loading = false;
    });
  }
}

export default DashboardController;