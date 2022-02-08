'use strict'

angular.module('mainPage').directive('herosTable', function() {
    return {
        restrict: 'E',
        scope: {
            heros: '=',
            detail: '&onDetail',
        },
        templateUrl: 'core/main-page/content/directives/herosTable.template.html',
        link: function(scope, element, att) {
            
        }
    }
});