$(document).ready(function(){
	
	document.onkeyup = keyCheck;

	$('.operator, .number').click(function(){
		if ($(this).hasClass('equal')){
			// alert("You hit the equal sign!");
			doIt();
	} else if ($(this).hasClass('clear')){
			$('.screen').val('');
	} else
		var currScreenVal = $('.screen').val();
		$('.screen').val(currScreenVal + $(this).val());
	})



	function keyCheck(){
		var keyID = event.keyCode;
		console.log(keyID);
		var currScreenVal = $('.screen').val();
		switch(keyID){
			case 48:
			$('.screen').val(currScreenVal + 0);
				break;
			case 49:
			$('.screen').val(currScreenVal + 1);
				break;
			case 50:
			$('.screen').val(currScreenVal + 2); 
				break;
			case 51:
			$('.screen').val(currScreenVal + 3);
				break;
			case 52:
			$('.screen').val(currScreenVal + 4);
				break;
			case 53:
			$('.screen').val(currScreenVal + 5);
				break;
			case 54:
			$('.screen').val(currScreenVal + 6);
				break;
			case 55:
			$('.screen').val(currScreenVal + 7);
				break;
			case 56:
			$('.screen').val(currScreenVal + 8);
				break;
			case 57:
			$('.screen').val(currScreenVal + 9);
				break;
			case 191:
			$('.screen').val(currScreenVal + '/');
				break;
			case 88:
			$('.screen').val(currScreenVal + '*');
				break;
			case 189:
			$('.screen').val(currScreenVal + '-');
				break;
			case 27:
			$('.screen').val('');
				break;
			case 187:
				//equal sign
				doIt();
				break;
			case 13:
			   //
				doIt();
				break;
			default:
			}

		}


})


function doIt(){
	try{	
		var total = eval($('.screen').val());
	} catch(e){
		console.log(e);
		if(e instanceof SyntaxError){
			alert("ERROR!!! ERROR!!!");
			return;
		}else if ( e instanceof ReferenceError) {
			alert("You have two operators in a row!");
			return;
		}
	}
		console.log(total)

	$('.screen').val(total);
	console.log(total)
	if(total == 42){
		// $('#meaning').animate({left: '2000px'})
		$('#meaning').addClass('move');
	}
}


// 	$(".numOne").click(function(){
// 	var currScreenVal = $('.screen').val();	
//     $('.screen').val(currScreenVal + 1);
//     });
//     $(".numTwo").click(function(){
// 	var currScreenVal = $('.screen').val();	
//     $('.screen').val(currScreenVal + 2);
//     });
//     $(".numThree").click(function(){
// 	var currScreenVal = $('.screen').val();	
//     $('.screen').val(currScreenVal + 3);
//     });
//     $(".numFour").click(function(){
// 	var currScreenVal = $('.screen').val();	
//     $('.screen').val(currScreenVal + 4);
//     });
//     $(".numFive").click(function(){
// 	var currScreenVal = $('.screen').val();	
//     $('.screen').val(currScreenVal + 5);
//     });
//     $(".numSix").click(function(){
// 	var currScreenVal = $('.screen').val();	
//     $('.screen').val(currScreenVal + 6);
//     });
//     $(".numSeven").click(function(){
// 	var currScreenVal = $('.screen').val();	
//     $('.screen').val(currScreenVal + 7);
//     });
//     $(".numEight").click(function(){
// 	var currScreenVal = $('.screen').val();	
//     $('.screen').val(currScreenVal + 8);
//     });
//     $(".numNine").click(function(){
// 	var currScreenVal = $('.screen').val();	
//     $('.screen').val(currScreenVal + 9);
// 	});
// 	$(".numZero").click(function(){
// 	var currScreenVal = $('.screen').val();	
//     $('.screen').val(currScreenVal + 0);

// });