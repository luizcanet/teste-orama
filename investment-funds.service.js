'use sctrict'

angular.module('investmentFunds').factory('Funds', ['$resource',
  function ($resource) {
    let resourceBase = 'https://s3.amazonaws.com/orama-media/json/'

    return $resource(`${resourceBase}fund_detail_full.json`, {}, {
      query: {
        method: 'GET',
        params: {
          limit: 100,
          offset: 0,
          serializer: 'fund_detail_full'
        },
        isArray: true
      }
    })
  }
])
