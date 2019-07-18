//通用提示信息
var eimg = '<img src="/Public/manager/images/error.png" style="vertical-align: middle;margin-right:5px;" />';
var rimg = '<img src="/Public/manager/images/right.png" style="vertical-align: middle;margin-right:5px;" />';
var loading = '<img src="/Public/manager/images/loading.gif" style="vertical-align: middle;margin-right:5px;" />';
var textempty = '<div class="nogoods"><b></b>购物车中还没有商品，赶紧选购吧！</div>';
var app = '/adminlzadmin/';
var buapp = '/bu/';
if(typeof(picpropath)=='undefined'){
	var picpropath= '';
}
function showmsg(did,msg,mt){
	did = '#'+did;
	if(mt==0){
		$(did).show();
		$(did).html(msg);
	}else{
		var mt = mt*1000;
		$(did).show();
		$(did).html(msg);
		setTimeout(function () {
			$(did).hide();
		},mt);
	}
}
function formatp(v,nums){
	if(typeof(nums) == "undefined"){
		nums = 2;
	}else{
		nums = parseInt(nums);
	}
	v = parseFloat(v/100);
	v = v.toFixed(nums);
	return v;
}
function formatpno(v,nums){
	if(typeof(nums) == "undefined"){
		nums = 2;
	}else{
		nums = parseInt(nums);
	}
	v = parseFloat(v);
	v = v.toFixed(nums);
	return v;
}
function refreshverify(module){
	var src = '/index.php?s='+module+'&a=verify&id='+new Date().getTime();
	$('#verify_src').attr('src',src);
}
//字符长度,中文为2,英文为1
function getByteLen(val) {
	var len = 0;
	for (var i = 0; i < val.length; i++) {
		if (val[i].match(/[^\x00-\xff]/ig) != null) //全角
			len += 2;
		else
			len += 1;
	}
	return len;
}
/*
 function IsLogin(){
 var webtitle = $('#islogin').data('title');
 $.getJSON(
 "/index.php?s=Member&a=islogin",function(data){
 var html = '<ul class="quick-menu"><li class="mytaobao menu-item">';
 if(data.status==1){
 html += '<a href="javascript:void(0);">欢迎您 <strong>'+data.username+'</strong></a>';
 html += '<a href="/index.php?s=Member" class="red">会员中心</a><span class="line">|</span>';
 html += '<a href="/index.php?s=Order">我的订单</a><span class="line">|</span><a href="/index.php?s=Cart">购物车</a><span class="line">|</span>';
 var groupid = data.groupid;
 html += '<a href="/index.php?s=Member&a=logout">退出</a>';
 }else{
 html += '<span>欢迎您访问'+webtitle+'</span><a href="/index.php?s=Member&a=login" class="red">登录</a><span class="line">|</span><a href="/index.php?s=Member&a=reg">注册账号</a>';
 }
 html += '</li></ul>';
 $('#islogin').html(html);
 });
 }
 */
/*
function IsLogin(){
	var webtitle = $('#islogin').data('title');
	$.getJSON(
			"/index.php?s=Member&a=islogin",function(data){
				var html = '';
				if(data.status==1){
					html += '<li>欢迎您<strong>'+data.username+'</strong></li><li><a href="/'+data.member_type+'/">会员中心</li><!--<li class="pr" style="padding-right:16px;"><a href="#"> 消息<span class="num pa">2</span></a></li>--><li class="mytaobao menu-item"><div class="menu">';
					//<a class="menu-hd" href="/order/">已买到的<b></b></a>
					if(data.member_type=='decoration'){
						html += '<a class="menu-hd" href="/decoration/index.php?s=Bespoke&a=index">免费量房</a>';
					}else{
						html += '<a class="menu-hd" href="/order/">已买到的<b></b></a>';
						html += '<div class="menu-bd"><div class="menu-bd-panel"><ul class="menu-bd-downmenu"><li><a href="/order/index/stat/0/">等待付款</a></li><li><a href="/order/index/stat/1/">等待发货</a></li><li><a href="/order/index/stat/3/">交易成功</a></li></ul></div><s class="r"></s><s class="rt"></s><s class="lt"></s><s class=b></s><s class="b b2"></s><s class="rb"></s><s class="lb"></s> </div>';
					}
					html += '</div></li>';

					if(data.member_type=='decoration'){
					}else{
						html += '<li><a href="/member/myplan/">我的装修方案</a><li>';
					}
					html += '<li><a href="/cart">购物车</a><li><a href="/index.php?s=Member&a=logout">安全退出</a></li>';

				}else{
					html += '<li>欢迎您访问'+webtitle+'</li><li><a href="/index.php?s=Member&a=login" class="red">登录</a></li><li><a href="/index.php?s=Member&a=login2">注册</a></li><li><a href="/index.php?s=Member&a=forget">忘记密码</a></li>';
				}
				html += '';
				$('#islogin').html(html);
			});
}
*/

