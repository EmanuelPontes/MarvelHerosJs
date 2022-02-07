'use strict';

angular.module('servicesModule').service(
    'heroesService', ["$http", "md5", function($http, md5) {

        var timeStamp = Date.now();
        var pubKey = '5a237863b3cc2061003cbbc4fe20dc06';
        var priKey = 'fbf255068eccea6d0ef951b9f25626b57ab2fe72';
        var hash = md5.createHash(timeStamp.toString() + priKey + pubKey)

        var getParams = {
            apikey: pubKey,
            ts:  timeStamp,
            hash: hash
        }

        var service = {
            
            getAll: function() {
                return $http.get('http://gateway.marvel.com/v1/public/characters',{
                    params: getParams
                });
            },
            getByName: function(name) {
                return $http.get('http://gateway.marvel.com/v1/public/characters',{
                    params: {...getParams,...{nameStartsWith: name}}
                });
            },

            getById: function(id) {
                return $http.get(`http://gateway.marvel.com/v1/public/characters/${id}`,{
                    params: getParams
                });
            }
        }

        return service;
    }]
)