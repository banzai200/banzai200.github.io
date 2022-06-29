angular
.module('WeddingSite', [])
.controller('WeddingIndexCtrl',
function ($scope) {
  $scope.remaining_days = moment('2022-07-16').diff(moment(), 'days')+1;
});
