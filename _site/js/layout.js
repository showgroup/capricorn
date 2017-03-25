$('#topbar').scrollupbar();

$(document).ready(function(){

    $('.toggle--menu').click(function(){
        $(this).toggleClass('toggle--close');
        $('.sg-menu').toggleClass('visible--mobile');
    });

    $('.toggle--contact').click(function(){
        $('.toggle--menu').removeClass('toggle--close');
        $('.sg-menu').removeClass('visible--mobile');
    });

    $('.block--gallery').slick({
    	draggable: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});
});