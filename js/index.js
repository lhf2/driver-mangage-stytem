$(document).ready(function () {
    //弹窗 edit-right.html
    $('.alert-close').click(function(){
        $('.alert-box').hide();
    });
    $('.alert-btnlist').click(function(){
        $('.alert-btnlist').removeClass('cur');
        $(this).addClass('cur');
    })
    //person-type
    var ch=$(document).height();
    $('.main-box').css('min-height',ch-100+'px');
    $('.per-list').click(function(){
        $('.per-list').removeClass('cur');
        $(this).addClass('cur');
        $('.per-list').eq(0).children('img').attr('src','../images/school.png');
        $('.per-list').eq(1).children('img').attr('src','../images/coach.png');
        var imgsrc=$(this).children('img').attr('src');
        if(imgsrc=='../images/school.png'){
            $(this).children('img').attr('src','../images/school1.png')
        }
        if(imgsrc=='../images/coach.png'){
            $(this).children('img').attr('src','../images/coach1.png')
        }
    })
    if(location.href.indexOf('person-type.html')>=0){
        $('.next-btn').click(function(){
            var index=$('.per-list.cur').index();
            if(index==0){
                alert('选择的是驾校')
            }else if(index==1){
                alert('选择的是教练')
            }
        })
    }
    //forget-pass
    if(location.href.indexOf('forget-pass.html')>=0){
        $('.passtype-list').click(function () {
            var index=$(this).index('.passtype-list');
            $('.forget-passhide').hide();
            $('.forget-passhide').eq(index).show();
            if(index==0){
                $('.forget-passtype').css('background',' url("../images/1.png") no-repeat')
            }else if(index==1){
                $('.forget-passtype').css('background',' url("../images/2.png") no-repeat')
            }
            $('.passtype-list').removeClass('cur');
            $(this).addClass('cur');
        })
        $('.type-list').click(function(){
            var index=$(this).index('.type-list');
            $('.type-list').removeClass('cur');
            $(this).addClass('cur');
            $('.form-hide').hide();
            $('.form-hide').eq(index).show();
        })
    }
    //register.html
    $('.main-list-btn').click(function(){
        $('.main-list-btn').removeClass('cur');
        $(this).addClass('cur');
    })
    if(location.href.indexOf('register.html')>=0){
        $('.passtype-list').click(function () {
            $('.passtype-list').removeClass('cur');
            $(this).addClass('cur');
            var index=$(this).index('.passtype-list');
            if(index==0){
                $('.forget-passtype').css('background',' url("../images/zc1.png") no-repeat')
            }else if(index==1){
                $('.forget-passtype').css('background',' url("../images/zc2.png") no-repeat')
            }else if(index==2){
                $('.forget-passtype').css('background',' url("../images/zc3.png") no-repeat')
            }else if(index==3){
                $('.forget-passtype').css('background',' url("../images/zc4.png") no-repeat')
            }
            $('.register-form').hide();
            $('.register-form').eq(index).show();
        })
        /*if(location.href.indexOf('register.html?checkflag=true')>=0){
            $('#agree').attr('checked','ture');
        }*/
    }
    //Agreement.html
    /*$('.main-list-btn').click(function(){
        var curhtml=$('.main-list-btn.cur a').html();
        if(curhtml=='同意'){
            location.href='../login-register/register.html?checkflag=true';
        }
    })*/
})