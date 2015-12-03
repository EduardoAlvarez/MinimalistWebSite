$( document ).ready(function(){

	var boxes = $(".second-line .box");
	boxes.click(function(){
		
		if($(".resumo-bg").width() != 0 ){
			
			$( ".resumo-bg" ).animate({
			    width: 0,
			}, 500, function() {
				
			});


			$( ".resumo-text-2").animate({
			    width: 0,
			}, 500, function() {
				
			});
			

		}else{
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

		 
		

		boxes.css('opacity' , '0.4');
		var _self = $(this);
		_self.css("opacity" , '1');
		


	});
});

 