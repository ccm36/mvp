angular.module('app')
.controller('AppCtrl', function(itemsService) {
  itemsService.getAll((data) => {
    console.log(data);
    this.beers = data;
    this.currentBeer = this.beers[0];
  }),
  this.selectBeer = (beer) => {
    this.currentBeer = beer;
  }
})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});