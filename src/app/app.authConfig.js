export default function authConfig($authProvider) {
    "ngInject";

    $authProvider.loginUrl = 'http://demoapi03032016.azurewebsites.net/token';
    $authProvider.tokenName = 'access_token';
    $authProvider.httpInterceptor = false;
    $authProvider.signupUrl = 'http://demoapi03032016.azurewebsites.net/api/account/register';

    $authProvider.oauth2({
        name: 'propertyplus',
        clientId: 'MTCEJ3NGW2PNNB31WOSBFDSAD4MTHYVAZ1UKIULXZ2CVFC2K',
        redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
        authorizationEndpoint: 'http://demoapi03032016.azurewebsites.net/token'
    });
}
