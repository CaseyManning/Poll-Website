$(document).ready(function () {

$("#submit").on('click', function () {
	
	var request = $.ajax({
			method: 'POST',
			url: '/adduser',
			data: {
				username: $("#username").val(),
				password: $("#password").val(),
				email: $("#email").val(),
			},
			dataType: 'html' 
		});
	
	console.log("Create user button is pressed");

	request.done(function (response) {
			
			console.log(response);
			
		});

	request.fail(function (jqXHR, textStatus) {
			//alert(textStatus);
			console.error(textStatus);
		});

});

});