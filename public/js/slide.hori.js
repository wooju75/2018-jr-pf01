/* var now = 0; //현재 움직이는 애
var end = $(".slide").length; //ul안의 li의 개수
$(".slide").eq(0).clone().appendTo($(".banner_wrap"));//첫번째를 복사해서 .banner_wrap의 끝에 붙여라
$(".slide").each(function(i){ //.slide 각각에 적용해라
  $(this).css({"left":(i*100)+"%"}); //이것의 css는 왼쪽으로 순번*100%씩 움직인다
});
ani();
function ani(){
	$(".banner_wrap").delay(2000).animate({"left":-(now*100)+"%"}, 100, function(){
		if(now == end){ // now가 end와 같으면
		 $(".banner_wrap").css({"left":0});
     now = 1;
		}
		else now++; //아니면 now의 값이 계속 증가한다
		ani();
	});
} */

var now = 0;
var delay = 2000;
var interval = setInterval(ani, delay);
var end = $(".slide").length - 1;
var dir = -1;
function init() {
	$(".banner_wrap").css({"left":0});
	$(".slide").hide(0);
	$(".slide").eq(now).css({"left":0}).show(0);
	if(now == 0) {
		$(".slide").eq(end).css({"left":"-100%"}).show(0);
		$(".slide").eq(now+1).css({"left":"100%"}).show(0);
	}
	else if(now == end) {
		$(".slide").eq(now-1).css({"left":"-100%"}).show(0);
		$(".slide").eq(0).css({"left":"100%"}).show(0);
	}
	else {
		$(".slide").eq(now-1).css({"left":"-100%"}).show(0);
		$(".slide").eq(now+1).css({"left":"100%"}).show(0);
	}
}
function ani() {
	init();
	$(".banner_wrap").stop().animate({"left":(100*dir)+"%"}, 1000, function(){
		if(dir == -1) {
			if(now == end) now = 0;
			else now++;
		}
		else {
			if(now == 0) now = end;
			else now--;
		}
	});
}
$(".banner_wrap").mouseenter(function(){
	clearInterval(interval);
});
$(".banner_wrap").mouseleave(function(){
	clearInterval(interval);
	interval = setInterval(ani, delay);
});
$("#bt_prev").click(function(){
	clearInterval(interval);
	dir = 1;
	ani();
	interval = setInterval(ani, delay);
});
$("#bt_next").click(function(){
	clearInterval(interval);
	dir = -1;
	ani();
	interval = setInterval(ani, delay);
});
