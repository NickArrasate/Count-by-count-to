
$(document).ready(function(){

	$('#button').click(function(event){


		var countBy = $('#countby').val();
		var countTo = $('#countto').val();
		var count = 0;

		if(countBy > countTo){
			alert("please a number larger than the other");
		}else if(countBy === NaN || countTo === NaN){
			alert("number value pls");
		}else if(countBy < 0 || countTo < 0){
			alert("please insert a positive number");
		}else if(countBy === undefined || countTo === undefined){
			alert("please input a value");
		}else{
			$('.display').empty();
			for (i = 1; i < (countTo / countBy) + 1; i++){
				count = countBy * i;
				$('.display').append('<li>' + count + '</li>');
			}
		}
		event.preventDefault();

	});

});
