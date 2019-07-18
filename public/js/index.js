$(document).ready(function() {
	var flag = 1;
	$('.navbt').bind('click', function() {
		if (flag) {
			$(".content").animate({
				'margin-left': '-40%'
			},300,function(){
				flag = 0;
			});
			
			$(".content").swipe( {
		        swipeRight:function(event, direction, distance, duration, fingerCount, fingerData) {
		          $(".content").animate({
						'margin-left': '0'
					},300,function(){
						 flag = 1;
					});
		         
		        },
		        threshold:0
		 	});	
		} else {
			$(".content").animate({
				'margin-left': '0'
			},300,function(){
				$('.content').unbind();
				flag = 1;
			});

		}
	}); 
});



function test1(){
	var tempStr=document.getElementById('test').value;
	if(tempStr=="请输入关键字搜索")
	{
		document.getElementById('test').value="";
	}
}
function test2(){
	var tempStr=document.getElementById('test').value;
	if(tempStr=="")
	{
		document.getElementById('test').value="请输入关键字搜索";
	}
}

function test13(){
	var tempStr=document.getElementById('test6').value;
	if(tempStr=="贵公司名称")
	{
		document.getElementById('test6').value="";
	}
}
function test14(){
	var tempStr=document.getElementById('test6').value;
	if(tempStr=="")
	{
		document.getElementById('test6').value="贵公司名称";
	}
}

function test15(){
	var tempStr=document.getElementById('test7').value;
	if(tempStr=="请填写您的收件地址")
	{
		document.getElementById('test7').value="";
	}
}
function test16(){
	var tempStr=document.getElementById('test7').value;
	if(tempStr=="")
	{
		document.getElementById('test7').value="请填写您的收件地址";
	}
}

function test17(){
	var tempStr=document.getElementById('test8').value;
	if(tempStr=="姓名")
	{
		document.getElementById('test8').value="";
	}
}
function test18(){
	var tempStr=document.getElementById('test8').value;
	if(tempStr=="")
	{
		document.getElementById('test8').value="姓名";
	}
}

function test19(){
	var tempStr=document.getElementById('test9').value;
	if(tempStr=="手机号码")
	{
		document.getElementById('test9').value="";
	}
}
function test20(){
	var tempStr=document.getElementById('test9').value;
	if(tempStr=="")
	{
		document.getElementById('test9').value="手机号码";
	}
}

//导航
$(function(){
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 80){
			$('.headerWrap_wc').removeClass('large').addClass('small');
		} else {
			$('.headerWrap_wc').removeClass('small').addClass('large');
		}
	});
});	
$(function(){
$('.cateMenu  ul  li').click(function () {
        $('.cateMenu  ul  li').children().removeClass('cur');
        $(this).children().addClass('cur');
    });
});	
$(function(){
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 80){
			$('.switcher').removeClass('large').addClass('smalll');
		} else {
			$('.switcher').removeClass('smalll').addClass('large');
		}
	});
});

