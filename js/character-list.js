//creates a component named character-list, along with controller and template render
angular.module('character-app')
.component('characterList', {
  template:
    '<ul>' +
    '<li ng-repeat="character in $ctrl.characters">' +
      '<img ng-src="{{character.image}}">' + '<br>' +
      '<span>{{character.name}}</span>' + '<br>' +
      '<p>{{character.description}}</p>' +
      '</li>' +
    '</ul>',
  controller: function CharacterListController() {
    this.characters = [
    {
      name: 'Deemo',
      description: 'An enigmatic figure who lives in solitude. Proficient in playing the piano.',
      image: 'images/deemo_icon.png'
    }, {
      name: 'The Girl',
      description: 'A girl who has lost her memories',
      image: 'images/the_girl_icon.png'
    }
  ];
}
});
