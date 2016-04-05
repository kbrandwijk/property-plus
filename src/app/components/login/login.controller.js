export default class LoginCtrl {
  constructor($location, $auth, toastr, $state, $http) {
    "ngInject";

    this.login = function(usr) {
      $auth.login("username=" + usr.email + "&password=" + usr.password + "&grant_type=password&client_id=defaultWeb")
        .then(function() {
          //toastr.success('You have successfully signed in!');
          $state.go('dashboard');
        })
        .catch(function(error) {
          toastr.error(error.data.message, error.status);
        });
    };

    this.signup = function() {
      $auth.signup({
          userName: this.newuser.UserName,
          password: this.newuser.Password,
          confirmPassword: this.newuser.ConfirmPassword
        })
        .then(() => $auth.login("username=" + this.newuser.UserName + "&password=" + this.newuser.Password + "&grant_type=password&client_id=defaultWeb")
          .then(() => $http.get('http://demoapi03032016.azurewebsites.net/api/Client', { headers: {'Authorization': 'Bearer ' + $auth.getToken()}})
            .then((response) => {
              $http.put('http://demoapi03032016.azurewebsites.net/api/Client', {
                userId: response.data.userId,
                firstName: this.newuser.FirstName,
                lastName: this.newuser.LastName,
                contact: [{
                  address: {
                    addressFirstLine: this.newuser.AddressLine1,
                    addressSecondLine: this.newuser.AddressLine2,
                    addressThridLine: this.newuser.AddressLine3,
                    postCode: this.newuser.postCode,
                    country: 'UK'
                  },
                  emailAddress: this.newuser.UserName,
                }]
              }).then(() => $state.go('dashboard'));
            })
          )
        );
    };

    this.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function() {
          //toastr.success('You have successfully signed in with ' + provider + '!');
          $state.go('dashboard');
        })
        .catch(function(error) {
          if (error.error) {
            // Popup error - invalid redirect_uri, pressed cancel button, etc.
            toastr.error(error.error);
          }
          else if (error.data) {
            // HTTP response error from server
            toastr.error(error.data.message, error.status);
          }
          else {
            toastr.error(error);
          }
        });
    };
  }
}