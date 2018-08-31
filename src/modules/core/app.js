(function(){

    angular.module('democracia.controllers', []);
    angular.module('democracia.services', []);


    //module declaration
	var app = angular.module('democracia', 
                             [  'democracia.controllers', 
                                'democracia.services',
                                'ngRoute',
                                'ngAnimate',
                                'ngSanitize',
                                'ui.bootstrap'
                             ]);
                    
    //route provider
    app.config(['$routeProvider', function($routeProvider){

        $routeProvider
        .when('/welcome', {
            templateUrl: 'modules/democracia/welcome.html', 
            controller: 'WelcomeController'
        })
        .when('/voto', {
            templateUrl: 'modules/democracia/voto.html', 
            controller: 'VotoController'
        })

        .when( '/', { redirectTo: '/voto' })
        .otherwise ({ redirectTo: '/welcome' });

    }]);


    //run
    app.run(function() {

    });

}).call(this);