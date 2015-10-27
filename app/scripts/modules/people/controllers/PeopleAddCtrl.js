'use strict';

/**
 * Search Controller
 */
var PeopleAddCtrl = ($scope, Person, $mdToast) => {

    // Create a new person that will be populated with the form
    $scope.person = new Person();

    $scope.create = function() {
        $scope.person.$save(function() {
            $mdToast.show(
                $mdToast.simple()
                .content('Person created')
                .position('bottom')
                .hideDelay(3000)
            );
        });
    };

};

PeopleAddCtrl.$inject = ["$scope", "Person", "$mdToast"];

export default PeopleAddCtrl;