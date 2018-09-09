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
        .when('/proposta', {
            templateUrl: 'modules/democracia/proposta.html', 
            controller: 'PropostaController'
        })

        .when( '/', { redirectTo: '/proposta' })
        .otherwise ({ redirectTo: '/welcome' });

    }]);


    //run
    app.run(function() {

    });

}).call(this);