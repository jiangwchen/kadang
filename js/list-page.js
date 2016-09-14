
$(window).ready(function(){
//吸顶菜单
$(function(){
	var $dl = $(".m_kdl_cont .city .address dl");
	var $dd =$(".m_kdl_cont .city .address dl dd");
	var $close =$dd.find(".close_dd");
	console.log($close)
	//console.log($close);
	$dl.click(function(){
		$(this).find("dd").show().end().siblings().find("dd").hide();
		var index = $(this).index();
		var cont = $(this).find("dd").children("a");
		cont.click(function(){
			$dl.eq(index).find("dt").children("em").text($(this).text());
		})			
		$close.hover(function(){
			$dl.eq(index).find("dd").css("display","none");
		})
	});
})
//图片切换
;(function($){
	var ul= $(".kd_small_img");
	var li = ul.find("li");
	var div = $("#main-kd .kd_img");
	var small = div.find(".small_img img");
	var large = div.find(".large_img img");
	li.eq(0).find("a").css({"border-color":"red"});
	li.click(function(){
		$(this).find("a").css({"border-color":"red"}).end().siblings().find("a").css({"border-color":"#eaeaea"})
		var path = $(this).find("img").attr("src");
		small.attr({"src":path});
		large.attr({"src":path});
	});
	
})(jQuery)




		
// 放大镜

;(function($){
	var $parent = $("#main-kd .kd_img");
	var $small = $parent.find(".small_img");
	var $large = $parent.find(".large_img");
	var $slide = $parent.find(".slide_box");
	var $big_img =$large.find("img");
	var bigW = $big_img.outerWidth();
	var bigH = $big_img.outerHeight();
	bigW = bigW >800 ? $large.css({"width":bigW}) : $large.css({"width":"800px"});
	bigH = bigH >800 ? $large.css({"height":bigH}) : $large.css({"height":"800px"});	
	$large.css({"width":bigW,"height":bigH});
	$parent.hover(function(){
		//console.log("a")
		$small.hide();
		$large.show();
	},function(){
		$small.show();
		$large.hide();
	});
	$parent.mousemove(function(e){
		//console.log($parent.position().left)
		var evtx = e.pageX || e.clientX;
		var evty = e.pageY || e.clientY;
		var x = evtx - $parent.position().left - $slide.outerWidth()/2;
		var y = evty - $parent.position().top - $slide.outerHeight()/2;
		//console.log(x,y)
		if(x<=0){
			x=0;
		}else if(x > $parent.outerWidth() - $slide.outerWidth()){
			x = $parent.outerWidth() - $slide.outerWidth();
		};
		if(y<=0){
			y=0;
		}else if(y > $parent.outerHeight() - $slide.outerHeight()){
			y = $parent.outerHeight() - $slide.outerHeight();
		};
		$slide.css({"left":x,"top":y});
		var percentX = x/($parent.outerWidth() - $slide.outerWidth());
		var percentY = y/($parent.outerHeight() - $slide.outerHeight());
		var bigx = percentX*($parent.outerWidth() -$large.outerWidth());
		var bigy = percentY*($parent.outerWidth() -$large.outerHeight());
		//console.log(bigx,bigy)
		$large.css({"left":bigx,"top":bigy});
	});	
})(jQuery)

})



































