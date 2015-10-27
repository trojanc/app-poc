'use strict';

/**
 * Search Input
 */
var AppMenu = ($mdSidenav, $state) => {
    return {
        restrict: 'E',
        scope: {},
        template: [
            '<md-content>',
            '<md-list>',
            '<md-list-item ng-repeat="item in menuItems">',
            '    <md-button ng-click="openLink(item)" layout="column">{{item.title}}</md-button>',
            '</md-list-item>',
            '</md-list>',
            '</md-content>'
        ].join(''),

        link(scope, el, attrs) {
            scope.menuItems = [{
                title: 'Create Person',
                state: "person"
            }, {
                title: 'View People',
                state: "people"
            }];

            // Opens a linked clicked on the menu
            scope.openLink = function(menuItem) {
                // Async close the given sidenav
                $mdSidenav("left").close();
                $state.go(menuItem.state);
            };

        }
    };
};

AppMenu.$inject = ["$mdSidenav", "$state"];

export default AppMenu;