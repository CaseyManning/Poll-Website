$(document).ready(function () {

console.log("We have document ready!")
$(".mdl-button mdl-js-button mdl-button--raised").on('click', function () {
		console.log("We have answered a poll!")
		location.reload();
	})
})
