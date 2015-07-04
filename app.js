// [dependencies]
angular.module("app",["ui.router"])
	.config(function config($stateProvider) {
		$stateProvider.state("index",{
			url: "",
			controller: "FirstCtrl as first",
			templateUrl: "templates/first.html"
		})
	})
	.controller("FirstCtrl", function FirstCtrl() {
		var first = this;
		first.divClass ="default";
		first.text = "Test Classes";
	})
