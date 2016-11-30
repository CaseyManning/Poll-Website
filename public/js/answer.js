$(document).ready(function () {

	console.log("We have document ready!");
	$(".mdl-button mdl-js-button mdl-button--raised").on('click', function () {
		console.log("We have answered a poll!");
		location.reload();
	})

	$("#button1").on('click', function () {
		console.log("We have answered a poll!");
		var request = $.ajax({
			method: 'POST',
			url: '/answer',
			data: {
				button: 1
			},
			dataType: 'html', 
		});

	request.done(function (response) {

			location.reload();
			
		});

	request.fail(function (jqXHR, textStatus) {
			//alert(textStatus);
			console.error(textStatus);
		});

	})
	
})
