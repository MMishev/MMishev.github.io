var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function($routeProvider){
    $routeProvider
        .when('/', {templateUrl: 'partials/home.html',controller:"homeCtrl"})
        .when('/#groups', {templateUrl: 'partials/groups.html',controller:"groupsCtrl"})
        .when('/#stadiums', {templateUrl: 'partials/stadiums.html',controller:"stadiumsCtrl"})
});

myApp.controller('myAppCtrl',function(){

});
myApp.controller('homeCtrl',function(){

});
myApp.controller('groupsCtrl',function(){

});
myApp.controller('stadiumsCtrl',function(){

});