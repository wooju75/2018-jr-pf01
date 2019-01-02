var bar = $(".navs_mo");
var nav = $(".navs_mo_sub");
var wid = nav.width();
var navChk = false; //안보이는  상태

$(window).resize(function(){
 wid = nav.width(); //네비게이션의 너비 가져온다
}).tigger("resize")