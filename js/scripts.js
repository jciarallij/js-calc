$(document).ready(function(){
	
	document.onkeyup = keyCheck;


	$('button').click(function(){
		console.log(keyCheck);
		var currScreenVal = $('.screen').val();
		if($(this).hasClass('equal')){
			doIt();
		}else if($(this).hasClass('delete')){
			deleteIt();
		}else if($(this).hasClass('clear')){
			$('.screen').val('');
		}else if($(this).hasClass('percentage')){
			$('.screen').val('0.' + currScreenVal);
		}else if($(this).hasClass('decimal') && currScreenVal == 0){
			$('.screen').val('0.');
		}else{
			$('.screen').val(currScreenVal + $(this).val());
		};
	});
	
	function deleteIt(){
		var currScreenVal = $('.screen').val();
		var currScreenValString = currScreenVal.toString();
		var slicedString = currScreenValString.slice(0, currScreenValString.length - 1);
		currScreenVal = Number(slicedString);
		$('.screen').val(currScreenVal);
		if(currScreenVal == 0){
			$('.screen').val('');
		};
	};



	function keyCheck(){
		var keyID = event.keyCode;
		var currScreenVal = $('.screen').val();
		console.log(keyID);
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
			case 107:
			$('.screen').val(CurrScreenVal + '+');
				break;
			case 27:
			$('.screen').val('');
			$('#evil').removeClass('move-two');
			$('#meaning').removeClass('move');
			$('#four-twenty').removeClass('move-three');
			$('#wizard').removeClass('move-four');
			$('.row').removeClass('move-five');
			$('#thug').removeClass('move-six');
				break;
			case 37:
				deleteIt();
				break;
			case 187:
				doIt();
				break;
			case 13:
				doIt();
				break;
			}

		}


});


function doIt(){
	try{	
		var total = eval($('.screen').val());
	} catch(e){
		console.log(e);
		if(e instanceof SyntaxError){
			alert("Error! Numbers are required");
			return;
		}else if ( e instanceof ReferenceError) {
			alert("Error! You have two operators in a row.");
			return;
		}
	}
	$('.screen').val(total);
	console.log(total)
	if(total == 42){
		$('#meaning').addClass('move');
	} else if (total == 666){
		$('#evil').addClass('move-two');
	} else if (total == 420){
		$('#four-twenty').addClass('move-three');
	} else if (total == 10101){
		$('#wizard').addClass('move-four');
	} else if (total == 360){
		$('.row').addClass('move-five');
	} else if (total == 9001){
		$('#thug').addClass('move-six');
	}
};

$('.operator, .number').click(function(){
		if ($(this).hasClass('equal')){
			doIt();
		} 
		else if($(this).hasClass('clear')){
			$('#evil').removeClass('move-two');
			$('#meaning').removeClass('move');
			$('#four-twenty').removeClass('move-three');
			$('#wizard').removeClass('move-four');
			$('.row').removeClass('move-five');
			$('#thug').removeClass('move-six');
			$('.screen').val('');
		}
		 else {
		var currScreenVal = $('.screen').val();
		$('.screen').val(currScreenVal + $(this).val());
	}
		
});
	