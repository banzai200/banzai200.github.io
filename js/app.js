angular
.module('WeddingSite', [])
.controller('WeddingIndexCtrl',
function ($scope) {
  $scope.remaining_days = moment('2015-12-06').diff(moment(), 'days')+1;
});
