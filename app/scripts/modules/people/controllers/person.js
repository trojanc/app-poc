'use strict';

/**
 * Search Controller
 */
var PersonCtrl = ($rootScope, $scope, $mdSidenav) => {
    $scope.dummy = "Hello";
    $scope.menuItems = [{
        title : "Test",
        description : "aa"
    },
    {
        title : "Test 1",
        description : "bb"
    }];
    $scope.openLeftMenu = function() {
        $mdSidenav('left').toggle();
    };
};

PersonCtrl.$inject = ['$rootScope', '$scope', '$mdSidenav'];

export default PersonCtrl;