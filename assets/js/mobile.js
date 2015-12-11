$( document ).ready(function(){
	var mq = window.matchMedia( "(max-width: 800px)" );
	if(mq.matches){
		var height = window.innerHeight;
		$('.content').css('height' , height+"px")
	}

	$('body').click(function(){
		alert('2');
	})
 	$('body').on({ 'tap' : function(){ alert('1') } });
});
