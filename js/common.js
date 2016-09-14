/**********右下角固定定位**************/
$(window).ready(function(){
;(function($){
	$(window).scroll(function(){
		var $back_t = $(".fix-nav .back_top ")
		var $back_top = $(".fix-nav .back_top a");
		var scrolltop = $(this).scrollTop();
		var $subNav =$("#subnav");
		var navTop = $subNav.offset().top;
		scrolltop = scrolltop >= navTop ? $back_t.show(50) : $back_t.hide(50);
		$back_top.hover(function(){
			$(this).css({"background":"rgb(153,153,153)","color":"#fff"}).html("回到<br />顶部");
		},function(){
			$(this).css({"background":"#eee url(img/back_top.png) no-repeat 0 0"}).html("");
		});
		$back_top.click(function(){
			$("html,body").stop().animate({"scrollTop":"0"},300);
		});
	});
})(jQuery)
;(function($){
	var span = $("#shoucang");
	span.click(function(){
		window.location.href = "shopping.html";
	})
})(jQuery)

/******登录页面********/
	;(function($){
		var $log_btn  = $("#login");
		var $alter_lay = $(".lay_out");
		var $log_show = $("#log_in");
		var $close = $(".login-close");
		var $reg_btn = $("#register");
		//弹出层登录与注册的转换
		var $login_start =$log_show.find("#login-start");
		var $reg_log =$log_show.find("#reg-log");
		$reg_log.click(function(){
			$alter_lay.show();
			$log_show.find(".register-right").show().prev().hide();
			});
		$login_start.click(function(){
			$alter_lay.show();
			$log_show.find(".log_right").show().next().hide();
		});
		//首页登录和注册点击事件
			$reg_btn.click(function(){
			$alter_lay.show();
			$log_show.animate({"right":"0"}).find(".register-right").show().prev().hide();
			});
			$log_btn.click(function(){
				$alter_lay.show();
				$log_show.animate({"right":"0"}).find(".log_right").show().next().hide();
			});
		$close.click(function(){
			$alter_lay.hide();
			$log_show.animate({"right":"-1138px"});
		})
	})(jQuery)	
/******登录验证*******/	
;(function($){
	var $userName = $("#kd_login .txt");
	var $password = $("#kd_login .pas");
	var $btn = $("#kd_login .btn");
	var $test_user = $("#kd_login .test_username");
	var $test_pass = $("#kd_login .test_password");
	var $alter_lay = $(".lay_out");
	var $log_show = $("#log_in");
	var login = $("#login");
	var quit = $("#register");
	//console.log($test_user)
	/*var home = "退出"
	var us = "登录";
	var ba = "注册";
	login.html(cookieUntil.setCookie("username",us,7));
	quit.html(cookieUntil.setCookie("back",ba,7));
	login.html(cookieUntil.getCookie("username"));
	quit.html(cookieUntil.getCookie("back"));*/
	$btn.click(function(){
		var reg2 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		var reg3 = /^[\w.]{6,20}$/;
		var texVal = $userName.val();
		var pasVal = $password.val();
		var $close = $(".login-close");
		if(texVal == ""){
			$test_user.show().find("i").text("邮箱/用户名不能为空");
			$test_pass.show().find("i").text("密码不能为空");
		}else{
			$test_user.hide();
			if(pasVal == ""){
				$test_pass.show().find("i").text("密码不能为空");
			}else if(!reg3.test(pasVal)){
				$test_pass.show().find("i").text("密码长度需介于 6 和 20 之间");
			}else{
				$test_pass.hide();
				$alter_lay.hide();
				$log_show.animate({"right":"-1138px"});
				login.html(texVal);
				quit.html("退出");
				/*var home = "退出"
				var us = cookieUntil.setCookie("username",texVal,7);
				var ba = cookieUntil.setCookie("back",home,7);	
					var login = $("#login");
					var quit = $("#register");
					login.html(cookieUntil.getCookie("username"));
					quit.html(cookieUntil.getCookie("back"));*/
			}
		}			
	});
})(jQuery)
/*****用户注册*******/	
;(function($){
	var $userName = $("#kd_register .txt");
	var $password = $("#kd_register .pas");
	var $btn = $("#kd_register .btn");
	var $test_user = $("#kd_register .test_em");
	var $test_pass = $("#kd_register .test_em_pass");
	var $alter_lay = $(".lay_out");
	var $log_show = $("#log_in");
	//主页登录注册转换显式
	var login = $("#login");
	var quit = $("#register");
	//console.log($test_user)
	$btn.click(function(){
		var reg1 = /^1[0-9]{10}$/;
		var reg2 = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		var reg3 = /^[\w.]{6,20}$/;
		var texVal = $userName.val();
		var pasVal = $password.val();
		var $close = $(".login-close");
		if(texVal == ""){
			$test_user.show().find("i").text("邮件不能为空");
		}else if(!reg1.test(texVal) && !reg2.test(texVal)){
			$test_user.show().find("i").text("邮箱格式不正确");
		}else{
			$test_user.hide();
			if(pasVal == ""){
				$test_pass.show().find("i").text("密码不能为空");
			}else if(!reg3.test(pasVal)){
				$test_pass.show().find("i").text("密码长度需介于 6 和 20 之间");
			}else{
				$test_pass.hide();
				$alter_lay.hide();
				$log_show.animate({"right":"-1138px"});
				login.html(texVal);
				quit.text("退出");
			}
		}
	})
})(jQuery);	

		
	
/**header-menu**/
	;(function($){
		var $aLi=$(".header .h-right li");
		$aLi.hover(function(){
			$(this).addClass("active").children("div").slideDown().end().siblings().removeClass("active").children("div").css("display","none")
		},function(){
			$(this).removeClass("active").children("div").css("display","none");
		});
	})(jQuery)
	/**导航nav**/	
	;(function($){
		var $aLi = $(".nav ul li ");
		$aLi.hover(function(){
			var s = $(this).position().left + 26;
			var w = $(this).find("a").outerWidth();
			$(this).find("a").css("color","rgb(244,97,77)");
			$(".nav-main ul").find("div").css({"height":"2px","width":w,"background":"rgb(244,97,77)"}).animate({"left":s},50);
		},function(){
 			$(".nav-main ul ").find("div").css({"background":"#fff"})	
			$(this).find("a").css("color","#000")
		})
	})(jQuery)
	
/****送礼攻略显示隐藏****/
	;(function($){
	var $move = $(".nav .nav-main .gift-strategy")
	var $show = $(".nav .nav-main .gift-strategy #giftClassify");
	$move.hover(function(){
		$show.slideDown();
	},function(){
		$show.hide();
	})
})(jQuery)
/***改变logo***/
	;(function($){
		var $tabLog = $(".header .header-logo");
		$tabLog.hover(function(){
			//console.log("a")
			$(this).find("img").attr("src","img/logo1.jpg");
		},function(){
			$(this).find("img").attr("src","img/logo.jpg");
		})
	})(jQuery);
})

//显示数据span
$(function(){
		var span = $(".fix-nav .cook");//显示数据的span标签;
		span.show().html(cookieUntil.getCookie("count"));
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








































