function IsLogin(){
	var webtitle = $('#islogin').data('title');
	$.getJSON(
			"/index.php?s=Member&a=islogin",function(data){
				var html = '';
				if(data.status==1){

					if(data.member_type=='decoration'){
						html += '<div class="lr pr">'
								+'<span class="fl pt10 pr10">'+data.username+'</span>'
								+'<img width="30" height="30" alt="'+data.username+'" src="http://pic1.720zhuang.com/Public/Uploads/face/201703/58da056dea082.jpg_300x300.jpg" />'
								+'<div class="login_down-menu">'
								+'<a href="/'+data.member_type+'/"><i class="dmenu01"></i>会员中心</a>'
								+'<a href="/index.php?s=Member&a=logout"><i class="dmenu06"></i>安全退出</a>'
								+'</div>'
								+'</div>'
					}else {
						html += '<div class="lr pr">'
								+'<span class="fl pt10 pr10">'+data.username+'</span>'
								+'<img width="30" height="30" alt="'+data.username+'" src="'+data.userface+'" />'
								+'<div class="login_down-menu">'
								+'<a href="/'+data.member_type+'/"><i class="dmenu01"></i>会员中心</a>'
								+'<a href="/order/index"><i class="dmenu02"></i>商城订单</a>'
								+'<a href="/member/requirementorders"><i class="dmenu03"></i>装修订单</a>'
								+'<a href="/member/myplan"><i class="dmenu04"></i>我的设计</a>'
								+'<a href="/cart"><i class="dmenu05"></i>购物车</a>'
								+'<a href="/index.php?s=Member&a=logout"><i class="dmenu06"></i>安全退出</a>'
								+'</div>'
								+'</div>'
					}

				}else{
					html = '  <div class="lrBox"> <a href="/index.php?s=Member&a=login" title="免费登录">登录</a> <span> | </span> <a href="/index.php?s=Member&a=login2" class="red_a" title="快捷注册">快捷注册</a> </div>'
				}


				$('#islogin').html(html);
				if($("#book_mobile").length>0 && data.mobile)$("#book_mobile").val(data.mobile)
			});
}


function CheckSellerLogin(){
	if($('#myusername').val()==''){
		showmsg('mylogin_msg',eimg+'请输入用户名',0);
		return;
	}
	if($('#mypassword').val()==''){
		showmsg('mylogin_msg',eimg+'请输入密码',0);
		return;
	}
	CheckSellerLoginSubmit();
}

