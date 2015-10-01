var fs = require('fs');
var pkg = require('../package.json');

module.exports = {
    banner: '/*!\n' +
    ' * ngCordova\n' +
    ' * v' + pkg.version +'\n' +
    ' * Copyright 2015 Drifty Co. http://drifty.com/\n' +
    ' * See LICENSE in this repository for license information\n' +
    ' */\n',

    closureStart: '(function(angular){\n',
    closureEnd: '\n})(angular);',

    dist: 'dist',

    appFiles: [
        'www/js/**/*.js'
    ],

    versionData: {
        version: pkg.version
    }
};