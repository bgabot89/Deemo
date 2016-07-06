//creates a component named character-list, along with controller and template render
angular.module('character-app').component('characterList', {
  template:
    '<ul>' +
    '<li ng-repeat="character in $ctrl.characters">' +
      '<span>{{character.name}}</span>' +
      '<p>{{character.description}}</p>' +
      '</li>' +
    '</ul>',
  controller: function CharacterListController() {
    this.characters = [
    {
      name: 'Deemo',
      description: 'An enigmatic figure.'
    }, {
      name: 'The Girl',
      description: 'A girl who has lost her memories'
    }
  ];
}
});
