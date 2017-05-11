$(function(){
	(function(){
		var mod =$(".mod");
		var netLook =$("#net_look");
		var listLook =$('#list_look');
		mod.eq(0).click(function(){
			listLook.addClass("hidden");
			netLook.removeClass("hidden");
		});
		mod.eq(1).click(function(){
			listLook.removeClass("hidden");
			netLook.addClass("hidden");
		});
	})();
})
