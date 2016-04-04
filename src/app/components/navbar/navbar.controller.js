class NavbarController {
    constructor($auth, $state) {
        "ngInject";
        
        this.$auth = $auth;
        this.$state = $state;
    }

    isAuthenticated() {
        return this.$auth.isAuthenticated();
    }

    logout() {
        if (!this.$auth.isAuthenticated()) {
            return;
        }
        this.$auth.logout()
            .then(() => {
                this.$state.go('landing');
            });
    }
}

export default NavbarController;