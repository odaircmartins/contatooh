// public/js/main.js

angular.module('contatooh',['ngRoute','ngResource'])
	.config(function($routeProvider, $httpProvider){

		$routeProvider.when('/auth',{
			templateUrl: 'partials/auth.html'
		});

		$routeProvider.when('/contatos',{
			templateUrl: 'partials/contatos.html',
			controller: 'ContatosController'
		});

		$routeProvider.when('/contato/:contatoId',{
			templateUrl: 'partials/contato.html',
			controller: 'ContatoController'
		});

		$routeProvider.when('/contato',{
			templateUrl: 'partials/contato.html',
			controller: 'ContatoController'
		});

		$routeProvider.otherwise({
			redirectTo: '/contatos'
		});

		$httpProvider.interceptors.push('meuInterceptor');
	});