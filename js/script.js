$(function(){ 

	// gradien text
	if ($(window).width() > 400) {
   	$(".gradient-01").pxgradient({ 
		  step: 20, 
		  colors: ["#e9374b","#fd6020"], 
		  dir: "x" 
		});
   }

});