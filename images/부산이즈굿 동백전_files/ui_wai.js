/* v1.0 | 2024-03-21 */
/** -------------------------------------------
    대분류
---------------------------------------------*/
/* 소분류 */

// 기타설명



/** -------------------------------------------
    초기이벤트
---------------------------------------------*/
$(document).ready(function(){
});

$(window).on('load', function(){

	// 접근성마크 노출
	if( /Android|webOS|iPhone|iPad|IEMobile/i.test(navigator.userAgent) == true ){
		$('.wai_mark.for_pc').hide();
	}else{
		$('.wai_mark.for_pc').show();
	};
	
});




/** -------------------------------------------
    레이아웃
---------------------------------------------*/
/* 스킵네비 */ 
function skipnavi(){				
	$('.wrapper').before('<div class="skipnavi"><a href="javascript:void(0);" class="btn_skip btn_go_cont">본문바로가기</a></div>')
};

$(document).ready(function(){
	skipnavi();
});

/* 스킵네비-메뉴이동 */ 
$(document).on('click', '.skipnavi .btn_go_menu', function(){
	$('.q_logo a').focus();
});

/* 스킵네비-컨텐츠이동 */ 
$(document).on('click', '.skipnavi .btn_go_cont', function(){
	if( $('body').find('.wpb_wrapper h2').length > 0 ){// h2본문타이틀
		$('body').find('.vc_row .wpb_wrapper h2').first().attr('tabindex',-1).focus();

	}else if( $('body').find('.mem_tit').length > 0 ){ //타이틀ex>로그인
		$('body').find('.mem_tit').first().attr('tabindex',-1).focus();
	}else{
		$('body').find('.content').attr('tabindex',-1).focus();
	};
});


/* 탑버튼 */ 
$(document).on('click', '.btn_scrtop', function(){
	$('body').attr('tabindex',-1);
	$('body').focus();
});




/** -------------------------------------------
    gnb
---------------------------------------------*/
/* 1뎁스 */
$(document).on('focus click', '.main_menu.drop_down li.menu-item > a', function(){
	var menuItem = $(this).closest('li');

	menuItem.find('.second').addClass('drop_down_start');
	menuItem.siblings().find('.second').removeClass('drop_down_start');

	if( menuItem.hasClass('full_width_wide_menu') == true ){
		$('.menu-item.full_width_wide_menu').find('.second').css({
			'width' : $(window).width(),
			'left' : -(menuItem.offset().left)
		});
	};
});

/* 1뎁스 */
$(document).on('mouseenter', '.main_menu.drop_down li.menu-item > a', function(){
	var menuItem = $(this).closest('li');
	if( menuItem.hasClass('full_width_wide_menu') == true ){
		menuItem.find('.second').css({
			'width' : $(window).width(),
			'left' : -(menuItem.offset().left)
		});
	};
});



/* 1뎁스 */
$(document).on('focusout', '.main_menu.drop_down li.menu-item > a', function(){
	var menuItem = $(this).closest('li');

	if( menuItem.find('.second').find('a:focus') == false  ){
		menuItem.find('.second').removeClass('drop_down_start');
	};

});

/* 1뎁스 - 기타 | 1뎁스 첫메뉴 포커스 이탈시 처리 */
$(document).on('focus', '.q_logo a', function(){
	$('.main_menu.drop_down .second').removeClass('drop_down_start');
});


/* 2뎁스 */
$(document).on('focus', '.main_menu.drop_down .second .inner ul li a', function(){
	$(this).closest('.second').addClass('drop_down_start');
});

$(document).on('focusout', '.main_menu.drop_down .second .inner ul li a', function(){
	var menuItem = $(this).closest('li');
	if( menuItem.find('.second').find('a:focus') == false ){
		menuItem.find('.second').removeClass('drop_down_start');
	};
});

// 전체메뉴 마지막포커스 이탈 시 처리
$(document).on('focus', '.mainslider a, .mainslider button ', function(){
	$('header').find('.second.drop_down_start').removeClass('drop_down_start');
});



/** -------------------------------------------
    아코디언 (faq)
---------------------------------------------*/
// $(document).on('click', '.qode-title-holder', function(){
// 	$('.qode-accordion-holder .qode-title-holder').attr('tabindex', 0)
// 	$(this).attr('tabindex', 0)
// 	$(this).attr('title', '선택됨').siblings().removeAttr('title');
// })



