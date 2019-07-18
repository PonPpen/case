fnResize();
var evt = "onorientationchange" in window ? "orientationchange": "resize";
window.addEventListener("resize",
function() {
    fnResize()
},
!1);
function fnResize() {
    var a = document.documentElement.clientWidth,
    b = document.getElementsByTagName("html")[0];
    750 <= a && (a = 749);
    b.style.fontSize = a / 20 + "px"
};
function test1 () {
	var tempStr = document.getElementById('test').value;
	if (tempStr === "关键字搜索") {
		document.getElementById('test').value = "";
	}
}

function test2 () {
	var tempStr = document.getElementById('test').value;
	if (tempStr === "") {
		document.getElementById('test').value = "关键字搜索";
	}
}
$(function(){
	function getDayofWeek(date) {
	var day;
    switch (date) {
        case 0:
            day = "周日";
            break;
        case 1:
            day="周一";
            break;
        case 2:
            day = "周二";
            break;
        case 3:
            day = "周三";
            break;
        case 4:
            day = "周四";
            break;
        case 5:
            day = "周五";
            break;
        case 6:
            day = "周六";
            break;
    }
    return day;
}
	var now = new Date();	
	var str = buling(now.getMonth()+1)+'-'+buling(now.getDate());
	var str5 = buling(now.getMonth()+1)+'-'+buling(now.getDate()+1);
	var str6 = buling(now.getMonth()+1)+'-'+buling(now.getDate()-1);
	$('.js-riqi').text(str);
	$('.day-after').text(str5);
	$('.day-before').text(str6);
	$('.week').text(getDayofWeek(now.getDay()));
	$('.js-before').on('click',function(){
		var str2 = buling(now.getMonth()+1)+'-'+buling(now.getDate());							
		now = new Date(now.getTime()-1000*60*60*24);
		var time1 = new Date(now.getTime()-1000*60*60*24);
		var str = buling(now.getMonth()+1)+'-'+buling(now.getDate());
		var str1 = buling(time1.getMonth()+1)+'-'+buling(time1.getDate());
		$('.week').text(getDayofWeek(now.getDay()));
		$('.js-riqi').text(str);
		$('.day-after').text(str2);
		$('.day-before').text(str1);
	});
	$('.js-after').on('click',function(){
        var str4 = buling(now.getMonth()+1)+'-'+buling(now.getDate());	
		now = new Date(now.getTime()+1000*60*60*24);
		var time2 = new Date(now.getTime()+1000*60*60*24);
		var str = buling(now.getMonth()+1)+'-'+buling(now.getDate());
		var str3 = buling(time2.getMonth()+1)+'-'+buling(time2.getDate());
		$('.week').text(getDayofWeek(now.getDay()));
		$('.js-riqi').text(str);
		$('.day-before').text(str4);
		$('.day-after').text(str3);
	});
	function buling(v){
		return v<10?'0'+v:v;
	}
});
