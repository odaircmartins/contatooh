// config/passport.js

var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function(){

	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy({
		clientID: '5539b7fa1b8a0cecc5a0',
		clientSecret: '87641019567a45f3d07e7b36c30613d68b1f03b9',
		callbackURL: 'http://localhost:3000/auth/github/callback'
	}, function(accessToken, refreshToken, profile, done){
		Usuario.findOrCreate(
			{"login" : profile.username},
			{"nome" : profile.username},
			function(erro,usuario){
				if(erro){
					console.erro(erro);
					return done(erro);
				}

				return done(null, usuario);
			}
		);
	}));

	passport.serializeUser(function(usuario, done){
		done(null, usuario._id);
	});

	passport.deserializeUser(function(id, done){
		Usuario.findById(id).exec()
			.then(function(usuario){
				done(null, usuario);
			});
	});
};