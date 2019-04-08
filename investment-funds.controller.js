'use scrtict'

angular.module('investmentFunds')
  .controller('InvestmentFundsController', ['$scope', 'Funds', InvestmentFundsController])

function InvestmentFundsController ($scope, Funds) {
  $scope.funds = Funds.query()
  $scope.selectedClasses = {}
  $scope.selectedManagers = {}
  $scope.range = {
    operability: {
      minimum_initial_application_amount: 100,
      retrieval_quotation_days: 0
    },
    specification: {
      fund_risk_profile: {
        score_range_order: 6
      }
    }
  }

  $scope.isLessThanOrEqualTo = function (actual, expected) {
    actual = Number(actual)

    return (actual <= expected)
  }

  $scope.isInselectedClasses = function (value, index, array) {
    if ($scope.noFilter($scope.selectedClasses)) {
      return true
    }

    return $scope.selectedClasses[value.specification.fund_class]
  }

  $scope.isInselectedManagers = function (value, index, array) {
    if ($scope.noFilter($scope.selectedManagers)) {
      return true
    }

    return $scope.selectedManagers[value.fund_manager.name]
  }

  $scope.noFilter = function (filter) {
    for (let property in filter) {
      if (filter[property] === true) {
        return false
      }
    }

    return true
  }
}
