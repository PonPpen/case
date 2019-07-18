
//侧边导航
$(function(){
	jQuery(".sideMenu").slide({
		titCell: "h3",
		targetCell: "ul",
		defaultIndex: 1,
		effect: "slideDown",
		delayTime: 300,
		trigger: "click",
		defaultPlay: false
	});
	
	var mark=1;
	$(".nav").click(function(e) {
		if (mark == 1) { //把他展开
			$(this).addClass("topMnu1");
			$(".boxWrap").animate({"right": "34%"}, 500);
			$(".footerWrap").animate({"right": "34%"}, 500);
			$(".sideMenu").animate({"right": "0"}, 500);
			e.stopPropagation(); //阻止冒泡
			mark = 2;
		} else if (mark == 2) { //收缩
			$(this).removeClass("topMnu1");
			$(".boxWrap").animate({"right": "0"}, 500);
			$(".footerWrap").animate({"right": "0"}, 500);
			$(".sideMenu").animate({"right": "-34%"}, 500);
			mark = 1;
		}
	});
	
	
});
//搜索框1111111111111111111111111
function test1()
{
	var tempStr=document.getElementById('test').value;
	if(tempStr=="请输入姓名")
	{
		document.getElementById('test').value="";
	}

}
function test2()
{
	var tempStr=document.getElementById('test').value;
	if(tempStr=="")
	{
		document.getElementById('test').value="请输入姓名";
	}
}

function test3()
{
	var tempStr=document.getElementById('test1').value;
	if(tempStr=="请输入电话")
	{
		document.getElementById('test1').value="";
	}

}
function test4()
{
	var tempStr=document.getElementById('test1').value;
	if(tempStr=="")
	{
		document.getElementById('test1').value="请输入电话";
	}
}
