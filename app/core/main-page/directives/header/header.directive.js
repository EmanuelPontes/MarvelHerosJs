'use strict'

angular.module('mainPage').directive('mainHeader', function() {
    return {
        restrict: 'E',
        scope: {
            headerData: '=header'
        },
        templateUrl: 'core/main-page/directives/header/header.template.html',
    }
})