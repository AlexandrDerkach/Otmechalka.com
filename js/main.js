var doc = document,
	$doc = $(document),
	ths = $(this);
var windowWidth = $(window).width();
$(document).ready(function () {
	(function () {
		var touchMenu = $('.touch_menu'),
			sidebarMenu = $('.content__sidebar_body'),
			contentInner = $('.content_inner'),
			touchFirstChild = $('div.touch_menu_inner_cont>i:first-child'),
			touchSecondChild = $('div.touch_menu_inner_cont>i:nth-child(2)'),
			touchThirdChild = $('div.touch_menu_inner_cont>i:last-child'),
			mainHeader = $('.main_header');
		/*ПЕРВЫЙ ВАРИАНТ РЕАЛИЗАЦИИ МЕНЮ С КНОПКОЙ*/
		touchMenu.on('click', function (e) {
			e.preventDefault();
			if (windowWidth <= 500) {
			contentInner.toggleClass('seventyPersent').removeClass('.seventyPersent');
			}
			ths.slideToggle(0, function () {
				sidebarMenu.toggleClass('flex').css('display', '');
				touchFirstChild.toggleClass('rotatorClass');
				touchSecondChild.toggleClass('none');
				touchThirdChild.toggleClass('rotatorReversClass');	
			})
			
		})

		/*ВТОРОЙ ВАРИАНТ РЕАЛИЗАЦИИ*/
		/*touchMenu.click(function () {
			sidebarMenu.animate({
				opacity: 'hide'
				, width: 'toggle'
			}, {
				duration: 400
				, specialEasing: {
					opacity: 'linear'
					, width: 0
				}
			});
			if (windowWidth <= 500) {
				contentInner.toggleClass('seventyPersent').removeClass('.seventyPersent');
			}
			if (windowWidth >= 931 && sidebarMenu.css('display', 'none')) {
				sidebarMenu.removeAttr('display')
			}
			touchFirstChild.toggleClass('rotatorClass');
			touchSecondChild.toggleClass('none');
			touchThirdChild.toggleClass('rotatorReversClass');
		});*/
	}());
})