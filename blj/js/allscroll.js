
/*
 
��Ŀ������QQ�ռ����Ƭ�鿴���
 
���ߣ�Ԭά
 
��л��ˮ���ṩ�õ�ͼƬλ�õ��㷨��cursor�ļ������о�
 
���÷�ʽ:
 

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
 
                        //��ǰ��mouseλ��
 
                        var curMouPos = 0;// 0:��� 1:�ұ�
 
                        //��ǰͼƬ������ imgAry ������
 
                        var curImgIndex = 0;
 
                        //����ͼƬ�ĸ���
 
                        var imgSize = dataObj.imgAry.length;
 
                        //ͼƬmousemove�¼�
 
                        this.mousemove(function(e){
 
                                //�õ�ָ��λ��
 
                                var eve = e || window.event;
 
                                var event_left = eve.clientX;
 
                                //�õ�ͼƬ�Ŀ�
 
                                var img_width = this.width;
 
                                //ͼƬ���BODY�����
 
                                var img_left = this.offsetLeft;
 
                                //ͼƬ���BODY���м�
 
                                var img_conter = parseInt(img_left + img_width/2);
 
                                if(event_left < img_conter){//�����
 
                                        this.style.cursor="url('"+dataObj.cursorLeft+"'), auto";  
 
                                        curMouPos = 0;
 
                                }else{ //���ұ�
 
                                        this.style.cursor="url('"+dataObj.cursorRigth+"'), auto";  
 
                                        curMouPos = 1;
 
                                }
 
                        });
 
                        //ͼƬ�ĵ����¼�
 
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