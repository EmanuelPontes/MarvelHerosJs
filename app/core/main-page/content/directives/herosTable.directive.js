'use strict'

angular.module('mainPage').directive('herosTable', function() {
    return {
        restrict: 'E',
        scope: {
            heros: '='
        },
        templateUrl: 'core/main-page/content/directives/herosTable.template.html',
    }
});