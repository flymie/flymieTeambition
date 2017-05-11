$(function(){
	var like_btns =$('.like_btn'),
		like_btn_control =$(".like_btn_control")
		aUl =like_btn_control.eq(2).find("ul");
		
	like_btns.click(function(){		
		var now = $(this).index(".like_btn");
		like_btns.removeClass('active').eq(now).addClass('active');
		like_btn_control.addClass('hidden').eq(now).removeClass('hidden');
	});
	
	aUl.mouseover(function(){
		aUl.eq($(this).index()).stop();
		var num =0;
		if(num<1){
			aUl.eq($(this).index()).animate({borderLeftWidth:"10px"},"fast",function(){
				aUl.eq($(this).index()).stop();
				num++;
			});
		}		
	});
	aUl.mouseout(function(){
		aUl.eq($(this).index()).stop();
		var num =0;
		if(num<1){
			aUl.eq($(this).index()).animate({borderLeftWidth:"2px"},"fast",function(){
				aUl.eq($(this).index()).stop();
				num++;
			});
		}		
	});
})
