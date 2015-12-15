$( document ).ready(function(){
	$( window ).resize(function() {
		resize();
	});
	resize();
	function resize(){
		var mq = window.matchMedia( "(max-width: 800px)" );
		if(mq.matches){
			var height = window.innerHeight;
			$('.content').css('height' , height+"px")
		}
	}

});
