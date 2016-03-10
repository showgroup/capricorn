$(document).ready(function(){
    $('.toggle--contact').click(function(){
        console.log('contact clicked');
        $('body').toggleClass('show--contact');
        $('header').toggleClass('header--invert');
        $('.sg-menu').removeClass('visible--mobile');
    });

    $('.video__cover').click(function(){
        $(this).addClass('hidden');
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