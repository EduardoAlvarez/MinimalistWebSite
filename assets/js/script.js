$( document ).ready(function(){

	var boxes = $(".second-line .box");
	boxes.click(function(){
		var _self = $(this);
		doAnimation(_self);
		boxes.css('opacity' , '0.4');
		_self.css("opacity" , '1');
	});

	$(document).click(function(e){
		if( $(e.target).closest('.resumo').length == 0  &&
				$(e.target).closest('.second-line').length == 0 &&
				$(e.target).closest('.translate').length == 0
			){
			doAnimation();
		}
	});

	$(".translate .btn-trans").click(function(){
			$(".translate .btn-trans.selected").removeClass('selected');
			$(this).addClass('selected');
	});

});

function doAnimation(_self ){
	var id = "main";
	if(_self != null){
		id = _self.attr('id');
	}

	var text = $("#"+id+"-content").html();
	if($(".resumo-bg").width() != 0 ){
		whiteAnimation();
		$(".resumo-text").html(text);
	}else{
		blackAnimation();
		$(".resumo-text-2").html(text);
	}
}

function whiteAnimation() {
 	$( ".resumo-bg" ).animate({
	    width: 0,
	}, 500, function() {

	});
	$( ".resumo-text-2").animate({
	    width: 0,
	}, 500, function() {

	});
 }

function blackAnimation() {
	$(".resumo-text-2").show();
	$( ".resumo-bg " ).animate({
	    width: "100%",
	}, 500, function() {

	});
	$( ".resumo-text-2").animate({
	    width: "100%",
	}, 500, function() {

	});
 }
