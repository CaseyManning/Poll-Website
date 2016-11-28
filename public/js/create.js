console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");

$(document).ready(function () {

console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");

$("#submit-button").on('click', function () {
	
	console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCC");

	var request = $.ajax({
			method: 'POST',
			url: '/create',
			data: {
				question: $("#question").val(),
				answer1: $("#answer1").val(),
				answer2: $("#answer2").val(),
				answer3: $("#answer3").val(),
				answer4: $("#answer4").val(),
			},
			dataType: 'html', 
		});
	
	console.log("Button is pressed! (DDDDDDDDDDDDDDDDDDD)");

	request.done(function (response) {
			
			//console.log(response);
			
		});

	request.fail(function (jqXHR, textStatus) {
			//alert(textStatus);
			console.error(textStatus);
		});

})

})