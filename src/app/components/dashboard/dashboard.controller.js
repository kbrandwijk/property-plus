class DashboardController {
  constructor(ContractsService, uiGmapGoogleMapApi) {
    "ngInject";

    this.ContractsService = ContractsService;
    this.uiGmapGoogleMapApi = uiGmapGoogleMapApi;

    this.className = 'grid-group-item';

    this.ContractsService.getContracts().then(results => {
      this.contractsList = results;
      this.maptemp = [];
      this.contractsList.forEach(con => {
        this.ContractsService.getTransactions(con.recordId).then(result => con.transactions = result);
        con.loc = {
          center: {
            latitude: 51.4924543,
            longitude: -0.1582781
          },
          marker: {
            latitude: 51.4924543,
            longitude: -0.1582781
          },
          zoom: 19
        };
      });
      console.log(this.contractsList);

      this.uiGmapGoogleMapApi.then((maps) => {
        
      });
    });
  }

  toggleView() {
    this.className = this.className === 'grid-group-item' ? 'list-group-item' : 'grid-group-item';
  }

}

export default DashboardController;