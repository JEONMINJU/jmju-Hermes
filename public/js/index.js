/************이벤트선언************/
$(".header-wrap .about > i").hover(onContactShow);

$(".icon-wrapper .real").click(onRealModalShow)
$(".scarf-wrap").click(onModalWrapperClick);
$(".scarf-wrap").find(".bt-close").click(onModalHide);
$(".scarf-wrapper").click(onModalHide);

$(".icon-wrapper .real2").click(onRealModalShow2)
$(".scarf2-wrap").click(onModalWrapperClick);
$(".scarf2-wrap").find(".bt-close").click(onModalHide2);
$(".scarf2-wrapper").click(onModalHide2);

$(".icon-wrapper .real3").click(onRealModalShow3)
$(".scarf3-wrap").click(onModalWrapperClick);
$(".scarf3-wrap").find(".bt-close").click(onModalHide3);
$(".scarf3-wrapper").click(onModalHide3);

$(".icon-wrapper .real4").click(onRealModalShow4)
$(".scarf4-wrap").click(onModalWrapperClick);
$(".scarf4-wrap").find(".bt-close").click(onModalHide4);
$(".scarf4-wrapper").click(onModalHide4);

$(".icon-wrapper .real5").click(onRealModalShow5)
$(".scarf5-wrap").click(onModalWrapperClick);
$(".scarf5-wrap").find(".bt-close").click(onModalHide5);
$(".scarf5-wrapper").click(onModalHide5);

/* common */
$(".close-wrap .bt-close").click(onModalHide) /* 닫기 버튼은 공통으로 써야지 */

/************이벤트콜백************/
function onContactShow() {
	$(".header-wrap .contact-wrap").css({"opacity": "1"});
}

function onModalHide(e) {
	e.stopPropagation();
}

function onModalWrapperClick(e) {
	e.stopPropagation(); // modal 클릭해도 닫히지 않게 막아줌
}

/* scarf1 */
function onRealModalShow(e) {
	$(".scarf-wrapper").css({"display": "block"})
	$(".scarf-wrapper").css("opacity")
	$(".scarf-wrapper").addClass('active')
	$("body").addClass("hide"); //모달창 떳을때 스크롤 막기
}

function onModalHide(e) {
	$(".scarf-wrapper").removeClass('active')
	setTimeout(function(){
		$(".scarf-wrapper").css({"display": "none"});
		$("body").removeClass("hide");
	}, 300);
}

/* scarf2 */
function onRealModalShow2(e) {
	$(".scarf2-wrapper").css({"display": "block"})
	$(".scarf2-wrapper").css("opacity")
	$(".scarf2-wrapper").addClass('active')
	$("body").addClass("hide");
}
function onModalHide2(e) {
	$(".scarf2-wrapper").removeClass('active')
	setTimeout(function(){
		$(".scarf2-wrapper").css({"display": "none"});
		$("body").removeClass("hide");
	}, 300);
}

/* scarf3 */
function onRealModalShow3(e) {
	$(".scarf3-wrapper").css({"display": "block"})
	$(".scarf3-wrapper").css("opacity")
	$(".scarf3-wrapper").addClass('active')
	$("body").addClass("hide");
}
function onModalHide3(e) {
	$(".scarf3-wrapper").removeClass('active')
	setTimeout(function(){
		$(".scarf3-wrapper").css({"display": "none"});
		$("body").removeClass("hide");
	}, 300);
}

/* scarf4 */
function onRealModalShow4(e) {
	$(".scarf4-wrapper").css({"display": "block"})
	$(".scarf4-wrapper").css("opacity")
	$(".scarf4-wrapper").addClass('active')
	$("body").addClass("hide");
}
function onModalHide4(e) {
	$(".scarf4-wrapper").removeClass('active')
	setTimeout(function(){
		$(".scarf4-wrapper").css({"display": "none"});
		$("body").removeClass("hide");
	}, 300);
}

/* scarf5 */
function onRealModalShow5(e) {
	$(".scarf5-wrapper").css({"display": "block"})
	$(".scarf5-wrapper").css("opacity")
	$(".scarf5-wrapper").addClass('active')
	$("body").addClass("hide");
}
function onModalHide5(e) {
	$(".scarf5-wrapper").removeClass('active')
	setTimeout(function(){
		$(".scarf5-wrapper").css({"display": "none"});
		$("body").removeClass("hide");
	}, 300);
}