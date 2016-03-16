$(document).ready(function(){
    $('.show--contact').click(function(){
        console.log('show contact');
        $('body').addClass('visible--contact');
        $('.sg-menu').removeClass('visible');
        $('.sg-logo').addClass('invert');
        $('.toggle').addClass('visible').addClass('invert').addClass('toggle--close');
    });

    $('.toggle--close').click(function(){
        console.log('close contact');
        $('body').removeClass('visible--contact');
        $('.sg-menu').addClass('visible');
        $('.sg-logo').removeClass('invert');
        $(this).removeClass('visible').removeClass('toggle--close');
    });

    $('.block--gallery').slick({
    	draggable: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});

    $('.toggle--overlay').click(function(){
        $(this).toggleClass('close');
        $('.sg-menu').toggleClass('visible--mobile');
    });
});