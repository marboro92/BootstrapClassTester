// [dependencies]
angular.module("app",["ui.router"])
	.config(function config($stateProvider) {
		$stateProvider.state("index",{
			url: "",
			controller: "FirstCtrl as first",
			templateUrl: "templates/first.html"
		})
		$stateProvider.state("second",{
			url: "/second",
			controller: "SecondCtrl as second",
			templateUrl: "templates/second.html"
		})
	})
	.service("text", function text(){
		var text = this;
		text.message = "Hello";
	})
	.controller("FirstCtrl", function FirstCtrl(text) {
		var first = this;
		first.divClass ="default";
		first.text = text;
		first.reversedText = function(text) {
			return text.split("").reverse().join("");
		};
	})
	.controller("SecondCtrl", function SecondCtrl(text) {
		var second = this;
		second.divClass ="secondDefault";
		second.text = text;
	})
