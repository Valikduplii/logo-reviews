$(document).ready(function () {
      $(".small-img").click(function() {
         $(".big-img").attr("src", $(this).attr("src"));
      });
	$('.content-leftside-catalog__icon').click(function(event) {
		$(this).toggleClass('active');
		$('.content-leftside-catalog-block').slideToggle(200,function() {
			$(this).toggleClass('active');
			leftside();
		});
   });
   
   $(window).resize(function() {
      if ($(window).width() < '780'){
         $('.header__burger').click(function (event) {
            $('.header__burger, .header').toggleClass('active');
            $('body').toggleClass('lock');
            $('.content').toggleClass('active');
            $('.wrapper').toggleClass('active');
            $('.mobile-window__catalog').css('display', 'none');
            $('.mobile-window__info').css('display', 'block');
            $('.filter__mobile').css('display', 'block');
         }); 
         $('.button-catalog').click( function (event) {
            $('.header__burger, .header').toggleClass('active');
            $('body').toggleClass('lock');
            $('.content').toggleClass('active');
            $('.mobile-window__catalog').css('display', 'block');
            $('.mobile-window__info').css('display', 'none');
            $('.filter__mobile').css('display', 'block');   
            $('.wrapper').toggleClass('active');
         });
      } else if ($(window).width() > '772'){
         $('.header__burger.active, .header.active').toggleClass('active');
         $('body.lock').toggleClass('lock');
         $('.content.active').toggleClass('active');
         $('.wrapper.active').toggleClass('active');
      }
      });
      $('.select').click(function(event) {
         if(!$(this).hasClass('disabled')){
            $('.select').not(this).removeClass('active').find('.select-options').slideUp(50);
            $(this).toggleClass('active');
            $(this).find('.select-options').slideToggle(50);
         }
      });
      $('.select-options__value').click(function() {
         if($(this).parents('.select').hasClass('content-search__select')){
            $(this).parents('.select').find('.select-title__value').html('<span>'+$(this).html()+'</span>');
         }else{
            $(this).parents('.select').find('.select-title__value').html($(this).html());
         }
         if($.trim($(this).data('value'))!=''){
            $(this).parents('.select').find('input').val($(this).data('value'));
         }else{
            $(this).parents('.select').find('input').val($(this).html());
         }
      });
      $(document).click(function(e) {
         if (!$(e.target).is(".select *")) {
            $('.select').removeClass('active');
            $('.select-options').slideUp(50);
         };
      });
      $('.search__left').click(function(event) {
         if(!$('.search__left').hasClass('active')){
            $('.search__text').toggleClass('active');
            $('.search__arrow').toggleClass('active');
            $('.search__list').addClass('active');
            $('.search__list').slideToggle(500);
         }
      });
      $('.header__burger2').click(function (event) {
         $('.menu').toggleClass('close');
         $('.menu').slideToggle(500);
         $('.header__burger2').toggleClass('active');
         $('.main').toggleClass('active');
         // $('.main').css('min-height', '2200px');
      });

$('.mobile-arrow').click(function (event) {
   $(this).parent().find('.mobile-sub-menu__list').toggleClass('active');
   $(this).parent().find('.mobile-arrow').toggleClass('active');
});
$('.slider-content-img').click(function (event) {
   $(this).parents('.slider-conten-item').find('.slider-content__text').addClass('active');
   $(this).parents('.slider-conten-item').find('.slider-content__price').addClass('active');
   $(this).parents('.slider-conten-item').find('.slider-info__hover').addClass('active');
});
$(".slider-info__hover").click(function (event) {
   $(".slider-info__hover").parents('.slider-conten-item').find('.slider-content__text').removeClass('active');
   $(".slider-info__hover").parents('.slider-conten-item').find('.slider-content__price').removeClass('active');
   $('.slider-info__hover').removeClass('active');
})
$('.review__read-all').click(function (evene) {
   $(this).parents('.review__text-body').find('.review__text').toggleClass('active');
})


   /* 

   */



});

