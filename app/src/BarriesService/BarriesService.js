angular
  .module('PokemonApp')
  .factory('BarriesService', function($resource, $http) {

    return $resource('https://api.backendless.com/43506E67-2175-5CD0-FF6E-2AAE8BD61400/A8A15CA6-5FF7-AEA6-FF18-E718261B1B00/data/Barries',
      { barrieId: '@barrieId' }, {
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function(responseData) {
          console.log(angular.fromJson(responseData));

          return angular.fromJson(responseData);
        }
      },
      update: {
        method: 'PUT'
      }
    })
  });
