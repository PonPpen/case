
function tabs() {
    var $li = $("[data-title='option_tit'] .hd");
    var $ul = $("[data-content='option_cont'] .bd");
    $li.bind('click', function(e){
        var $this = $(this);
        var $t = $this.index();
        $li.removeClass();
        $this.addClass('cur');
        $ul.css('display','none');
        $ul.eq($t).css('display','block');
    })
}
tabs();

$('.details_box').bind('touchstart touchmove touchend', function(e) {
    if (e.type == 'touchstart') {
        tabs();
        $(this).find('div').addClass('p10');
    } else {
        $(this).find('div').removeClass('p10');
    }
});

$('.menu_open').bind('click', function(e) {
    if ($('#container').hasClass('pull') == false) {
        if (dd == 0) {
            $('#container,#menu,#header,#us_panel').addClass('push');
            dd = 1;
            $(window).bind('touchmove', function(e) {
                e.preventDefault();
                e.stopImmediatePropagation();
            });
            $('#us_panel').addClass('hide');
        } else {
            $('#container,#menu,#header,#us_panel').removeClass('push');
            dd = 0;
            $(window).unbind('touchmove');
        };
    }
    return false;
});

$('.push_msk').bind('touchmove', function(e) {
    if ($('#container').hasClass('pull')) {
        $('.search_open').trigger('click');
    } else if ($('#container').hasClass('push')) {
        $('.menu_open').trigger('click');
    }
    return false;
});

//tab切换click
/*$(function() {
    $('#tab-title span').click(function() {
        $(this).addClass("selected").siblings().removeClass();
        $("#tab-content > ul").hide().eq($('#tab-title span').index(this)).show();
    });
});*/

//多次使用的tab切换
/*$(function() {
 function tabs(tabTit, on, tabCon) {
 $(tabTit).children().bind('click', function(e) {
 $(this).addClass(on).siblings().removeClass(on);
 var index = $(tabTit).children().index(this);
 $(tabCon).children().eq(index).show().siblings().hide();
 });
 };
 tabs("ul[data-title='select_tits']", "selected", "ul[data-content='select_cont']");
 });*/