function CheckSellerLoginSubmit(){
	$('#mylogin_msg').html(loading+" 正在登录中");
	$.ajax({
		url: 'index.php?s=Seller&a=loginajax',
		type: 'POST',
		dataType: 'json',
		data: { username: $("#myusername").val(),password: $("#mypassword").val() },
		timeout: 60000,
		success: function (data, txtSataus) {//请求成功时执行的方法
			if(data.status==1){
				//IsLogin();
				//alert(data.msg);
				window.location.href='/seller/';
			}else{
				//alert('ccc');
				$('#mylogin_msg').html(eimg+data.msg);
			}
		}
	});
}
function Logout(){
	jQuery.getJSON(
			"/Member/logout/",
			function(data){
				if(data.status==1){
					IsLogin();
				}
			}
	);
}
function json_post(url,formid,datainfo,jump,freshparent){
	//formid与datainfo只能一个有值
	if(formid!=''){
		datainfo = $('#'+formid).serialize();
	}
	if(formid==''&&datainfo==''){
		return ;
	}
	$.ajax({
		url: url,
		type: 'POST',
		dataType: 'json',
		data: datainfo,
		timeout: 60000,
		success: function (data){
			if(data.status==1){
				//$('#'+did).html(data.msg);
				layer.msg(data.msg);
				if(freshparent==1){
					parent.refreshobj();
					var index = parent.layer.getFrameIndex(window.name);
					parent.layer.close(index);
				}else{
					if(jump!=''){
						window.location.href=jump;
					}
				}
			}else{
				layer.msg(data.msg);
			}
		}
	});
}
//地址相关
function clickli(ii){
	changeli(ii);
	changeaddressbottom(ii);
}
function changeaddressbottom(iii){

	var address = $('#address-list li:eq('+iii+')').find('label span.myaddress').html();

	var truename = $('#address-list li:eq('+iii+')').find('label em.truename').html();
	var mobile = $('#address-list li:eq('+iii+')').find('label em.mymobile').html();
	$('#J_AddrConfirm').html(address);
	$('#J_AddrNameConfirm').html(truename+' '+mobile);
}
function changeli(i){
	//.siblings().removeClass("J_DefaultAddr selected");
	$("#address li").siblings().removeClass("J_DefaultAddr selected");
	$("#address li:eq("+i+")").addClass("J_DefaultAddr selected");
	$('a.set-default').hide();
	$("#address li:eq("+i+")").find("a.set-default").show();
	$("#address li:eq("+i+")").find("input[type=radio]").attr("checked",true);
}
//倒计时跳转
function CountdownTime(did,url) {
	var o = $('#'+did);
	var times = o.html();
	//alert(url);
	if(times<1) {
		window.location.href=url;
	}else{
		times--;
		o.html(times);
		setTimeout(function() {
					CountdownTime(did,url);
					//alert(wait);
				},
				1000)
	}
}