/** -------------------------------------------
    달력인풋
---------------------------------------------*/
// 접근성
$(document).on('focus', '.kinput', function(){
	var $this = $(this);
	$('.ui-datepicker select.mtz-monthpicker.mtz-monthpicker-year').attr('title','년도선택');
	$('.ui-datepicker .mtz-monthpicker td').each(function(){
		var $this = $(this)
		$this.attr('role','button');
		$this.attr('tabindex','0');
		if( $this.is('.ui-state-active') == true ){
			$this.attr('title','선택됨');
		};
	});
});

// 접근성-달력(대체텍스트)
$(document).on('click', '.ui-datepicker .mtz-monthpicker td', function(e){
	$('.ui-datepicker .mtz-monthpicker td').removeAttr('title');
	$(this).attr('title','선택됨');
});

// 접근성-달력(초첨)
$(document).on('keydown', '.ui-datepicker .mtz-monthpicker td', function(e){
	var keyCode = (e.keyCode ? e.keyCode : e.which)
	$('.ui-datepicker .mtz-monthpicker td').removeAttr('title');
	if( keyCode === 13 || keyCode === 32 ){
		$(this).attr('title','선택됨');
		$(this).trigger('click');
	}
});

// 첫번째 셀렉트에서 포커스 
$(document).on('keydown', '.ui-datepicker select', function(e){
	var inputWrap = $(this).closest('.el_picker')
	if( e.shiftKey && e.which === 9 ){
		if( inputWrap.find('#startDate').length > 0 ){
			setTimeout(function(){ 
				$('.btn_startDate').focus(); 
				$('.ui-datepicker').hide();
			})

		}else if( inputWrap.find('#endDate').length > 0 ){
			setTimeout(function(){ 
				$('.btn_endDate').focus(); 
				$('.ui-datepicker').hide();
			})
		}
	}
});

$(document).on('focus', 'input#useS2, .input_fake.fake_startDate, .input_fake.fake_endDate, .kboard-default-button-small2', function(e){
	$('.ui-datepicker').hide();
});



// 버튼 포커스
$(document).on('click', '.btn_startDate', function(e){
	$('input#startDate').focus();
});


$(document).on('click', '.btn_endDate', function(e){
	$('input#endDate').focus();
});



$(document).on('keydown keypress', '.btn_startDate', function(e){
	if( e.keyCode === 9 ){
		if(e.shiftKey){
		}else{
			$('.input_fake.fake_endDate').focus();
			e.preventDefault();
		};
	};
});


$(document).on('keydown keypress', '.btn_endDate', function(e){
	if( e.keyCode === 9 ){
		if(e.shiftKey){
		}else{
			$('.kboard-default-button-small2.el-first').focus();
			e.preventDefault();
		};
	};
});


// 인풋 포커스
$(document).on('keydown keypress', '.input_fake.fake_endDate', function(e){
	if( e.keyCode === 9 ){
		if( e.shiftKey ){
			$('.btn_startDate').focus();
			e.preventDefault();
		};
	};
});

$(document).on('keydown keypress', '.kboard-default-button-small2.el-first', function(e){
	if( e.keyCode === 9 ){
		if( e.shiftKey ){
			$('.btn_endDate').focus();
			e.preventDefault();
		};
	};
});




var wai_dateInput = {
	sync: function(){
		var $startDateInput = $('input#startDate');
		var $endDateInput = $('input#endDate');
		var $fake_startDateInput = $('input.input_fake.fake_startDate');
		var $fake_endDateInput = $('input.input_fake.fake_endDate');

		$fake_startDateInput.val( $startDateInput.val() );
		$fake_endDateInput.val( $endDateInput.val() );
	}
};

$(window).on('load', function(){
	wai_dateInput.sync();
});






/*
접근성 팝업 초점 순환
ex>
$(document).on('keydown', '.map-wrap', function(e){
	waiPopupFocusLoop(e);
});
*/ 
var waiPopupFocusLoop = function(e){
	var keyCode = e.keyCode;
	if( keyCode === 9 ){//탭
		var focusableEl = $(e.currentTarget).find('input, select, textarea, button, a, [tabindex]:not([tabindex="-1"])');//초점요소
		var focusElIdx = focusableEl.index($(document.activeElement));//활성화된 초점요소 인덱스
		var lastElIdx =  focusableEl.length - 1;//마지막 초점요소 인덱스

		if( e.shiftKey ){//shift+tab
			if( focusElIdx === 0 ){
				focusableEl.eq(lastElIdx).focus();
				e.preventDefault();
			};
		}else{//tab
			if( focusElIdx === lastElIdx ){
				focusableEl.eq(0).focus();
				e.preventDefault();
			};
		};
	};
};
