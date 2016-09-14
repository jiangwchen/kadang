



/*****左右转换********/
/*(function($){
	$(window).scroll(function(){
		var $subNav =$("#subnav");
		var $subNavLi = $subNav.find("li");
		var $floorNav = $("#floor-nav");
		var $navLi = $floorNav.find("li");
		var $div = $(".goodsTab .gt_tab");
		var navTop = $subNav.offset().top;
		var scrolltop = $(this).scrollTop();
		//var i=0;
		//图片上背景层的显示和隐藏;
		var $content = $(".goodsTab .gt_first li");
		$content.hover(function(){
			$(this).find(".bg_layer").show(100);
		},function(){
			$(this).find(".bg_layer").hide(100);
		});
		//显示已收藏还是加入收藏
		var $append  = $content.find(".bg_layer").children("a");
		$append.click(function(){
			$(this).html("已收藏,查看我的收藏");
			return false;
		})
		//console.log(navTop,scrolltop,floorH);
		console.log(scrolltop,navTop);
		if(scrolltop>=navTop){
			$floorNav.css({"display":"block"});
		}else{
			$floorNav.css({"display":"none"});
		}
		//固定nav点击事件
		$subNavLi.click(function(){
			$(this).find('a').addClass("active").end().siblings().find("a").removeClass("active");
			var index = $(this).index();
			   // i = index;
			$div.eq(index).addClass("gt_first").show().siblings().removeClass("gt_first").hide();
			$("html,body").stop().animate({"scrollTop":navTop},50);
		});
		//$navLi.eq(i).find("a").addClass("active").end().siblings().find("a").removeClass("active");
		$navLi.click(function(){
			$(this).find('a').addClass("active").end().siblings().find("a").removeClass("active");
			var index = $(this).index();
			   // i=index;
			$div.eq(index).addClass("gt_first").show().siblings().removeClass("gt_first").hide();
			$("html,body").stop().animate({"scrollTop":navTop},50);
		});
		//$subNavLi.eq(i).find("a").addClass("active").end().siblings().find("a").removeClass("active");
		$navLi.hover(function(){
			$(this).find('a').addClass("cur").end().siblings().find("a").removeClass("cur");
		},function(){
			$(this).find('a').removeClass("cur");
		});
		
		
	
	});
	
	
})(jQuery)*/

;(function($){
	$(window).scroll(function(){
		var $subNav =$("#subnav");
		var $subNavLi = $subNav.find("li");
		var $floorNav = $("#floor-nav");
		var $navLi = $floorNav.find("li");
		var $div = $(".goodsTab .gt_tab");
		var navTop = $subNav.offset().top;
		var scrolltop = $(this).scrollTop();
		//var i=0;
		//图片上背景层的显示和隐藏;
		var $content = $(".goodsTab .gt_first li");
		$content.hover(function(){
			$(this).find(".bg_layer").show(100);
		},function(){
			$(this).find(".bg_layer").hide(100);
		});
		//显示已收藏还是加入收藏
		var $append  = $content.find(".bg_layer").children("a");
		$append.click(function(){
			$(this).html("已收藏,查看我的收藏");
			return false;
		})
		//console.log(navTop,scrolltop,floorH);
		//console.log(scrolltop,navTop);
		if(scrolltop>=navTop){
			$floorNav.css({"display":"block"});
		}else{
			$floorNav.css({"display":"none"});
		}
		//显示数据span
//		var span = $(".fix-nav .cook");//显示数据的span标签;
//		var aLi = $div.eq(0).find(".bg_layer").children("a");
//		var span_text = span.html(cookieUntil.getCookie("count"));
//		//console.log(span_text)
//		 var  count = cookieUntil.getCookie("count");
//			aLi.click(function(){
//					count++;	
//					cookieUntil.setCookie("count",count,7);
//					span.show().html(cookieUntil.getCookie("count"));
//			})
		//固定nav点击事件
		$navLi.click(function(){
			$(this).find('a').addClass("active").end().siblings().find("a").removeClass("active");
			var index = $(this).index();
			$subNavLi.eq(index).find("a").addClass("active").end().siblings().find("a").removeClass("active");
			$div.eq(index).addClass("gt_first").show().siblings().removeClass("gt_first").hide();
			$("html,body").stop().animate({"scrollTop":navTop},50);
		//添加购物车
			var aLi = $div.eq(index).find(".bg_layer").children("a");
			var  count = cookieUntil.getCookie("count");
				aLi.click(function(){
					count++;	
					cookieUntil.setCookie("count",count,7);
					span.show().html(cookieUntil.getCookie("count"));
				})				
		});
		$subNavLi.click(function(){
			$(this).find('a').addClass("active").end().siblings().find("a").removeClass("active");
			var index = $(this).index();
			$navLi.eq(index).find("a").addClass("active").end().siblings().find("a").removeClass("active");
			$div.eq(index).addClass("gt_first").show().siblings().removeClass("gt_first").hide();
			$("html,body").stop().animate({"scrollTop":navTop},50);
		});
		
		$navLi.hover(function(){
			$(this).find('a').addClass("cur").end().siblings().find("a").removeClass("cur");
		},function(){
			$(this).find('a').removeClass("cur");
		});
	});
	
	
})(jQuery);
$(function(){
;(function($){
	$.get("js/list.txt",function(data){
		var box = $("#hello");
		var oData = eval(data);
		oData.forEach(function(item){
			//console.log(item.img1)
			var oli = $("<li></li>");
			oli.appendTo(box);
			var oimgDiv = $("<a href='list-page.html' title =" +item.title+"></a>");
			oimgDiv.appendTo(oli);
			var oimg = $("<img src="+item.img1+"/>");
			oimg.appendTo(oimgDiv);
			var oDiv = $("<div class = 'bg_layer'></div>");
			oDiv.appendTo(oli);
			var a1 = $("<a href='javascript:;'>加入收藏</a>").attr("tianjia",item.id);
			a1.prependTo(oDiv);
			var span1 = $("<span class='iconfont'>&#xe60f;</span>");
			span1.prependTo(a1);
			var i = $("<i>去看看</i>");
			i.appendTo(oDiv);
			var aimg = $("<img class='side-header' src="+item.img2+"/>");
			aimg.appendTo(oli);
			var s = $("<s>"+item.delect+"</s>");
			s.appendTo(oli);
			var span2 = $("<span class='prince'>￥</span>");
			span2.appendTo(oli);
			var b = $("<b>"+item.prince+"</b>");
			b.appendTo(span2);
			var a2 = $("<a href='#'>"+item.conment+"</a>");
			a2.appendTo(span2);
			var op = $("<p>"+item.theme+"</p>");
			op.appendTo(oli);
			a1.click(function(){
				var id = $(this).attr("tianjia");
				//console.log(id)
				cookieUntil.setCookie(item.id,"1",7);
				//window.location.href = "shopping.html?="+id;
				
			var span_show = $(".fix-nav .cook");//显示数据的span标签
			 span_show.html(cookieUntil.getCookie("count"));
		 	var  count = cookieUntil.getCookie("count");
					count++;	
					cookieUntil.setCookie("count",count,7);
					span_show.show().html(cookieUntil.getCookie("count"));

			})
		})
	});

})(jQuery)

})







