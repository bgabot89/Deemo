//Creates an angular module called myapp then proceeds to declare a controller who ties in the data, and the directive which will create the html template for the data.
var app = angular.module('myapp', []);
         app.controller('characterController', ['$scope', function($scope) {
             $scope.characters = [
                 { name: 'Deemo', info: 'An enigmatic figure who lives in solitude. Proficient in playing the piano.', image: 'images/deemo_icon.png'},
                 { name: 'The Girl', info: 'A girl who has lost her memories', image: 'images/the_girl_icon.png'}
               ];
             $scope.galleries = [
               { name: 'Daikazoku63'},
               { name: 'Sishenfan'},
               { name: 'Sonnyaws'}
             ];
            //Gives the show a numeric operator, in this case 0, so when the page renders it will show nothing.
             $scope.show = 0;
         }])
         app.directive('characterHeader', function() {
             return {
                 restrict: 'E', // Element directive
                 scope: { character: '=characterData' },
                 template: '<ul><p>Name: {{character.name}}<br/>Description: {{character.info}}<br/><img ng-src="{{character.image}}"></p></ul>'
         };
         });
