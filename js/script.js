
/* 
Author: Danko Milutinovic
Desctiption: Stylesheet for the ШКОЛА ИГРОВОЙ ЛОГОПЕДИИ
Contact:  
        http://danko-m.github.io/ ,
        dankomilutinovic@gmail.com, 
        https://rs.linkedin.com/pub/danko-milutinovic/a3/675/778         
*/

$(function(){ 

	// preload images for hover effect on main page
	$.preloadImages = function() {
	  for (var i = 0; i < arguments.length; i++) {
	    $("<img />").attr("src", arguments[i]);
	  }
	};

	$.preloadImages("img/video-player-mask-hover.jpg","img/inst-02-hover.jpg");


});