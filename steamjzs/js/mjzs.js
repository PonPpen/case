$(function(){
	$('.user-box').hover(function(){
		$(this).find('.dropbox').stop().fadeIn();
		$(this).addClass('active');
	},function(){
		$(this).find('.dropbox').stop().fadeOut();
		$(this).removeClass('active');
	});
	$('.bl-kapians li').hover(function(){
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active');
	});
	$('.star-top li ,.gamelist ul .item').hover(function(){
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active');
	});
	//星球部落
	$('.phbtab-title li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var _this=$('.phbtab-title li').index(this);
		$('.xq-local .jzs-localtion').eq(_this).show().siblings().hide();
	});
	//火箭飞
	$(window).load(function(){
		setInterval(function(){
			flyGj();
		},1800);
		flyGj();
	});
	function flyGj(){
		setTimeout(function(){
			$('.rocket').css({'background-position':'0 0'});				
		},0);
		setTimeout(function(){
			$('.rocket').css({'background-position':'0 -111px'});				
		},200);
		setTimeout(function(){
			$('.rocket').css({'background-position':'0 -228px'});				
		},400);
		setTimeout(function(){
			$('.rocket').css({'background-position':'0 -345px'});
		},600);
		setTimeout(function(){
			$('.rocket').css({'background-position':'0 -462px'});
		},800);
		setTimeout(function(){
			$('.rocket').css({'background-position':'0 -577px'});
		},1000);
		setTimeout(function(){
			$('.rocket').css({'background-position':'0 -695px'});
		},1200);
		setTimeout(function(){
			$('.rocket').css({'background-position':'0 -815px'});
		},1400);
		setTimeout(function(){
			$('.rocket').css({'background-position':'0 -930px'});
		},1600);
		setTimeout(function(){
			$('.rocket').css({'background-position':'0 -1047px'});
		},1800);
	}
	$('.sltbox').hover(function(){
		$(this).children('.dropdownbox').slideDown();
		$(this).addClass('active');
	},function(){
		$(this).children('.dropdownbox').slideUp();
		$(this).removeClass('active');
	});
	
	//错题解析
	$('.Viewresolution span').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('.resolution').fadeOut();
		}else {
			$(this).addClass('active');
			$('.resolution').fadeIn();
		}
	});
	
	//消息
	$('.messagebx li').click(function(){
		$(this).toggleClass('active').siblings().removeClass('active');
		$(this).addClass('read');
	});
	$('.messagebx li').hover(function(){
		$(this).addClass('on');
	},function(){
		$(this).removeClass('on');
	});
	//弹窗
	var st = $(window).scrollTop();
	var blh=$('.layer-box-nichen').height(),sctop = ($(window).height()-blh)/2;
	var blh2=$('.layer-box-phone').height(),sctop2 = ($(window).height()-blh2)/2;
	var blh3=$('.layer-box-jiaocai').height(),sctop3 = ($(window).height()-blh3)/2;

	$('.u-modify').click(function(){
		$('.layer-bg ,.layer-box-nichen').show();
		$('.layer-box-nichen').addClass('pt-page-moveFromTop');
		$('.layer-box-nichen').css({'top':sctop});
	});
	$('.close ,.layer-bg').click(function(){
		$('.layer-box').removeClass('pt-page-moveFromTop');
		$('.layer-bg ,.layer-box').hide();
	});
	
	$('.u-phone').click(function(){
		$('.layer-bg ,.layer-box-phone').show();
		$('.layer-box-phone').addClass('pt-page-moveFromTop');
		$('.layer-box-phone').css({'top':sctop2});
	});
	
	$('.myteaching li').click(function(){
		$('.layer-bg ,.layer-box-jiaocai').show();
		$('.layer-box-jiaocai').addClass('pt-page-moveFromTop');
		$('.layer-box-jiaocai').css({'top':'10%','height':'auto'});
		
	});
	//年级
	$('.mygrade span').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});
	//人教版
	$('.tc-jiaocai li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	//支付
	var blh4=$('.layer-box-one-all').height(),sctop4 = ($(window).height()-blh4)/2;
	$('.btn-one-all').click(function(){
		$('.layer-bg ,.layer-box-one-all').show();
		$('.layer-box-one-all').addClass('pt-page-moveFromTop');
		$('.layer-box-one-all').css({'top':sctop4});
		
	});
	
	var blh5=$('.layer-box-one-one').height(),sctop5 = ($(window).height()-blh5)/2;
	$('.btn-one-one').click(function(){
		$('.layer-bg ,.layer-box-one-one').show();
		$('.layer-box-one-one').addClass('pt-page-moveFromTop');
		$('.layer-box-one-one').css({'top':sctop5});
		
	});
	$('.xueke dd').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	
	var blh6=$('.layer-box-one-course').height(),sctop6 = ($(window).height()-blh6)/2;
	$('.btn-one-course').click(function(){
		$('.layer-bg ,.layer-box-one-course').show();
		$('.layer-box-one-course').addClass('pt-page-moveFromTop');
		$('.layer-box-one-course').css({'top':sctop6});
		
	});
	
	var blh7=$('.layer-box-st-all').height(),sctop7 = ($(window).height()-blh7)/2;
	$('.btn-st-course').click(function(){
		$('.layer-bg ,.layer-box-st-all').show();
		$('.layer-box-st-all').addClass('pt-page-moveFromTop');
		$('.layer-box-st-all').css({'top':sctop7});
		
	});
	
	var blh8=$('.layer-Exchange-ma').height(),sctop8 = ($(window).height()-blh8)/2;
	var blh81=$('.layer-Exchange').height(),sctop81 = ($(window).height()-blh81)/2;
	$('.btn-Exchange').click(function(){
		$('.layer-bg ,.layer-Exchange-ma').show();
		$('.layer-Exchange-ma').addClass('pt-page-moveFromTop');
		$('.layer-Exchange-ma').css({'top':sctop8});
	});
	$('.suihuamaEnter').click(function(){
		$('.layer-bg ,.layer-Exchange').show();
		$('.layer-Exchange').addClass('pt-page-moveFromTop');
		$('.layer-Exchange').css({'top':sctop81});
		$('.layer-Exchange-ma').hide();
	});
	
	var blh9=$('.layer-payfs').height(),sctop9 = ($(window).height()-blh9)/2;
	$('.payBtns').click(function(){
		$('.layer-bg ,.layer-payfs').show();
		$('.layer-payfs').addClass('pt-page-moveFromTop');
		$('.layer-payfs').css({'top':sctop9});
		$('.box-payment').hide();
	});
	$('.payfsBox li').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});
	
	//点击修改hover
	$('.user-photo').hover(function(){
		$(this).find('a').show();
	},function(){
		$(this).find('a').hide();
	});
	
	
	var blh10=$('.layer-fashe').height(),sctop10 = ($(window).height()-blh10)/2;
	$('.layer-fashe').css({'top':sctop10});
	var blh11=$('.layer-welcome1').height(),sctop11 = ($(window).height()-blh11)/2;
	$('.layer-welcome1').css({'top':sctop11});
	$('.layer-bg2').click(function(){
		$('.layer-bg2 ,.layer-fashe ,.layer-welcome1 ,.fixbottom').hide();
	});
});
