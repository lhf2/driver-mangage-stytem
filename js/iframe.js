//页面自适应高度
/*$("#mainFrame").load(function(){
    var mainheight = $(this).contents().find("body").height()+30;
    console.log(mainheight)
    if(mainheight<=650){
        $(this).height(650);
    }else{
        $(this).height(mainheight);
    }
});*/
/*$("#mainFrame").load(function() {
    $(this).height($(this).contents().height());
})*/
/*$(function(){
    $("#mainFrame").load(function() {
        console.log("ifarme加载完毕")
        var docHeight = $(document).height();
        $("#mainFrame").height(docHeight);
        $(".main-right").height(docHeight);
        console.log(docHeight);
    })
})*/
//点击左侧的列表
function reloadimg(){
    var img=$('.edit-text').children('.edit-img');
    var imgid=img.attr('id');
    $('.edit-text').css('background','');
    img.children('img').attr('src','../images/'+imgid+'.png');
    $('.edit-text').children('span:nth-child(2)').css('color','#fff');
}
$('.edit-list').click(function(){
    reloadimg();
    $('.edit-list').removeClass('cur');
    $(this).addClass('cur');
    var img=$(this).siblings('.edit-text').children('.edit-img');
    var imgid=img.attr('id');
    $(this).siblings('.edit-text').css('background','url("../images/side-bg.png") no-repeat 0 5px');
    img.children('img').attr('src','../images/'+imgid+'1.png');
    $(this).siblings('.edit-text').children('span:nth-child(2)').css('color','#347ACB');
})
//iframe链接
$('.edit-list').click(function () {
    if($(this).text()=='驾校Logo'){
        $('iframe').attr('src','logo.html');
    }else if($(this).text()=='驾校相册'){
        $('iframe').attr('src','Driving-album1.html');
    }else if($(this).text()=='驾校详情'){
        $('iframe').attr('src','sch-detail.html');
    }else if($(this).text()=='驾校公告'){
        $('iframe').attr('src','School-bulletin.html');
    }else if($(this).text()=='驾校特色'){
        $('iframe').attr('src','Driving-characteristics.html');
    }else if($(this).text()=='班型详情'){
        $('iframe').attr('src','Class-details.html');
    }else if($(this).text()=='班车路线'){
        $('iframe').attr('src','bus-route.html');
    }else if($(this).text()=='公交直达'){
        $('iframe').attr('src','Direct-bus.html');
    }else if($(this).text()=='地图标识'){
        $('iframe').attr('src','Map-identification.html');
    }else if($(this).text()=='班型统计'){
        $('iframe').attr('src','../Statistics/Class-statistics.html');
    }else if($(this).text()=='浏览量'){
        $('iframe').attr('src','../Statistics/Browse-volume.html');
    }else if($(this).text()=='报名量'){
        $('iframe').attr('src','../Statistics/Registration-volume.html');
    }else if($(this).text()=='个人信息'){
        $('iframe').attr('src','../set/account-info.html');
    }else if($(this).text()=='修改密码'){
        $('iframe').attr('src','../set/Modify-password.html');
    }else if($(this).text()=='报名用户管理'){
        $('iframe').attr('src','../Administration/user-management.html');
    }else if($(this).text()=='咨询管理'){
        $('iframe').attr('src','../Administration/Consult-mange.html');
    }else if($(this).text()=='评论管理'){
        $('iframe').attr('src','../Administration/Comment-mange.html');
    }else if($(this).text()=='推广'){
        $('iframe').attr('src','../Administration/Adv-promotion.html');
    }
})
//logo
$('.picbtn-list').click(function(){
    $('.picbtn-list').removeClass('cur');
    $(this).addClass('cur');
})
//sch-detail
$('.add-train').click(function(){
    var html='<div class="form-inputbox"><div class="form-input1"><span>名称:</span><input type="text" class="input-ling"/></div><div class="form-input1"><span>地址:</span><div class="input-adr"><input type="text" class="input-ling1"/><div class="adr-img"><img src="../images/adr.png" alt=""/></div></div></div></div>';
    $('.form-inputout').append(html);
})
//School-bulletin.html
$('.bull-top-list').click(function () {
    $('.bull-top-list').removeClass('cur');
    $(this).addClass('cur');
    var index=$(this).index('.bull-top-list');
    $('.panel-body').hide();
    $('.panel-body').eq(index).show();
})
//Class-details.html
var clickflag=[];
for(var i=0;i<$('.cha-list').length;i++){
    clickflag[i]=true;
}
$('.cha-list').click(function () {
    var index=$(this).index('.cha-list');
    if(clickflag[index]){
        $(this).addClass('cur');
        clickflag[index]=false;
    }else{
        $(this).removeClass('cur');
        clickflag[index]=true;
    }
})
//Driving-characteristics.html
$('.chara-list').click(function(){
    $(this).addClass('cur');
})
$('.btn-list').click(function(){
    $('.btn-list').removeClass('cur');
    $(this).addClass('cur');
    $('.addcha-hide').hide();
})
$('.add-chara').click(function(){
    $('.addcha-hide').show();
})
$('.btn-submit').click(function(){
    var inputhtml=$('.hide-input input').val();
    console.log(inputhtml)
    var html='<li class="chara-list cur">'+inputhtml+'</li>';
    if(inputhtml){
        $('.chara-lists').append(html);
        $('.hide-input input').val('')
    }
})
//Direct-bus.html
$('.bus-btn').click(function(){
    var html='<tr><td class="td-input"><input type="text"/></td><td class="td-input"><input type="text"/></td><td class="td-input"><input type="text"/></td><td class="td-input"><input type="text"/></td><td class="td-input"><input type="text"/></td><td class="td-input"><input type="text"/></td><td><span class="edit-btn">提交</span>&nbsp;|&nbsp;<span class="del-btn">移除</span></td></tr>';
    $('table').append(html);
})
$('.del-btn').live('click',function (){
    alert('1111');
})
/*var flag=true;
$('.edit-btn').click(function(){
    var tds=$(this).parents('tr').children('.td-input');
    var tdarr=[];
    for(var i=0;i<tds.length;i++){
        tds[i].index=i;
        tdarr.push(tds.eq(i).html());
    }
    if(flag){
        $(this).html('提交').css('color','#3379CC');
        tds.html('<input type="text"/>')
        var inputs=tds.children('input');
        for(var j=0;j<inputs.length;j++){
            inputs[j].index=j;
            inputs.eq(j).val(tdarr[j]);
        }
        flag=false;
    }else{
        $(this).html('编辑').css('color','#3379CC');
        var input1=$('.td-input').children('input');
        var inputarr=[];
        for(k=0;k<input1.length;k++){
            input1[k].index=k;
            inputarr.push(input1.eq(k).val());
            tds.eq(k).html(inputarr[k])
        }
        flag=true;
    }
})*/
var btnstate =0;
$('.edit-btn').click(function(){
    var tds=$(this).parents('tr').children('.td-input');
    var str = $(this).text() == '编辑' ? '提交':'编辑';
    if($(this).text() == '编辑' && btnstate==0){
        btnstate = 1;
        $(this).html(str).css('color','#3379CC')
        var tdarr=[];
        for(var i=0;i<tds.length;i++){
            tds[i].index=i;
            tdarr.push(tds.eq(i).html());
        }
        tds.html('<input type="text"/>');
        var inputs=tds.children('input');
        for(var j=0;j<inputs.length;j++){
            inputs[j].index=j;
            inputs.eq(j).val(tdarr[j]);
        }
    }else if($(this).text() == '提交'){
        btnstate=0;
        var input1=$('.td-input').children('input');
        var inputarr=[];
        for(k=0;k<input1.length;k++){
            input1[k].index=k;
            inputarr.push(input1.eq(k).val());
            tds.eq(k).html(inputarr[k])
        }
        $(this).html(str).css('color','#3379CC');
    }
    console.log(btnstate)
})
//Driving-album.html
$('.main-title-list').click(function(){
    $('.main-title-list').removeClass('cur');
    $(this).addClass('cur');
    var index=$(this).index('.main-title-list');
    $('.album-box1').hide();
    $('.album-box1').eq(index).show();
})
$('.album-add').click(function(){
    var html='<li class="main-title-list">训练场4</li>';
    $('.main-title1').append(html);
})
//bus-route1.html
$('.bus-btn1').click(function(){
    var html='<tr><td><input type="text" class="edit-table110" value=""/></td><td><input type="text" class="edit-table190" value=""/></td><td><input type="text" class="edit-table150" value=""/></td><td><input type="text" class="edit-table150" value=""/></td><td><input type="text" class="edit-table150" value=""/></td></tr>';
    $('.table-ling tbody').append(html);
})
$('.table-ling thead input').focus(function(){
    $('.table-ling thead input').css('background','#BFCFE1');
    $(this).css('background','#fff');
})
$('.table-ling thead input').blur(function(){
    $('.table-ling thead input').css('background','#BFCFE1');
})
//Adv-promotion.html
if(location.href.indexOf('Adv-promotion.html')>=0){
    $('.bull-top-list').click(function () {
        var index=$(this).index('.bull-top-list');
        $('.main-title').hide();
        $('.main-title').eq(index).show();
    })
}
//
$('#search-box').change(function(){
    var selecthtml=$('#search-box option:selected').text();
    if(selecthtml=='姓名'){
        $('.search-hide').hide();
        $('.search-hide').eq(0).show();
    }else if(selecthtml=='时间'){
        $('.search-hide').hide();
        $('.search-hide').eq(1).show();
    }
})
//表情 Consult-mange.html
$('#face').SinaEmotion($('#message'));
$('.stay-back').click(function(){
    $('.chat-box').show();
})
/*$('.chat-emo').click(function () {
    var objs = $(".emotion").val(); //输入内容
    var obj = AnalyticEmotion(objs);
});*/
$('.send-btn').click(function(){
    $('.chat-box').hide();
})