function $class(myClass){
	return document.getElementsByClassName(myClass);
}
function $id(id){
	return document.getElementById(id);
}
var btn = $class("play")[0];
var music = $id("myMusic");
var myLrc = $class("lrc")[0];
var text = $id("lrc").value;
var content = $class("content")[0];
var isPlay = true;
btn.onclick = function(){
	if (isPlay) {
		music.play();
		isPlay = false;
		this.className = "play rotate"
	}else{
		music.pause();
		isPlay = true;
		this.className = "play"
	}
}
var lrcArr = text.split("[")
var html = "";
for (var i = 0;i<lrcArr.length;i++) {
	var arr = lrcArr[i].split("]");
	
	var allTime = arr[0].split(".")
	var allTime = allTime[0].split(":")
	var allTime = allTime[0]*60 + allTime[1]*1
	var lrcText = arr[1]
	if (lrcText) {
		html+="<p id="+ allTime +">"+ lrcText +"</p>";
	}
}
var mP = document.getElementsByTagName("p")
var num = 0;
music.addEventListener("timeupdate",function(){
	var curTime = parseInt(this.currentTime);
	
	if ($id(curTime)) {
		for (var i = 0;i<mP.length;i++) {
			mP[i].style.cssText = "color:#ccc;font-size:12px;"
		}
		$id(curTime).style.cssText = "color:#f00;font-size:18px;"
	}
	if (curTime == mP[num+7].id) {
		content.style.top = -18*(num) +"px";
		num++;
	}
})
content.innerHTML = html;
