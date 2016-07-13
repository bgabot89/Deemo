//Define a module called characters
angular.module('character-app', []);

function Ctrl1($scope) {

  $scope.toto= function(){
    alert('toto');
  };

  $scope.titi= function(){
    alert('titi');
  };

}
