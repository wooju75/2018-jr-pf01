/***** 공통사항 변수 선언 ******/
const mapKey = "543290867d5ebc18fb9238b9680b55c4" //한번 값을 주고나면 다른 값을 줄 수 없다(에러남)
var bar = $(".navs_mo");
var bar2 = $(".nav_close");
var nav = $(".navs_mo_sub");
var navWid = nav.width();

/***** 반응형/높이를 위한 resize ******/
$(window).resize(function(){
	navInit();	//모바일 네비게이션 가리기
	banInit();	//배너 Auto height
}).trigger("resize");

/***** 메인 배너 ******/
function banInit() {
	$(".banner_wrap").height($(".banner_wrap > li").height());
}

/***** 모바일 네비게이션 ******/
bar.click(navToggle);
bar2.click(navToggle);
function navInit() {
	navWid = nav.width();
	if($(window).width() > 768) navHide();
	else navToggle();
}
function navHide() {
	nav.css({"left":-navWid+"px"});
}
function navToggle() {
	if(nav.position().left == 0) nav.stop().animate({"left": -navWid+"px"}, 500);
	else nav.stop().animate({"left": 0}, 500);
}

/***** Masonry *****/
$('.grid').imagesLoaded( function() {
  $('.grid').masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
});

/***** 다음 지도 *****/
$(window).resize(function(){
	var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
	var options = {
		center: new daum.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
		level: 3 //지도의 레벨(확대, 축소 정도)
	};
	
	var map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
	/* map.setDraggable(false);
	map.setZoomable(false); */
	
	
	var clusterer = new daum.maps.MarkerClusterer({
		map: map,
		gridSize: 35,
		averageCenter: true,
		minLevel: 6,
		disableClickZoom: true,
		styles: [{ //마커의 스타일
				width : '53px', height : '52px',
				background: 'url(cluster.png) no-repeat',
				color: '#fff',
				textAlign: 'center',
				lineHeight: '54px'
		}]
	});
	var marker = new daum.maps.Marker({
		position: new daum.maps.LatLng(33.450701, 126.570667)
	});
	clusterer.addMarker(marker);
}).trigger("resize");

/*****  bt_top *****/
$("#bt_top").click(function(){
 $("html, body").stop().animate({"scrollTop":0},200)
});
