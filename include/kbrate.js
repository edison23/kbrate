// this allows user to rate photos by keyboard

function showNotice(code, stars) {
	if (code == -1) {
		var message = 'You attempted to rate the photo higher than this gallery allows. Maximum rating is ' + stars + '.';
	}
	else {
		// stars += 1; // in case we want to show user the actual score assigned, not the number what's in the stars title
		var message = 'You have rated the photo with ' + stars + ' stars.';
	}
	// check if the message element already exists; if not, append it, else just replace its content
	if ($("#ratingMessage").length > 0) {
		$("#ratingMessage").html(message);
	} 
	else {
		$("#imageHeaderBar").append('<div id="ratingMessage" style="margin: auto; width: 30vw; text-align: center; padding: 0.5em; z-index: 999;">' + message + '</div>');
	}
}

var charCode2stars = {48: 0, 49: 1, 50: 2, 51: 3, 52: 4, 53: 5, 54: 6, 55: 7, 56: 8, 57: 9}

$(window).bind("keypress", function(event) {
	
	var confStars = $("#rateForm>div").children();
	console.log('confstars: ' + confStars);
	var kbCharCode = event.charCode;
	var stars = charCode2stars[kbCharCode]

	if (kbCharCode in charCode2stars) {
		if (stars <= confStars.length) {
			$("input[title='" + stars + "']").click();
			console.log("You have pressed key with keycode " + kbCharCode + " and thus rated the photo with " + stars + " stars.");
			showNotice(kbCharCode, stars);}
		else {
			showNotice(-1, confStars.length);
		};	
	}
	else {
		console.log(kbCharCode);
	}

	// switch (kbCharCode) {
	// 	case 48:
	// 		$("input[title='0']").click();
	// 		console.log("You have pressed key with keycode " + kbCharCode + " and thus rated the photo with 0 stars.");
	// 		showNotice(kbCharCode, 0);
	// 		break;
	// 	case 49:
	// 		$("input[title='1']").click();
	// 		console.log("You have pressed key with keycode " + kbCharCode + " and thus rated the photo with 1 stars.");
	// 		showNotice(kbCharCode, 1);
	// 		break;
	// 	case 50:
	// 		$("input[title='2']").click();
	// 		console.log("You have pressed key with keycode " + kbCharCode + " and thus rated the photo with 2 stars.");
	// 		showNotice(kbCharCode, 2);
	// 		break;
	// 	case 51:
	// 		$("input[title='3']").click();
	// 		console.log("You have pressed key with keycode " + kbCharCode + " and thus rated the photo with 3 stars.");
	// 		showNotice(kbCharCode, 3);
	// 		break;
	// 	case 52:
	// 		$("input[title='4']").click();
	// 		console.log("You have pressed key with keycode " + kbCharCode + " and thus rated the photo with 4 stars.");
	// 		showNotice(kbCharCode, 4);
	// 		break;
	// 	case 53:
	// 		$("input[title='5']").click();
	// 		console.log("You have pressed key with keycode " + kbCharCode + " and thus rated the photo with 5 stars.");
	// 		showNotice(kbCharCode, 5);
	// 		break;
	// }
});