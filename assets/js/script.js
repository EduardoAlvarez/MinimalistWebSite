$( document ).ready(function(){

	var boxes = $(".second-line .box");
	boxes.click(function(){
		boxes.css('opacity' , '0.4');
		var _self = $(this);
		_self.css("opacity" , '1');
		var texto = $("#"+_self.attr('rel'));
		$(".sky .categoria").each(function(){
			if($(this).attr('id') != _self.attr("rel") && $(this).is(':visible')){
				texto.attr('slow' , "true");
				$(this).slideUp('slow',function(){
					texto.slideDown();
				});		
			}
		});
		if(texto.attr("slow") != "true"){
			texto.slideDown();
		}else{
			texto.attr("slow" , "false");
		}
		console.log(texto.attr("slow"));
	});
});

 