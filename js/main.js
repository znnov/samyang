$(function(){
    $('.gnb').mouseenter(function(){
        $('header').stop().animate({'height':482},200);
        $('header').css('border-bottom','1px solid #888');
        $('.depth2').stop().slideDown(200);
    });
    $('header').mouseleave(function(){
        $('header').stop().animate({'height':137},200);
        $('header').css('border-bottom','none');
        $('.depth2').stop().slideUp(100);
    });
    // 슬라이드 스크립트
    $('.visual').slick({
        // 자동실행
        autoplay: true,
        // 페이지버튼
        dots: true
      });
      $('.btn_family').click(function(){
        $('.list').slideToggle()
      });

      // 탭슬라이드 on클래스
      $('.list li').click(function(e){
        // 하이퍼링크 설정 막는 방법
        e.preventDefault()
        $('.list li').removeClass('on');
        $(this).addClass('on');
        
        // 인덱스 값 알아내기
        let num = $(this).index();
        console.log(num);
        $('.slide_list').hide();
        $('.slide_list').eq(num).show();
      });

      $('.slide_list').slick({
        autoplay: true,
        slidesToShow:7,
        slidesToScroll:1,
        arrows:false,
        dots:true,
        variableWidth:true
      });

      $('.tab_slide .slide_list:gt(0)').hide();
})