$(function(){
		
	//微信弹出
	;(function( social ){
		if ( !social.length ) return;
		var show = {
			"display" : "block",
			"top" : 70,
			"opacity" : 1
		};
		var hide = {
			"display" : "none",
			"top" : 60,
			"opacity" : 0
		};

		social.on("mouseenter", ".slist", function(){
			var self = $(this),
				otherLink = social.find(".slist").not( this ),
				siblings = self.find(".sqrcode_wrap"),
				otherBox = social.find(".sqrcode_wrap").not( siblings );

			if ( self.hasClass("active") ) return;

			otherLink.removeClass("active");
			TweenLite.to( otherBox, 0.3, hide);

			self.addClass("active");
			TweenLite.to( siblings, 0.3, show);
			return false;
		}).on("mouseleave", ".slist", function(){
				$(this).removeClass("active");
				TweenLite.to( $(this).find(".sqrcode_wrap"), 0.3, hide);
		});
	})( $("#social") );
	
	//service
	;(function( service ){
		if ( !service.length ) return;
		var timer = null;
		var speed = 5000;
		var serLi = service.children(".serLi");
		var isAuto = serLi.length > 4 ? true : false;

		var config = {
			topHover : {
				"top" : -12
			},
			topLink : {
				"top" : 0
			},
			opaHover : {
				"top" : 12,
				"opacity" : 1
			},
			opaLink : {
				"top" : 0,
				"opacity" : 1
			},
			removeStyle : {
				"width" : 229,
				"marginRight" : 14,
				"marginLeft" : 14
			}
		}
		

		function ctrl( status ){//控制
			if ( !isAuto ) return;
			if ( status) {
				timer = setTimeout(autoSwitch, 3000);
			} else {
				clearTimeout( timer );
			}
		}

		function autoSwitch(){//自动切换
			TweenLite.to( serLi.eq(0), 1, {
				opacity : 0,
				"onComplete" : function(){
					TweenLite.to( serLi.eq(0), 0.5, {
						"width" : 0,
						"marginLeft": 0,
						"marginRight": 0,
						"onComplete" : function(){
							serLi.eq(0).appendTo( service ).css( config.removeStyle );
							serLi = service.children(".serLi");
							TweenLite.fromTo( serLi.eq(3).show() , 1, {
								opacity : 0
							}, {
								opacity : 1
							});
							clearTimeout( timer );
							timer = setTimeout(autoSwitch, speed);
						}
					});
				}
			});
		}

		serLi.filter(":gt(3)").hide();//隐藏多余

		ctrl( true );//start

		serLi.each(function(){//hover
			var self = $(this);
			var wrap = self.children(".serWrap")
			var ico = self.find(".serIco");
			var button = self.find(".ser_bg");

			self.hover(function(){
				TweenLite.to( wrap, 0.3, config.topHover);
				TweenLite.to( ico, 0.5, config.bgHover);
				TweenLite.to( button, 0.5, config.opaHover);
				ctrl( false);
			}, function(){
				TweenLite.to( wrap, 0.3, config.topLink);
				TweenLite.to( ico, 0.5, config.bgLink);
				TweenLite.to( button, 0.5, config.opaLink);
				ctrl( true );
			});
		});

		var detBtn = $(".icaseDetLink");
		detBtn.hover(function(){
			TweenLite.to( detBtn, 0.5, config.bgHover);
		}, function(){
			TweenLite.to( detBtn, 0.5, config.bgGrey);
		});
	})( $("#service") );

	//float
	$(".float ul li").hover(function(){
		$(this).find(".floatbox").stop().animate({"width":"124px"},0.1);	
	},function(){
		$(this).find(".floatbox").stop().animate({"width":"54px"},0.1);
	});
	
	//弹出层
	$(".cssBtn1").click(function(){
		$("#TB_overlayBG").fadeIn(500).css({
			display:"block",height:$(document).height()
		});
		$(".cssOlContent1").fadeIn(800).css({
			left:($("body").width()-$(".cssOlContent2").width())/2-20+"px",
			top:($(window).height()-$(".cssOlContent2").height())/2+$(window).scrollTop()+"px",
			display:"block"
		});
	});
	
	$(".cssBtn2").click(function(){
		$("#TB_overlayBG").fadeIn(500).css({
			display:"block",height:$(document).height()
		});
		$(".cssOlContent2").fadeIn(800).css({
			left:($("body").width()-$(".cssOlContent2").width())/2-20+"px",
			top:($(window).height()-$(".cssOlContent2").height())/2+$(window).scrollTop()+"px",
			display:"block"
		});
	});
	
	$(".cssBtn3").click(function(){
		$("#TB_overlayBG1").fadeIn(500).css({
			display:"block",height:$(document).height()
		});
		$(".cssOlContent3").fadeIn(800).css({
			left:($("body").width()-$(".cssOlContent3").width())/2-20+"px",
			top:($(window).height()-$(".cssOlContent3").height())/2+$(window).scrollTop()+"px",
			display:"block"
		});
	});
	
	$(".cssBtn4").click(function(){
		$("#TB_overlayBG").fadeIn(500).css({
			display:"block",height:$(document).height()
		});
		$(".cssOlContent4").fadeIn(800).css({
			display:"block"
		});
	});
	
	$(".cssBtn5").click(function(){		
		$.post("/index/nowpass",{
        thepass:$("#thepass").val(),id:$("#id").val()
        },function(data,textStatus){
	    if(data=="ture"){
        $(".blurr").fadeOut(500);	
		$(".login").fadeOut(500);
		$(".blur").fadeIn(800).css({"filter": "progid:DXImageTransform.Microsoft.Blur(PixelRadius=0, MakeShadow=false)","-webkit-filter": "blur(0px)", "-moz-filter": "blur(0px)","-o-filter": "blur(0px)","-ms-filter": "blur(0px)","filter": "blur(0px)"});
		}else{
		$("#errormsg").fadeIn(500);// 这个是渐渐消失 
        $("#errormsg").fadeOut(3000); 
		}
          });
		
	});
	

	
	$(".jxll").click(function(){
		$("#TB_overlayBG").fadeOut(300);
	 	$(".cssOlContent2").fadeOut(300);
	});
	$(".jxl2").click(function(){
		$("#TB_overlayBG1").fadeOut(300);
	 	$(".cssOlContent3").fadeOut(300);
	});
	
	$(".guangbi").click(function(){
		$("#TB_overlayBG").fadeOut(300);
		$("#TB_overlayBG1").fadeOut(300);
		$(".cssOlContent1 ").fadeOut(300);
		$(".cssOlContent2 ").fadeOut(300);
		$(".cssOlContent3 ").fadeOut(300);
		$(".cssOlContent4 ").fadeOut(300);
	});
	
});
//置顶
$(function() {
	$(window).scroll(function(){
			if ($(window).scrollTop()>500){
				$(".gotop").parent().fadeIn(500);
			}else{
				$(".gotop").parent().fadeOut(500);
			}
		});
//		$(window).scroll(function(){
//			if ($(window).scrollTop()>1600){
//				$(".b_zix").css({"background":"rgba(90,176,79,1)" , "margin":"40px auto"});
//			}else{
//				$(".b_zix").css({"background":"rgba(90,176,79,0.8)" , "margin":"0 auto"});
//			}
//		});
	//当点击跳转链接后，回到页面顶部位置
	$(".gotop").click(function(){
		$('body,html').animate({scrollTop:0},600);
		return false;
	});
	$(window).scroll(function(){
	  if($(window).width()>1200){
			if ($(window).scrollTop()>320){
				$(".questionfl,.aboutfl").css({"position": "fixed","top": "70px","width": "300px"});
			}else{
				$(".questionfl,.aboutfl").css({"position": "relative","top": "0px","width": "25%"});
			}
	  }else if($(window).width()>768){
		  if ($(window).scrollTop()>320){
				$(".questionfl,.aboutfl").css({"position": "fixed","top": "70px","width": "25%"});
			}else{
				$(".questionfl,.aboutfl").css({"position": "relative","top": "0px","width": "25%"});
			}
	  }
		});
    });
			

