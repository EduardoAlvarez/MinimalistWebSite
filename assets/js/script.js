$( document ).ready(function(){
	ChangeSkyHeight();
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
		console.log(texto.attr("slow"));
		if(texto.attr("slow") != "true"){
			texto.slideDown();
		}else{
			texto.attr("slow" , "false");
		}
		console.log(texto.attr("slow"));
	});
});

$(window).resize(function() {
	ChangeSkyHeight();
});

function ChangeSkyHeight(){
	var body = $("body");
	var sky = $(".sky");
	var skyTop = sky.position().top;
	var height =	$(window).height();
	sky.css('height'  , (height-skyTop)+5+"px");
}