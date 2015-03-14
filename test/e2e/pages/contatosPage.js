// test/e2e/pages/contatoPage.js

var contatoPage = function(){

	this.visitar = function(){
		browser.get('http://localhost:3000/#/contatos');
	};

	this.obterUsuarioLogado = function(){
		return element(by.id('usuario-logado')).getText();
	}

	this.obterTotalDeItensDaLista = function(){
		return  element.all(by.repeater('contato in contatos')).count();
	}

	this.removerPrimeiroItemDaLista = function(){
		element(by.repeater('contato in contatos').row(0))
			.element(by.css('.btn'))
			.click();
	};
}

module.exports = contatoPage;