$(function () {

    var cateMenu = function () {
       
        $(".navCon_on").hover(function(){
            $(".cateMenu").slideDown(800);;
			$(".navCon-cate-title").addClass("hover");
        },
		function () {
		    $(".cateMenu").slideUp(200);
			$(".navCon-cate-title").removeClass("hover");
		})

    }();

});

	
$(function(){
  $(".rsp-btn1").click(function(){
    $(".rsp-nav-box1").slideToggle()
  })
});



/**
 * @author Administrator
 */
function initValidator(base){
	
	$("#form1").validate({
		onkeyup:false,
		//设置验证规则   
		rules: {
		    "taitou": {
				required: true,
				ischinese: true
			},
			"address": {
				required: true
			},
			"jine": {
				required: true,
				digits: true
			},
			"kuaidi": {
				required: true
			},
			"theuser": {
				required: true
			},
			"thetel": {
				required: true,
				isMobile: true
			}
		},
		//设置错误信息  
		messages: {
		    "taitou": {
				required: "&nbsp;",
				ischinese: "&nbsp;"
			},
			"address": {
				required: "&nbsp;"
			},
			"jine": {
				required: "&nbsp;",
				digits: "&nbsp;"
			},
			"kuaidi": {
				required: "&nbsp;"
			},
			"theuser": {
				required: "&nbsp;"
			},
			"thetel": {
				required: "&nbsp;",
				isMobile: "&nbsp;"
			}
		},
		errorElement:"font",
		errorPlacement: function(error,element){},success:"valid",submitHandler: function(form) {  //通过之后回调
      var param = $("#form1").serialize();
      $.ajax({
      type: "POST",                                      //设置ajax方法提交数据的形式       
      url: "/index/invoice_add",                                       //把数据提交到ok.php       
      data: "taitou="+$("#taitou").val()+"&address="+$("#address").val()+"&jine="+$("#jine").val()+"&kuaidi="+$("#kuaidi").val()+"&theuser="+$("#theuser").val()+"&thetel="+$("#thetel").val()+"&beizhu="+$("#beizhu").val(), 
	  success: function(msg){                  //提交成功后的回调，msg变量是ok.php输出的内容。       
	  $(".css_sx1").fadeOut(0);
	  $(".tjcg1").fadeIn(0);
      }       
      });
    }
	});

}



/**
 * @author Administrator
 */
function initValidator1(base){
	
	$("#form2").validate({
		onkeyup:false,
		//设置验证规则   
		rules: {
		    "content": {
				required: true
			},
			"theuser1": {
				required: true
			},
			"thetel1": {
				required: true,
				isMobile: true
			}
		},
		//设置错误信息  
		messages: {
		    "content": {
				required: "&nbsp;"
			},
			"theuser1": {
				required: "&nbsp;"
			},
			"thetel1": {
				required: "&nbsp;",
				isMobile: "&nbsp;"
			}
		},
	  errorElement:"font",
	  errorPlacement: function(error,element){},success:"valid",submitHandler: function(form) {  //通过之后回调
      var param = $("#form2").serialize();
	  var thefujian='';
	  var checkedObj = $('input:checkbox[name="fujian"]:checked'); //获取当前checked的value值 如果选中多个则循环
      checkedObj.each(function() { var isCheck = this.value+','; thefujian += isCheck; });
      $.ajax({
      type: "POST",                                      //设置ajax方法提交数据的形式       
      url: "/index/feedback_add",                                       //把数据提交到ok.php       
      data: "content="+$("#content").val()+"&fujian="+thefujian+"&theuser="+$("#theuser1").val()+"&thetel="+$("#thetel1").val(), 
	  success: function(msg){                  //提交成功后的回调，msg变量是ok.php输出的内容。       
	  $(".css_sx").fadeOut(0);
	  $(".tjcg").fadeIn(0);
      }       
      });
    }
	});

}
