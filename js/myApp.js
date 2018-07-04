$.backstretch("../images/bg.jpg");
var setActiveLink = $("#topNav").on("click", "a", function () {
    $("#topNav .active").toggleClass("active");
    $this = $(this);
    $this.toggleClass("active");

});
//Angular
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: "homeCtrl"
        })
        .when('/groups', {
            templateUrl: 'partials/groups.html',
            controller: "groupsCtrl"
        })
        .when('/stadiums', {
            templateUrl: 'partials/stadiums.html',
            controller: "stadiumsCtrl"
        })
});

myApp.controller('myAppCtrl', function () {

});
myApp.controller('homeCtrl', function () {
        $(function () {
        $("#preload").fadeOut(2000, function () {
            $("#homeDiv").fadeIn(1000);
        });
    });

});
myApp.controller('groupsCtrl', function () {
    var show = $(".click").on("click", function () {
        $this = $(this);
        $this.siblings(".table:first").toggleClass("show");
    })
});
myApp.controller('stadiumsCtrl', function () {
    var popUpImg = $("#stadiumsContent").on("click", "div", function () {
        $("#stadiumsContent .show").toggleClass("show");
        $this = $(this).find("img");
        $this.toggleClass("show");
    });
});