function Select_Text(writetype,wheader,text,text1,fonttype,fontvalue,formname,isec,opstr,boxvalue,iskh){
	//alert(isec);
	//return ;
	var str="";
	var showselectheader='show';
	//document.write(text);
	var texts= new Array();
	var text1s= new Array();
	if(typeof(text1)=="undefined") text1='';

	texts=text.split("|");
	text1s=text1.split("|");

	if(typeof(opstr) == "undefined") {
		opstr = '';
	}
	if(typeof(opstr) == "undefined") {
		boxvalue = '';
	}

	switch (writetype)
	{
		case "select":
			if(wheader==1){
				str=str+"<select name=\""+formname;
				if(iskh=="shi"){
					str=str+"[]";
				}
				str=str+"\"";  //判断是否输出select头
				str=str+" id=\""+formname+"\" class=\""+formname+"\">";  //判断是否输出select头
			}
			if(opstr!=''){
				str=str+opstr;
			}
			for(var k=0;k<texts.length;k++){
				if(texts[k]!=""){
					str=str+"<option value=\"";
					str=str+writeselectvalue(fonttype,texts[k],text1s[k],k,fontvalue);
					str=str+"\"";
					str=str+writeselectfor(fonttype,texts[k],text1s[k],k,fontvalue,'selected');
					str=str+">";
					str=str+texts[k];
					str=str+"</option>";
				}
			}
			if(wheader==1) str=str+"</select>";
			break;
		case "radio":
			for(var k=0;k<texts.length;k++){
				str=str+"<label><input value=\"";
				str=str+writeselectvalue(fonttype,texts[k],text1s[k],k,fontvalue);
				str=str+"\"";
				str=str+writeselectfor(fonttype,texts[k],text1s[k],k,fontvalue,'checked');
				str=str+" type=\"radio\" class=\""+formname+"\" name=\""+formname;
				if(iskh=="shi"){
					str=str+"[]";
				}
				str=str+"\" autocomplete=\"off\" id=\""+formname+"\"/>";
				str=str+texts[k]+"</label>&nbsp;&nbsp;";
			}
			break;
		case "text":
			str=str+"<input value=\"";
			str=str+fontvalue;
			str=str+"\" type=\"text\" name=\""+formname;
			if(iskh=="shi"){
				str=str+"[]";
			}
			str=str+"\" autocomplete=\"off\" id=\""+formname+"\"/>";
			break;
		case "textarea":
			str=str+"<textarea class=\"textarea\"";
			str=str+" name=\""+formname;
			if(iskh=="shi"){
				str=str+"[]";
			}
			str=str+"\" autocomplete=\"off\" id=\""+formname+"\">";
			str=str+fontvalue;
			str=str+'</textarea>';
			break;
		case "write":
			for(var k=0;k<texts.length;k++){
				//alert(texts[k]);
				str=str+'<span class="text_'+k+'">'+writewritefor(fonttype,texts[k],text1s[k],k,fontvalue,'')+'</span>';
				//str=str+texts[k];
			}
			break;
		case "box":

			for(var k=0;k<texts.length;k++){
				//str=str+writewritefor(fonttype,texts[k],text1s[k],k,fontvalue,'');
				str += '<label><input type="checkbox" name="'+formname+'[]" autocomplete="off" value="';
				str += writeselectvalue(fonttype,texts[k],text1s[k],k,fontvalue);
				//if(boxvalue!=''){
				//	str += '1';
				//	alert(9999)
				//}else{
				//	str += writeselectvalue(fonttype,texts[k],text1s[k],k,fontvalue);
				//}

				str += '" id="'+formname+'" ';
				//alert(fontvalue);
				//alert(texts[k]);
				//alert('kkkk'+k)
				if(checkboxvalue(fontvalue,k)){

					//if(fontvalue==1){
					str += ' checked';
				}
				str += ' />'+texts[k]+'</label>&nbsp;&nbsp;';
			}
			break;
	}
	if (typeof(isec) == "undefined") {
		document.write(str);
	}else if(isec==1){
		document.write(str);
	}else{
		return str;
	}
	//document.write(str);
}
function checkboxvalue(v,k){
	if(v=='')return false;
	var vs= v.split('|');
	for(var i=0;i<vs.length;i++){

		if(k==vs[i]){
			return true;
		}
	}
	return false;
}
function writewritefor(f,mytext,mytext1,myk,a,typeid){
	var mystr="";
	//alert(a);
	switch (f)
	{
		case "font":
			if(a==mytext) mystr=mytext;
			break;
		case "font1":
			if(a==mytext1) mystr=mytext;
			break;
		case "numeric":
			if(a==myk) mystr=mytext;
			break;
	}
	return mystr;
}
function writeboxfor(f,mytext,mytext1,myk,a,typeid){
	var mystr="";
	//alert(a);
	switch (f)
	{
		case "font":
			if(a==mytext) mystr=mytext;
			break;
		case "font1":
			if(a==mytext1) mystr=mytext;
			break;
		case "numeric":
			if(a==myk) mystr=mytext;
			break;
	}
	return mystr;
}
function writeselectfor(f,mytext,mytext1,myk,a,typeid){
	var mystr="";

	switch (f)
	{
		case "font":
			if(a==mytext) mystr=" "+typeid;
			break;
		case "font1":
			if(a==mytext1) mystr=" "+typeid;
			break;
		case "numeric":
			if(a==myk) mystr=" "+typeid;
			break;
	}
	return mystr;
}
function writeselectvalue(f,mytext,mytext1,myk,a){
	var mystr="";
	switch (f)
	{
		case "font":
			mystr=mytext;
			break;
		case "font1":
			mystr=mytext1;
			break;
		case "numeric":
			mystr=myk;
			break;
	}
	return mystr;
}
function alert_new(msg,icon,title){
	layer.alert(msg, {
		icon: icon,
		title: title,
		skin: 'layer-ext-moon'
	})
}
function openurl(url,title,width,height){

	layer.open({
		type: 2,
		area: [width+'px', height+'px'],
		fix: false, //不固定
		maxmin: true,
		title: title,
		content: url
	});
}
function reparent(){
	parent.refreshobj();
}
function mylen(s) {
	var l = 0;
	var a = s.split("");
	for (var i = 0; i < a.length; i++) {
		if (a[i].charCodeAt(0) < 299) {
			l++;
		} else {
			l += 2;
		}
	}
	return l;
}
function getbase64(str){
	var basestr = '';
	$.ajax({
		url: '/index.php?s=Base&a=index', 
		type: 'POST', 
		dataType: 'json',
		async: false,
		data: {'q':str}, 
		timeout: 60000,
		success: function (data){
			basestr = data.data;
		}		
	});
	return basestr;
}
function rememberkey(q){
	var cookhistorykey = getCookie('cookhistorykey');
	console.log(cookhistorykey);
	if(cookhistorykey!=''){
		if(checksearch(cookhistorykey,q)==false){
			setCook('cookhistorykey',cookhistorykey+'|||'+q);
		}
	}else{
		setCook('cookhistorykey',q);
	}
}
function checksearch(cookhistorykey,q){
	var arr = cookhistorykey.split('|||');
	for(var i=0;i<arr.length;i++){
		if(q==arr[i]){
			return true;
		}
	}
	return false;
}
function mysearch() {
	var myq = $("#myq").val();
	var base64 = '';
	//base64=BASE64.trim(base64);
	if (mylen(myq) < 2||myq=='输入搜索关键字') {
		layer.msg('请输入两个以上字符的关键词');
		return false;
	}
	base64 = getbase64(myq);
	rememberkey(myq);
	//return ;
	var url = '';
	if($('#text').html()=='小区'){
		url = '/autonomous/search/';
		url = url+'/q/'+base64;
		layer.open({
			type: 2,
			title: '小区搜索',
			shadeClose: true,
			shade: 0.8,
			area: ['965px', '90%'], //宽高
			content: url  //iframe的url
		});

	}else{
		var mycid = $('#mycid').val();
		url = '/pro/';
		//手机的列表和电脑的不一样
		if($('#ism').val()==1){
			url += 'indexm';
		}else{
			url += 'index';
		}
		url = url+'/q/'+base64;
		if(mycid>0){
			url += '/cid/'+mycid+'/';
		}
		window.location.href = url;
	}

}
$(document).ready(function() {
	$('#myq').keydown(function(event) {
		if (event.keyCode == 13) {
			//$('#myq').each(function() {
			mysearch();
			//});
		}
	});
	$('#sreachbtn').click(function(){
		mysearch();
	});
	$('#sethome').click(function(){
		SetHome();
	});
	$('#addf').click(function(){
		addFavorite();
	});

	//$('#shop_cart').hover(function(){
	//$('#shop_cart_menu').show();
	//},function(){
	//$('#shop_cart_menu').hide();
	//});
	$('#shop_cart').click(function(){
		window.location.href='/cart/';
	});

	$('#shop_cart').hover(function(){
		$('#shop_cart_menu').show();
	},function(){
		$('#shop_cart_menu').hide();
	});

	$('#shop_cart_menu').hover(function(event){
		$(this).show();
		event.stopPropagation();
	},function(event){
		$(this).hide();
		event.stopPropagation();
	});


	$('#modulexld dd.delcart').live('click',function(){
		var id = $(this).data('id');
		var obj = $(this).parent().parent();
		$.ajax({
			url: '/index.php?s=Cart&a=delGoods&typeid=0',
			type: 'POST',
			dataType: 'json',
			data:{id:id},
			async : false,
			timeout: 60000,
			success: function (data) {
				if(data.status==1){
					obj.remove();
					loadcart();
					$('#shop_cart_nums').html($('#modulexld dd.delcart').length);
					/*
					 $('#shop_cart_nums').html($('#modulexld a.delcart').length);
					 if($('#modulexld a.delcart').length==0){
					 $('#modulexld').html(textempty);
					 }
					 */
				}
			}
		});

	});


	$('#cleancart').live('click',function(){
		var obj = $(this).parent();

		if(confirm("您确定要清空购物车吗？")!=true){
			return ;
		}
		$.ajax({
			url: '/index.php?s=Cart&a=delGoodsAll&typeid=0',
			type: 'POST',
			dataType: 'json',
			data:'',
			async : false,
			timeout: 60000,
			success: function (data) {
				if(data.status==1){
					obj.remove();
					loadcart();
					$('#shop_cart_nums').html('0');
					/*
					 $('#shop_cart_nums').html($('#modulexld a.delcart').length);
					 if($('#modulexld a.delcart').length==0){
					 $('#modulexld').html(textempty);
					 }
					 */
				}
			}
		});

	});



	if($("#myq").length>0){
		//if($('#ismobile').length>0){
			$("#myq").focus().autocomplete('/index.php?s=Autocomplete', {
				multiple: true,
				width: 553,
				dataType: "jsonp",
				parse: function(data) {
					return $.map(data, function(row) {
						return {
							data: row,
							value: row.name,
							result: row.name
						}
					});
				},
				formatItem: function(item) {
					return format(item);
				}
			}).result(function(e, item) {
				var keyword = format1(item);
				var mynewcid = format2(item);
				//alert(keyword);
				$('#myq').val(keyword);
				$('#mycid').val(mynewcid);
				mysearch();
				//window.location.href="/pro/index/q/dd/";
				//$("#content").append("<p>selected " + format(item) + "</p>");
			});
		//}
	}

	$('a.mydel_one').live('click',function(){
		var id = $(this).data('id');
		var url = $(this).data('url');
		layer.confirm('您确定要执行此操作，请慎重操作', {
			btn: ['确定','放弃'] //按钮
		}, function(){
			window.location.href=url;
		});
	});
	$('#back').click(function(){
		var url = $(this).data('url');
		if(url!=''){
			window.location.href=url;
		}else{
			history.go(-1);
		}
	});





});
function format(mail) {
	return mail.name;
}
function format1(mail) {
	return mail.k;
}
function format2(mail) {
	return mail.cid;
}
function formatItem(row) {
	alert('ccc');
	//return row[0]+"(<strong>id: "+row[1]+"</strong>)";
}
function formatResult(row) {
	return row[0].replace(/(<.+?>)/gi, '');
}
function SetHome(obj,url){
	try{
		obj.style.behavior='url(#default#homepage)';
		obj.setHomePage(url);
	}catch(e){
		if(window.netscape){
			try{
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			}catch(e){
				alert("抱歉，此操作被浏览器拒绝！请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
			}
		}else{
			alert("抱歉，您所使用的浏览器无法完成此操作。您需要手动将【"+window.location+"】设置为首页。");
		}
	}
}
//加入收藏夹
function addFavorite(){
	if (document.all){//IE
		try{
			window.external.addFavorite(window.location.href,document.title);
		}catch(e){
			alert( "加入收藏失败，请使用Ctrl+D进行添加" );
		}

	}else if (window.sidebar){
		window.sidebar.addPanel(document.title, window.location.href, "");
	}else{
		alert( "加入收藏失败，请使用Ctrl+D进行添加" );
	}
}
function loadcart(){
	var url = '/index.php?s=Cart&a=getcart_ajax&type=1';
	$.ajax({
		url: url,
		type: 'GET',
		async : false,
		dataType: 'json',
		timeout: 60000,
		success: function (data) {//请求成功时执行的方法
			var text = '';

			if(data.status==1){
				var all_price = 0.00;
				var json = data.data;
				if(json){
					text += '<div class="shopping_wrap">';
					text += '<ul class="shopping_list_ul">';
					for(var i=0;i<json.length; i++){
						text += '<li><dl class="clearfix">';
						text += '<dt class="l_img"><img src="'+picpropath+json[i].picurl+'_90.jpg" alt="'+json[i].title+'"/></dt>';
						text += '<dd class="m_info"><a target="_blank" href="/pro/view/id/'+json[i].itemid+'/">'+json[i].title+'</a>';
						text += '<p class="pt5"><span class="red_a">&yen;'+json[i].price+'</span> X '+json[i].quantity+'</p>';
						text += '</dd><dd class="del_ico delcart" data-id="'+json[i].id+'"></dd></dl></li>';

						// text += '<dl class="cl"><dd class="m"><a href="/pro/view/id/'+json[i].itemid+'/"><img height="59" width="87" alt="'+json[i].title+'" src="'+json[i].picurl+'_90.jpg"/></a></dd><dt><em><a href="javascript:void(0);" class="delcart" data-id="'+json[i].id+'"></a></em><span><a class="bt" title="'+json[i].title+'" href="/pro/view/id/'+json[i].itemid+'/">'+json[i].title+'</a></span></dt><dd><b class="red">￥'+json[i].price+'</b><b class="c_9">×'+json[i].quantity+'</b></dd></dl>';
						all_price += json[i].price*json[i].quantity;
					}
					text += '</ul></div><div class="shopping_bottom clearfix">';
					text += '<div class="settle_accounts"> 共<span class="red_a">'+json.length+'</span>件商品';
					text += '共计<span class="red_a">&yen;'+all_price.toFixed(2)+'</span>元</div>';
					text += '<a class="ml10 pt10 lblue fl" id="cleancart" href="javascript:;">清空</a>';
					text += '<a class="settle_btn" href="/cart/" target="_blank">去结算<em></em></a></div>';
					// text += '<div class="jg"><em><a href="/cart/">去结算</a></em>共<b class="red" id="shop_cart_nums1">'+json.length+'</b>件商品，共计<b class="red">￥'+all_price.toFixed(2)+'</b></div>';
					$('#shop_cart_nums').html(json.length);
				}else{
					text = textempty;
					//$('#shop_cart_menu').width('300');
				}
			}else{
				text = textempty;
				//$('#shop_cart_menu').width('300');
			}
			$('#modulexld').html(text);

		}

	});
}

function loadcart_cart(){
	if($('#shop_cart_nums').length==0){
		return ;
	}
	var url = '/index.php?s=Cart&a=getcart_ajax';
	$.ajax({
		url: url,
		type: 'GET',
		async : false,
		dataType: 'json',
		timeout: 60000,
		success: function (data) {//请求成功时执行的方法
			var text = '';
			if(data.status==1){
				var json = data.data;
				$('#shop_cart_nums').html(json.length);

			}
		}

	});
}

//只能输入数字
function onlyNum() {
	if(!(event.keyCode==46)&&!(event.keyCode==8)&&!(event.keyCode==37)&&!(event.keyCode==39))
		if(!((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=96&&event.keyCode<=105)))
			event.returnValue=false;
}
function remoupfile(url,json) {
	$.ajax({
		url: url,
		type: 'POST',
		dataType: 'json',
		data: {'src':json.savename,'oldname':json.oldname,'size':json.size,'ext':json.ext,'md5':json.md5},
		timeout: 60000,
		success: function (data){
			if(data.status==1){
				//
			}else{
			}
		}
	});
}
//远程上传
function remoupfile(url,json,myobj) {
	$.ajax({
		url: url,
		type: 'POST',
		dataType: 'json',
		data: {'src':json.savename,'oldname':json.oldname,'size':json.size,'ext':json.ext,'md5':json.md5},
		timeout: 60000,
		success: function (data){
			if(data.status==1){
				var myv = myobj.val();
				if(myv==''){
					myobj.val(data.fid);
				}else{
					myobj.val(myv+','+data.fid);
				}
			}else{
			}
		}
	});
}
function checkboxall(allname,name){
	if($('#'+allname).attr("checked")=='checked'){
		$('.'+name).attr("checked",true);
	}else{
		$('.'+name).attr("checked",false);
	}
}
function checkisall(allname,name){
	if($('.'+name).length==$('.'+name+':checked').length){
		$('#'+allname).attr("checked",true);
	}else{
		$('#'+allname).attr("checked",false);
	}
}
function getCookie(name){
	var strCookie=document.cookie;
	var arrCookie=strCookie.split("; ");
	for(var i=0;i<arrCookie.length;i++){
		var arr=arrCookie[i].split("=");
		if(arr[0]==name)return arr[1];
	}
	return "";
}
function setCook(name,v){
	var cookiestr=name+"="+v;
	document.cookie=cookiestr;
}
function checkkey2(value, e) {
	var key = window.event ? e.keyCode : e.which;
	if ((key > 95 && key < 106) || (key > 47 && key < 60)) {

	}else if (key != 8) {
		if (window.event){
			//ie
			e.returnValue = false;
		}else{
			//火狐
			e.preventDefault();
		}
	}
}
function formatsku(v){
	if(v=='') return '';
	var str = '';
	var str1 = '';
	v = v.replace(/@/g,':</em><span class="skucon">');
	v = v.replace(/_/g,'</span><em class="skutit">');
	v = '<em class="skutit">'+v+'</span>';
	return v;
}
//判断是否为时间格式
function CheckTime(date,datetype){
	var DateFormatter = {
		Patterns:{
			YEAR      : /y/g,
			MONTH     : /M/g,
			DAY       : /d/g,
			HOUR      : /H/g,
			MINUTE    : /m/g,
			SECOND    : /s/g,
			MILSECOND : /f/g
		},
		FormatPatterns:function(format){
			return eval("/"+
					format
							.replace(this.Patterns.YEAR,'[0-9]')
							.replace(this.Patterns.MONTH,'[0-9]')
							.replace(this.Patterns.DAY,'[0-9]')
							.replace(this.Patterns.HOUR,'[0-9]')
							.replace(this.Patterns.MINUTE,'[0-9]')
							.replace(this.Patterns.SECOND,'[0-9]')
							.replace(this.Patterns.MILSECOND,'[0-9]')+
					"/g");
		},
		DateISO:function(value,format){
			var formatReg = "";
			if(value == "" || format=="")
				return false;
			formatReg = this.FormatPatterns(format);
			//alert(formatReg);
			return formatReg.test(value);
		}
	}
	var ret = DateFormatter.DateISO(date, datetype);
	return ret;
}
function getStrLength(str) {
	var cArr = str.match(/[^\x00-\xff]/ig);
	return str.length + (cArr == null ? 0 : cArr.length);
}

//通用表单验证
function main_form_check(did,str){

	var obj = $('#'+did);
	if(obj.length==0){
		return true;
	}
	var strs= new Array();
	var strschild= new Array();
	strs=str.split("|");
	var checked=true;
	var field,type,blen,elen,vobj,placeholder,inputtype,len;
	//判断类型
	var inputselect;
	var shoobj;
	for(var i=0;i<strs.length;i++){
		strschild = strs[i].split(",");
		len = strschild.length;
		if(len>3){
			field = strschild[0];
			inputselect = main_form_check_type(strschild[1]);
			type = parseInt(strschild[2]);
			blen = parseFloat(strschild[3]);
			elen = parseFloat(strschild[4]);
			//alert(inputselect);
			vobj = obj.find(inputselect+'[name='+field+']');
			inputtype = vobj.attr('type');
			if(inputtype=='hidden'){
				shoobj = obj.find('span.'+field);
			}else{
				shoobj = vobj;
			}
			//return false;
			placeholder = vobj.attr('placeholder');
			if(typeof(placeholder) == "undefined"){
				placeholder = '';
			}
			//字符判断
			if(type==0){
				if(vobj.val().length<blen||vobj.val().length>elen){
					main_form_check_err(vobj,placeholder,shoobj);
					return false;
				}
			}else if(type==1){//数字判断
				if(parseFloat(vobj.val())<blen||parseFloat(vobj.val())>elen){
					main_form_check_err(vobj,placeholder,shoobj);
					return false;
				}
			}

			//checked=false;
		}
	}
	return checked;
}
function main_form_check_err(vobj,placeholder,shoobj){
	vobj.focus();
	layer.tips(''+placeholder+'',shoobj);
}
function main_form_check_type(vid){
	switch (vid){
		case '0':
			return 'input';
		case '1':
			return 'select';
		case '2':
			return 'radio';
		case '3':
			return 'checkbox';
		case '4':
			return 'textarea';
	}


}