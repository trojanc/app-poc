'use strict';

/**
 * Init
 */

import angular from 'angular';
import appPoc from './app';

angular.element(document).ready(function () {
  angular.bootstrap(document, [appPoc]);
});