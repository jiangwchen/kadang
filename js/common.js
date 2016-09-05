
//封装一个获取id的函数
function $(obj){
   // return  document.getElementById(obj);
   return  typeof obj =="string"?  document.getElementById(obj) :  obj;
}

//封装通过类名获取元素函数
function getByClass(obj,sClass){
	if(document.getElementsByClassName){
		return obj.getElementsByClassName(sClass);
	}else{
		var aEle = obj.getElementsByTagName("*");
		var aTarget = [];
		var arr = [];
		for(var i=0; i<aEle.length; i++){
			
			aTarget = aEle[i].className.split(' ');
			
			for(var j=0; j<aTarget.length; j++){
				
				if(aTarget[j]==sClass){
					
					arr.push(aEle[i]);
					
				}
			}
		}
		return arr;
	}
	
}

//封装获取样式函数

function getStyle(obj,sName){
	
	if(obj.currentStyle){
		
		return obj.currentStyle[sName];
		
	}else{
		
		return getComputedStyle(obj,false)[sName];
		
	}
	
}
//浏览器类型
function checkBrowser() {
    ua = navigator.userAgent;
    ua = ua.toLocaleLowerCase();
    var browserVersion;
    if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
        browserType = "IE";
        browserVersion = ua.match(/msie ([\d.]+)/) != null ? ua.match(/msie ([\d.]+)/)[1] : ua.match(/rv:([\d.]+)/)[1];
    } else if (ua.match(/firefox/) != null) {
        browserType = "火狐";
    } else if (ua.match(/opera/) != null) {
        browserType = "欧朋";
    } else if (ua.match(/chrome/) != null) {
        browserType = "谷歌";
    } else if (ua.match(/safari/) != null) {
        browserType = "Safari";
    }
    var arr = new Array(browserType, browserVersion);
    return arr;
}

//检测是否是移动设备
function browserRedirect() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	document.writeln("您的浏览设备为：");
	if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		document.write("phone");
	}else if(bIsIpad){
		document.write("iPad");
	} else {
		document.write("pc");
	}
}


