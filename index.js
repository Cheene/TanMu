function addEventLoad(func){
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
		func();
		}		
	}
}
//主函数
function index(){
	//修改 article 的高度
	var article = document.getElementsByTagName("article");
	var artHeight = parseInt(document.documentElement.clientHeight)-85;
	article[0].style.height = artHeight+'px';
	// 设置文本保存数组
	var tex_array = new Array();
	// 添加 回车、发射、清除按钮事件
	var ok = document.getElementById("d-2");
	var cancel = document.getElementById("d-3");
	ok.onclick = function(){
		var input = document.getElementById("d-1");
		tex_array.push(input.value);
		addMarquee(article[0],getText(tex_array));

	}
	cancel.onclick = function(){
		//移除所有的元素
		var t = article[0].childNodes.length;
		for(var i=0;i<t;i++){
			article[0].removeChild(article[0].childNodes[i]);
		}
	}
}
addEventLoad(index);
//获取随机整数
function getNumber(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}
//获取颜色的函数
function getColor(){
	var num1 = getNumber(-1,256);
	var num2 = getNumber(-1,256);
	var num3 = getNumber(-1,256);
	return "rgb("+num1+","+num2+","+num3+")";
}
// 获取大小的函数
function getSize(){
	return getNumber(20,50) +'px';
}

//随机获取文本数组中的内容
function getText(arr){
	return arr[getNumber(-1,arr.length)];
}

//生成跑马灯
function addMarquee(article,text){
	var marquee = document.createElement("marquee");
	marquee.style.color = getColor();
	marquee.style.fontSize = getSize();
	marquee.setAttribute("scrollamount",getNumber(5,20));
	marquee.setAttribute("loop",1);
	marquee.setAttribute("class","m-1");
	marquee.innerHTML = text;
	article.appendChild(marquee);
}

