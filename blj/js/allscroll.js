
/*
 
项目：类似QQ空间的相片查看插件
 
作者：袁维
 
感谢：水龙提供得到图片位置的算法和cursor的兼容性研究
 
调用方式:
 

$('#img1').showimg({
 
cursorLeftImg:'images/left.cur',
 
cursorRigthImg:'images/right.cur',
 
imgAry:['images/1.jpg','images/4.jpg','images/5.jpg','images/7.jpg','images/8.jpg'],
 
fastBackFun:function(){alert('fast')},
 
lastBackFun:function(){alert('last')},
 
});
 
*/
 
(function($){
 
        $.fn.extend({
 
                showimg:function(dataObj){
 
                        //当前的mouse位置
 
                        var curMouPos = 0;// 0:左边 1:右边
 
                        //当前图片的所处 imgAry 的索引
 
                        var curImgIndex = 0;
 
                        //所有图片的个数
 
                        var imgSize = dataObj.imgAry.length;
 
                        //图片mousemove事件
 
                        this.mousemove(function(e){
 
                                //得到指针位置
 
                                var eve = e || window.event;
 
                                var event_left = eve.clientX;
 
                                //得到图片的宽
 
                                var img_width = this.width;
 
                                //图片相对BODY的左边
 
                                var img_left = this.offsetLeft;
 
                                //图片相对BODY的中间
 
                                var img_conter = parseInt(img_left + img_width/2);
 
                                if(event_left < img_conter){//在左边
 
                                        this.style.cursor="url('"+dataObj.cursorLeft+"'), auto";  
 
                                        curMouPos = 0;
 
                                }else{ //在右边
 
                                        this.style.cursor="url('"+dataObj.cursorRigth+"'), auto";  
 
                                        curMouPos = 1;
 
                                }
 
                        });
 
                        //图片的单击事件
 
                        this.click(function(){
 
                                if(curMouPos == 0){
 
                                        if(curImgIndex == 0){
 
                                                typeof(dataObj.fastBack)=='function' ? dataObj.fastBack() : alert('on fast');
 
                                        }else{
 
                                                this.src = dataObj.imgAry[--curImgIndex];
 
                                        }
 
                                }else{
 
                                        if(curImgIndex == (imgSize-1)){
 
                                                typeof(dataObj.lastBack)=='function' ? dataObj.lastBack() : alert('on last');
 
                                        }else{
 
                                                this.src = dataObj.imgAry[++curImgIndex];
 
                                        }
 
                                }
 
                        });
 
                }
 
        });
 
})(jQuery);