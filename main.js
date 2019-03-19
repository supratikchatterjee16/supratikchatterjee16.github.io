var view_width=window.innerHeight, view_height=window.innerWidth;
function enableLeftpane(){
	var leftpane = document.getElementsByTagName("leftpane")[0];
	leftpane.style.display="block";
	leftpane.style.width = (0.4 * view_width)+"px";
	leftpane.style.left = 0;
}

function enableRightpane(){
	var rightpane = document.getElementsByTagName("rightpane")[0];
	rightpane.style.display="block";
	rightpane.style.width = (0.4 * view_width)+"px";
	rightpane.style.right = 0;
}


function closeLeftpane(){
	var element = document.getElementsByTagName("leftpane")[0];
	console.log("Sidepane closed "+element.style.left);
	element.style.left = "-"+(0.4 * view_width)+"px";
	document.getElementsByTagName("app")[0].style.left = 0;
}

function openLeftpane(){
	var element = document.getElementsByTagName("leftpane")[0];
	console.log("Sidepane open");
	element.style.left = 0;
	document.getElementsByTagName("app")[0].style.left = (0.4 * view_width)+"px";
}

function closeRightpane(){
	var element = document.getElementsByTagName("rightpane")[0];
	element.style.right = "-"+(0.4 * view_width)+"px";
	document.getElementsByTagName("app")[0].style.right = 0;
}

function openRightpane(){
	var element = document.getElementsByTagName("rightpane")[0];
	console.log("Sidepane open");
	element.style.right = 0;
	document.getElementsByTagName("app")[0].style.right = (-0.4 * view_width)+"px";
}

function scrollElement(pos){
	var arr = document.getElementsByTagName("section");
	console.log(pos);
	for(var i = 0;i<arr.length;i++){
		if(i==pos){
			arr[i].style.opacity= "1";
			arr[i].style.top="10vh";
			arr[i].style.width = "100%";
		}
		else{
			arr[i].style.opacity="1";
			if(i<pos)arr[i].style.top = "-100vh";
			else arr[i].style.top = "100vh";
		}
	}
}

function setProperties(str){
	if(str.indexOf("left")!=-1)enableLeftpane();
	if(str.indexOf("right")!=-1)enableRightpane();
	closeLeftpane();
	closeRightpane();
	scrollElement(0);
}
function init(){
	
}
function enableParallaxOn(str, modif){
	var elements = document.getElementsByTagName(str);
	console.log(elements[0].scrollTop);
	if(elements.length>0)
	for(var i = 0;i<elements.length-1;i++){
		elements[i].scrollTop = elements[i+1].scrollTop / modif;
	}
}

function scrollAnimator(){
	var scroll = document.getElementsByTagName("app")[0];
	var pos =scroll.scrollTop;
	var modif = scroll.scrollHeight / document.getElementsByTagName("section").length;
	if(pos<=modif){
		scrollElement(0);
		closeLeftpane();
		closeRightpane();
	}
	else if(pos>(modif*1)&&pos<=(modif*2)){
		scrollElement(1);
		closeLeftpane();
		closeRightpane();
	}
	else if(pos>(modif*2)&&pos<=(modif*3)){
		scrollElement(2);
		openLeftpane();
		closeRightpane();
	}
	else if(pos>(modif*3)&&pos<=(modif*4)){
		scrollElement(3);
		closeLeftpane();
		openRightpane();
	}
	else if(pos>(modif*4)&&pos<=(modif*5)){
		scrollElement(4);
		closeLeftpane();
		closeRightpane();
	}
	
}