//Creates an angular module called myapp then proceeds to declare a controller who ties in the data, and the directive which will create the html template for the data.
var app = angular.module('myapp', ['ngRoute']);
        //configure routes
        app.config(function($routeProvider, $locationProvider) {
          $routeProvider
          //route for the home page
          .when('/', {
            templateUrl: '../static/partials/home.html',
            controller: 'mainController'
          })
          //route for the story page
          .when('/story', {
            templateUrl: '../static/partials/storyDescription.html',
            controller: 'storyController'
          })
          //route for the character page
          .when('/characters', {
            templateUrl: '../static/partials/characters.html',
            controller: 'characterController'
          })
          //route for the fanart page
          .when('/fanart', {
            templateUrl: '../static/partials/fanart.html',
            controller: 'fanartController'
          })
          //use the HTML5 History API, will remove # from url
          $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
          })
        });
          //creates a controller named mainController and inject Angular's $scope
        app.controller('mainController', function($scope) {
          //creates a message to display in our view
          $scope.message = 'Index Page';
        });
        //creates a controller named storyController and inject Angular's $scope
        app.controller('storyController', function($scope) {
          //creates a message to display in our view
          $scope.message = 'Story!!!';
        });
        //creates a controller named characterController and inject Angular's $scope
        app.controller('characterController', function($scope) {
          //creates a message to display in our view
          $scope.characters = [
                 { name: 'Deemo', info: 'A silent, enigmatic pianist who lives in solitude. ', image: '/static/images/deemo_icon.png'},
                 { name: 'The Girl', info: 'A girl who fell from the sky suffering from amnesia.', image: '/static/images/the_girl_icon.png'},
                 { name: 'The Masked Lady', info: "A masked woman living in Deemo's world. She questions the actions of Deemo and the girl throughout the story.", image: '/static/images/the_maskedlady_icon.png'}
               ];
        });
        //creates a controller named fanartController and inject Angular's $scope
        app.controller('fanartController', function($scope) {
          $scope.galleries = [
            { name: 'Daikazoku63', image: '/static/images/deemo_by_daikazoku63.jpg' },
            { name: 'Sishenfan', image: '/static/images/deemo_by_sishenfan.jpg' },
            { name: 'Ayatoki', image: '/static/images/deemo_by_ayatoki.jpg' },
            { name: 'Sonnyaws', image: '/static/images/deemo_by_sonnyaws.jpg' }
          ];
          $scope.$on('$locationChangeStart',
            function (event, next, current) {
              if (next.indexOf('/static/images') > 0) {
                event.preventDefault();
              }
            });
        });
