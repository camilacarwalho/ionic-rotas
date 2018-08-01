// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/')

  $stateProvider
  
  .state('home',{
  url: '/home',
  views: {
    home: {
     templateUrl: 'templates/home.html'
      }
     }
  })

  .state('talk',{
    url: '/talk',
    views: {
      talk: {
       templateUrl: 'templates/talk.html'
        }
       }
    })

    .state('lista',{
      url: '/lista',
      views: {
        lista: {
         templateUrl: 'templates/lista.html',
          controller: 'listaCtrl'
          }
         }
      });
})

.controller('listaCtrl', function($scope){
  $scope.lista = [
    {title: "Prova - Metodologia", done: true},
    {title: "Prova - Banco de Dados", done: false},
    {title: "Fase 1 - Projeto POO", done: false},
    {title: "Fase 1 - Projeto BD", done: true},
    {title: "Seminário - PDS", done: false},
  ]

})
