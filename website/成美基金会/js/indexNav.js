$(document).ready(function(){
	$(".index_nav1").append("<span class='index_nav1Hover'></span>");//加一层背景
	$(".index_nav2").append("<span class='index_nav2Hover'></span>");
	$(".index_nav3").append("<span class='index_nav3Hover'></span>");
	$(".index_nav4").append("<span class='index_nav4Hover'></span>");
	$(".index_nav5").append("<span class='index_nav5Hover'></span>");
	
	$(".index_nav1Hover,.index_nav2Hover,.index_nav3Hover,.index_nav4Hover,.index_nav5Hover").css('opacity', 0);//先不显示
	
	$(".index_nav1Hover").parent().hover(
	function(){
		$(".index_nav1Hover").stop().animate({opacity: '1'},800);
	},
	function(){
		$(".index_nav1Hover").stop().animate({opacity: '0'},800);
	});
	
	$(".index_nav2Hover").parent().hover(
	function(){
		$(".index_nav2Hover").stop().animate({opacity: '1'},800);
	},
	function(){
		$(".index_nav2Hover").stop().animate({opacity: '0'},800);
	});
	
	$(".index_nav3Hover").parent().hover(
	function(){
		$(".index_nav3Hover").stop().animate({opacity: '1'},800);
	},
	function(){
		$(".index_nav3Hover").stop().animate({opacity: '0'},800);
	});
	
	$(".index_nav4Hover").parent().hover(
	function(){
		$(".index_nav4Hover").stop().animate({opacity: '1'},800);
	},
	function(){
		$(".index_nav4Hover").stop().animate({opacity: '0'},800);
	});
	
	$(".index_nav5Hover").parent().hover(
	function(){
		$(".index_nav5Hover").stop().animate({opacity: '1'},800);
	},
	function(){
		$(".index_nav5Hover").stop().animate({opacity: '0'},800);
	});
});
