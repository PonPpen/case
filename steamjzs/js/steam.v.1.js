$(function(){
	//login
	//login学段
	$('.xueduanbar span').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	var $log=$('.loginwrap'),$reg=$('.registerwrap'),$fg=$('.findpswwrap');
	$('.regBn').click(function(){
		$reg.removeClass('pt-page-moveToLeft').addClass('pt-page-moveFromRight').stop().show();
		$log.removeClass('pt-page-moveFromRight').addClass('pt-page-moveToLeft');
		setTimeout(function(){
			$log.hide();
		},500);
	});
	$('.findpswBn').click(function(){
		$fg.removeClass('pt-page-moveToLeft').addClass('pt-page-moveFromRight').stop().show();
		$log.removeClass('pt-page-moveFromRight').addClass('pt-page-moveToLeft');
		setTimeout(function(){
			$log.hide();
		},500);
	});
	//back
	$('.backlogbtn1').click(function(){
		$reg.removeClass('pt-page-moveFromRight').addClass('pt-page-moveToLeft');
		$log.removeClass('pt-page-moveToLeft').addClass('pt-page-moveFromRight ').stop().show();
		setTimeout(function(){
			$reg.hide();
		},500);
		
	});
	$('.backlogbtn2').click(function(){
		$fg.removeClass('pt-page-moveFromRight').addClass('pt-page-moveToLeft');
		$log.removeClass('pt-page-moveToLeft').addClass('pt-page-moveFromRight ').stop().show();
		setTimeout(function(){
			$fg.hide();
		},500);
		
	});
	//风暴
	setTimeout(function(){
		$('.heibaofeng').fadeOut(2000);
	},1000);
   	//底部
   	var line1w=$('.lineCnter').offset().left,line2w=$('.lineCnter').width(),line2wspan=$('.lineCnter span').width(),winw=$(window).width();
   	var newswidth=line1w+line2w , Inswidth=line1w+line2wspan;
	var mydate = new Date();
	mydate.getDate();
	var newWidth2 = (mydate.getDate()/31).toFixed(2)*100+1+'%';
	var newTime = (mydate.getDate()/31).toFixed(2)*10000;
	var octopusLenth = (mydate.getDate()/31).toFixed(2)*100+4+'%';
	//当前月份
	function getDays() {
        var date = new Date();
        var year = date.getFullYear();
        var mouth = date.getMonth() + 1;
        var days;
        if (mouth == 2) {  days = year % 4 == 0 ? 29 : 28;}
        else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) { days = 31; }
        else { days = 30; }
        return days;
    }
	var newMonth = (getDays()/31).toFixed(2)*100+'%';
	var newMonthTime = (getDays()/31).toFixed(2)*10000;
	
	$('.lineCnter span ,.innerflower').animate({'width':newWidth2},{easing: 'linear', duration: newTime});
	$('.numberlinein').animate({'width':newMonth},{easing: 'linear', duration: newMonthTime});
	$('.lineCnter em.octopus,.lineCnter i.ico-octopus').animate({'left':newWidth2},{
		easing: 'linear', 
    	duration: newTime,
    	complete: function(){
			$('.line-2').css({'left':Inswidth}).animate({'width':winw-Inswidth},1000);
			$('.lineCnter em.octopus').animate({'left':octopusLenth},{easing: 'linear', duration: 800});
			$('.lineCnter i.ico-octopus').hide();
		}
	});
	$('.line-1').width(line1w);
	window.onresize = function(){
		$('.line-1').width(line1w);
	};
	$(window).resize();
	
	//em.octopus
	function Octopusfade(){
		setTimeout(function(){
			$('em.octopus').css({'background-position':'0 0'});				
		},0);
		setTimeout(function(){
			$('em.octopus').css({'background-position':'0 -56px'});				
		},200);
		setTimeout(function(){
			$('em.octopus').css({'background-position':'0 -112px'});				
		},400);
		setTimeout(function(){
			$('em.octopus').css({'background-position':'0 -168px'});
		},600);
		setTimeout(function(){
			$('em.octopus').css({'background-position':'0 -224px'});
		},800);
		setTimeout(function(){
			$('em.octopus').css({'background-position':'0 -280px'});
		},1000);
		setTimeout(function(){
			$('em.octopus').css({'background-position':'0 -336px'});
		},1200);
		setTimeout(function(){
			$('em.octopus').css({'background-position':'0 -392px'});
		},1400);
		setTimeout(function(){
			$('em.octopus').css({'background-position':'0 -448px'});
		},1600);
		setTimeout(function(){
			$('em.octopus').css({'background-position':'0 -504px'});
		},200);
		setTimeout(function(){
			$('em.octopus').css({'background-position':'0 -560px'});
		},2000);
		setTimeout(function(){
			$('em.octopus').css({'background-position':'0 -616px'});
		},2200);
		setTimeout(function(){
			$('em.octopus').css({'background-position':'0 -672px'});
		},2400);
		setTimeout(function(){
			$('em.octopus').css({'background-position':'0 -728px'});
		},2600);
		setTimeout(function(){
			$('em.octopus').css({'background-position':'0 -784px'});
		},2800);
	
	}
	Octopusfade();
	setInterval(function(){
		Octopusfade();
	},2800);
	
})
