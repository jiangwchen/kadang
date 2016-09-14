


$(window).ready(function(){
	
/**f-container-top ---left--二级菜单**/
(function($){
			var $aLi = $(".fc-left .fc-left-b ul li");
			$aLi.hover(function(){
				$(this).addClass("active").siblings().removeClass('active');
			},function(){
				$(this).removeClass("active")
			})
/**二级菜单**/
			var $aMenu = $aLi.find("div").children("a");
			$aMenu.hover(function(){
				$(this).addClass("on").siblings().removeClass('on');
			},function(){
				$(this).removeClass("on");
			})	
	})(jQuery)
/*****轮播图******/	

;(function($){
		var $parent = $("#fc-mid");
		var $aUl = $("#fc-mid .lunbo");
		var $aLLi = $aUl.find('li'),
			$boLi = $("#fc-mid .bottom").find("li"),
			$prev = $("#fc-mid .prev"),
			$next = $("#fc-mid .next"),
			$btn = $("#fc-mid .btn"),
		    timer = null,
		    i = 0;
		    $boLi.eq(0).addClass("cur");
		timer = setInterval(move,3000);
		$aLLi.eq(0).css("z-index","1");
		$parent.mouseenter(function(){
			//console.log("a")
			$prev.css("display","block").animate({"left":"20px"},500);
			$next.css("display","block").animate({"right":"20px"},500);
		});
		$parent.mouseleave(function(){
			$prev.css({"display":"none","left":"100px"});
			$next.css({"display":"none","right":"100px"});
			//$btn.css("display","none")
		});
		$btn.hover(function(){
			$btn.css("opacity","1");
		},function(){
			$btn.css("opacity","0.4")
		})
		$aUl.hover(function(){
			clearInterval(timer);
		},function(){
			timer= setInterval(move,3000);
		});
		$boLi.click(function(){
			clearInterval(timer);
			 i = $(this).index() - 1;
			 move()
			timer = setInterval(move,3000);
		});
		$prev.click(function(){
			clearInterval(timer);
			 i= i- 2;
			move();
			 timer =  setInterval(move,3000);
		});
		$next.click(function(){
			clearInterval(timer);
			 i;
			 move();
			 timer =  setInterval(move,3000);
		});
		function move(){
			i++;
			i = i > $aLLi.length -1 ? 0 : i;
			i = i < -1 ? $aLLi.length -2 : i;
			//console.log(i);
			$aLLi.eq(i).stop().animate({
				"opacity":1
			},500).addClass("active")
				.siblings().stop().animate({
					"opacity":0
				},500).removeClass("active");	
			$boLi.eq(i).css("background","rgb(222,84,41)").siblings().css("background","rgb(117,117,117)");
			}
})(jQuery)
/*****楼层开始*******/	
;(function($){
	$(window).scroll(function(){
		var $subNav =$("#subnav");
		var $subNavLi = $subNav.find("li");
		var $floorNav = $("#floor-nav");
		var $navLi = $floorNav.find("li");
		var $floorLi = $("#floor .f-first");
		var navTop = $subNav.offset().top;
		var scrolltop = $(this).scrollTop();
		var floorH = $floorLi.outerHeight();
		var index = 0;
		var $endfloor = $("#giftClassify");
		var endScroll = $endfloor.offset().top;
		//console.log(navTop,scrolltop,floorH);
		//console.log(scrolltop,navTop)
		if(scrolltop>=navTop && scrolltop <= endScroll - 20){
			$floorNav.css({"display":"block"});
		}else{
			$floorNav.css({"display":"none"});
		}
		index = Math.floor((scrolltop - navTop)/floorH);
		index = index < 0 ? 0 : index;
		//console.log(index);
		 $navLi.eq(index).find("a").addClass("cur").end().siblings().find("a").removeClass("cur");
		 $navLi.hover(function(){
		 	$(this).find("a").addClass("active").siblings().find("a").removeClass("active");
		 },function(){
		 	$(this).find("a").removeClass("active");
		 });
		$subNavLi.click(function(){
			index = $(this).index();
			$("html,body").stop().animate({"scrollTop":index*floorH + navTop},500);
			return false;
		});	
		$navLi.click(function(){
			index = $(this).index();
			$("html,body").stop().animate({"scrollTop":index*floorH + navTop},500);
			$(this).find("a").addClass("cur").end().siblings().find("a").removeClass("cur");
			return false;
		});	
	})
	
})(jQuery)

			
			


			
	
})


	
	
	































