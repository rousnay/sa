//VIP option

var checkVIP = function(){
	if ($('header.site-header .bar-VVIP').length > 0) { 
		console.log("I'm a VVIP Customer!");

		$("body").addClass('customer_vvip');

		$('a[href*="products"]').each(function(){
		var oldUrl = $(this).attr("href"); // Get current url 
		var lookVip = oldUrl.includes("vip-"); //check if any vip link exist
		if (lookVip != true){
			    var newUrl = oldUrl.replace("products/", "products/vip-"); // Create new url
			    $(this).attr("href", newUrl); // Set herf value
			}
		});

	} else{
		console.log("I'm a general customer.");
	}

	var d = new Date();
	var t = d.toLocaleTimeString();
	console.log(t);
}

var checkVIPint = setInterval(function(){
	checkVIP();
}, 3000);

setTimeout( function(){ 
	clearInterval(checkVIPint);
	console.log("completed");
}  , 10000 );