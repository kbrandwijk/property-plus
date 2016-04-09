class AddPropertyCardController {
  constructor($http, $auth) {
    "ngInject";

    this.newProperty = {};

    this.contract = {
      // "recordId": 0,
      "schedules": [{
        "description": "string",
        "scheduledAmount": 230,
        "currency": "USD",
        "startDate": "2016-02-04T21:52:12.567Z",
        "endDate": "2017-02-04T21:52:12.567Z",
        "period": 2,
        "paymentDueAdvance": {
          "count": 7,
          "period": 1
        },

      }],
      "endDate": "2016-02-04T21:52:12.569Z",
      "startDate": "2016-02-04T21:52:12.569Z",
      "property": {
        "address": {
          "addressFirstLine": "addressFirstLine",
          "addressSecondLine": "addressSecondLine",
          "addressThridLine": "addressThridLine",
          "county": "2",
          "country": "UK",
          "state": "NA",
          "postCode": "12345"
        },
      },
      "actors": [{
        "relation": 0, // Tennant = 0, LandLord = 1, Agent = 2
        "client": {
          "userId": ""
        }
      }],

    };




    this.addProperty = function() {
      $http.get('http://demoapi03032016.azurewebsites.net/api/Client', { headers: { 'Authorization': 'Bearer ' + $auth.getToken() } })
        .then((response) => {
          var userId = response.data.userId;
          //post contract to serviceBase + 'api/Contracts?relation=' + 'TENANT',
        }
        )
    }
  }
  saveProperty() {

  }
}

export default AddPropertyCardController;