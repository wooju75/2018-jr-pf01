	/*
	//객체 생성
	var Hello = (function(){
	function Hello(_name) { //생성자
   this.message = "Hello" + _name;
	}
	 //Method - 객체 안의 함수
   Hello.prototype.greeting = function(){ //hello 라는 메서드를 만듬
   return this.message;
	}
	return Hello;
}());

var hello = new Hello("wooju");
console.log(hello.greeting()); */
	
	/*
	슬라이드를 만들기 위한 준비
	1. 필요한 요소들(HTML 객체) :
	-parent (부모슬라이드 들을 감싸는 객체)
	-container (슬라이드 들을 감싸고 움직일 객체)
	-slide (슬라이드)
	
	2. 옵션 (변수) :
	-speed : 움직임의 속도
	-gap : 애니메이션 term
	-direction : 방향
	-type : hori, vert, fade ...
	-pager : 페이저 유/무
	
	3. 작동기능(메서드) :
	-1번의 객체를 2번의 옵션으로 실제 실행
	*/ 
	var Slide = (function(){
		function Slide(parent, container, slide, options) {
			var obj = this;
			this.parent = parent;
			this.container = container;
			this.slide = slide;
			this.options = options;
			this.init(obj);
		}
		Slide.prototype.init = function(obj){
			if(obj.options.type == "horizental") {
				obj.slide.each(function(i){
					$(this).css({"left":(i*100)+"%"});
				});
				obj.horiMove(obj);
			}
			else if(obj.options.type == "vertical") {
				obj.slide.each(function(i){
					$(this).css({"top":(i*100)+"%"});
				});
				obj.vertMove(obj);
			}
			else if(obj.options.type == "fade") {
				obj.fadeMove(obj);
			}
		};
		Slide.prototype.horiMove = function(obj){
			
		}
		Slide.prototype.vertMove = function(obj){
			
		}
		Slide.prototype.fadeMove = function(obj){
			var depth = 0;
			var now = 0;
			var end = obj.slide.length - 1; 
			obj.slide.each(function(){
				if(depth < $(this).css("z-index")) depth = $(this).css("z-index");
			});
			depth++;
			ani();
			function ani() {
				obj.slide.eq(now).css({"z-index":depth++, "opacity":0});
				obj.slide.eq(now).delay(obj.options.gap).animate({"opacity":1}, obj.options.speed, function(){
					if(now == end) now = 0;
					else now++;
					ani();
				});
			}
		}
		return Slide;
	}());
	