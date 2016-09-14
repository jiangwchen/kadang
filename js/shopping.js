$(function(){
	
//购物车
;(function($){
	$.get("js/list.txt",function(data){
		var oData = eval(data);
		//var id = window.location.href.split("=")[1];
		//console.log(id);
		$.each(oData,function(index,item){
			if(cookieUntil.getCookie(item.id)){
			var tu1 = $(".tu-xianshi");
			console.log(tu1)
			var oli = $("<li></li>");
			oli.appendTo(tu1);
			var div1 = $("<div class='check_all'></div>");
			div1.appendTo(oli);
			var input1 = $("<input type='checkbox' calss='pitch1' />");
			input1.appendTo(div1);
			var div2 = $("<div class='pic'></div>");
			div2.appendTo(oli);
			var img1 =$("<img src="+item.img1+"/>");
			img1.appendTo(div2);
			var div3 = $("<div class='blurb'>"+item.theme+"</div>");
			div3.appendTo(oli);
			var div4 = $("<div class='prince'>"+item.prince+"</div>");
			div4.appendTo(oli);
			var div5 = $("<div class='num'></div>");
			div5.appendTo(oli);
			var a1 = $("<a href='javascript:;'>-</a>");
			a1.appendTo(div5);
			var input2 = $("<input class='txt' type='text' value='1' />");
			input2.appendTo(div5);
			var a2 = $("<a href='javascript:;'>+</a>");
			a2.appendTo(div5);
			var div6 = $("<div class='total'>"+item.prince+"</div>");
			div6.appendTo(oli);
			var div7 = $("<div class='delect'></div>");
			div7.appendTo(oli);
			var span1 = $("<span>删除</span>");
			span1.appendTo(div7);	
			span1.click(function(){
				$(this).parent().parent().remove();
				cookieUntil.setCookie(item.id,"1",-7);
				var ss = parseInt(cookieUntil.getCookie("count"));
					ss--;
				cookieUntil.setCookie("count",ss,7);
			})
			}

		})
		
		
	})
		
		
		
})(jQuery);
	
	
	
	
})
//封装cookie函数
var cookieUntil = {
	//添加cookie                                                          
	setCookie: function(name, value, time) {
		//console.log(name,value)
		var date = new Date();
		date.setDate(date.getDate() + time); //设置date的天为现在加上间隔
		document.cookie = name + "=" + value + ";expires=" + date;
	},

	//删除cookie
	removeCookie: function(name) {
		this.setCookie(name, 1, -1); //设置cookie过期，则该条cookie被删除
	},
	//获取cookie的值
	getCookie: function(name) {
		var str = document.cookie;
		var arr = str.split("; "); //分割成 key1=value1; key2=value2; key3=value3 
		for (var i = 0; i < arr.length; i++) { //遍历每个键值对
			var arr1 = arr[i].split("="); //得到存储键值对的数组  [key,value]
			if (arr1[0] == name) { //找到则返回对应的值
				return arr1[1];
			}
		}
		return ""; //找不到，返回空值
	}
};
