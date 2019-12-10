$(function(){
	// плавное перемещение страницы к нужному блоку
	$(".go").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});

	$(window).scroll(function() {
        $('.h4,.foottext,.h5,.h6,.posting').each(function(){
            var imagePos = $(this).offset().top;
 
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+550) {
                $(this).addClass("bounceIn");
            }
        });
	});

	$('#mainimg').slick(
		{
		  dots: true,
		  centerMode: true,
		  centerPadding: '10px',
		  slidesToShow: 2,
		  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '10px',
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '10px',
		        slidesToShow: 1
		      }
		    }
		  ]
		})
})