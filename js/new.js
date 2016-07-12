//Creates an angular module called myapp then proceeds to declare a controller who ties in the data, and the directive which will create the html template for the data.
angular.module('myapp', [])
         .controller('characterController', ['$scope', function($scope) {
             $scope.characters = [
                 { name: 'Deemo', info: 'An enigmatic figure who lives in solitude. Proficient in playing the piano.', image: 'images/deemo_icon.png'},
                 { name: 'The Girl', info: 'A girl who has lost her memories', image: 'images/the_girl_icon.png'}
               ];
             $scope.show = 0;
         }])
         .directive('characterHeader', function() {
             return {
                 restrict: 'E', // Element directive
                 scope: { character: '=characterData' },
                 template: '<ul><p>Name: {{character.name}}<br/>Description: {{character.info}}<br/><img ng-src="{{character.image}}"></p></ul>'
         };
     });
