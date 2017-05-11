function firstHtml(){
	parent.parent.location.reload(); 
//	history.go(0);
}
	
$(function(){
	(function(){
		$('#chat').removeClass('hidden');
		var aLi =$("#chat_list li");
		var userMark =$('#userMark');
		var liHeight =aLi.eq(0).outerHeight();
		aLi.click(function(e){
			userMark.removeClass("hidden");
			var now =$(aLi).index(this);
			var nowTop =liHeight*now-1;
			userMark.css({"top":nowTop});			
			e.stopPropagation();
		});
		$(document).click(function(){
			userMark.addClass("hidden");
		});
	})();
	
	(function(){
		var aLi =$("#nav_right li");
		var nav_right_control =$(".nav_right_control");
		aLi.click(function(){
			var now =$(this).index();
			nav_right_control.css({"right":"-300px"});
			nav_right_control.addClass('hidden').eq(now).removeClass('hidden');
			nav_right_control.eq(now).animate({"right":0});
		});
	})();
	
	(function(){
		var aP = $("#view form p");
		aP.click(function(){
			var now =$(aP).index(this);
			var dataSpan = parseInt(aP.eq(now).attr("dataSpan"));
			var iSpan ="<span class=" + "'glyphicon glyphicon-ok'" + "></span>";
			if(!dataSpan){
				aP.eq(now).append(iSpan);
				aP.eq(now).attr({"dataSpan":1});
			}
			else{
				aP.eq(now).find("span").remove();
				aP.eq(now).attr({"dataSpan":0});
			}
		});
	})();
	
	(function(){
		var close =$(".close");
		close.click(function(){
			var now =$(close).index(this);
			var par = close.eq(now).parent().parent();
			var parWidth =par.outerWidth();
			parWidth =-1*parWidth;
			par.animate({"right":parWidth});
		});
	})();
})
