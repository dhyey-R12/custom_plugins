// Accordion Js
// $(function($){
// 	$.fn.customAccordion = function(){
// 		var mainClass = $(this).find(".custom_dropdown_menu")
// 		$(".custom_dropdown_menu").children(".custom_drop_menu").hide().removeClass("custom_drop_menu_open");
// 		$(".custom_dropdown_menu.custom_drop_menu_active").children(".custom_drop_menu").show().addClass("custom_drop_menu_open");
// 		$(".custom_drop_menu_heading a").click(function(e){
// 			e.preventDefault();
// 			if ($(this).parents('.custom_dropdown_menu').hasClass("custom_dropdown_menu custom_drop_menu_active")) {
// 				$(".custom_drop_menu").slideUp().removeClass("custom_drop_menu_open");
// 				$(this).parents('.custom_dropdown_menu').removeClass("custom_drop_menu_active");
// 				console.log("close");
// 			}else{
// 				$(".custom_drop_menu").slideUp().removeClass("custom_drop_menu_open").parents('.custom_dropdown_menu.custom_drop_menu_active').removeClass("custom_drop_menu_active");
// 				$(this).parent().next().slideDown().addClass("custom_drop_menu_open");
// 				$(this).parents('.custom_dropdown_menu').addClass("custom_drop_menu_active");
// 				console.log("open");
// 			}
// 		});
// 	};   
// }(jQuery));
$(function($){
	$.fn.customAccordion = function(){

		var mainClass = $(this).find(".custom_dropdown_menu");
		var activeClass = $(this).find(".custom_dropdown_menu.custom_drop_menu_active");
		var dropdownContent = $(mainClass).children(".custom_drop_menu");
		var dropdownBtn = $(mainClass).find(".custom_drop_menu_heading a");

		$(mainClass).children(".custom_drop_menu").hide().removeClass("custom_drop_menu_open");
		$(activeClass).children(dropdownContent).show().addClass("custom_drop_menu_open");
		$(dropdownBtn).click(function(e){
			e.preventDefault();
			if ($(this).parents(mainClass).hasClass("custom_drop_menu_active")) {
				$(dropdownContent).slideUp().removeClass("custom_drop_menu_open");
				$(this).parents(mainClass).removeClass("custom_drop_menu_active");
				console.log("close");
			}else{
				$(dropdownContent).slideUp().removeClass("custom_drop_menu_open").parents(activeClass).removeClass("custom_drop_menu_active");
				$(this).parent().next().slideDown().addClass("custom_drop_menu_open");
				$(this).parent().parent().addClass("custom_drop_menu_active");
				console.log("open");
			}
		});
	};   
}(jQuery));

//Tabs Js
$(function($){
	$.fn.customTabs = function(){

		var tabsMainclass = $(this).find(".custom_tabs");
		var tabBtns = $(tabsMainclass).find(".custom_tabs_heading_btns a");
		var tabBtnsactive = $(tabsMainclass).find(".custom_tabs_heading_btns a.active_tab");
		var tabContentmain = $(tabsMainclass).find(".custom_tabs_inner_content");
		var tabContent = $(tabContentmain).find(".custom_tabs_content");

		$(tabContent).hide();
		$(tabBtns).click(function(e){
			e.preventDefault();
			$(tabBtns).removeClass('active_tab');
			$(this).addClass('active_tab');
			var tagid = $(this).data('tag');
			$(tabContent).removeClass('tab_content_active').hide();
			$('#'+tagid).addClass('tab_content_active').show();
		});
		if ($(tabBtns).hasClass("active_tab")) {
			var tagid_active = $(tabBtnsactive).data('tag');
			$('#'+tagid_active).addClass('tab_content_active');
			var tabContentactive = $(tabsMainclass).find(".tab_content_active");
			$(tabContentactive).show();
		}else {
			$(tabContent).removeClass('tab_content_active').hide();
			$(tabBtnsactive).removeClass("active_tab");
		}
	};   
}(jQuery));
// $(function($){
// 	$.fn.customTabs = function(){
// 		$(".custom_tabs .custom_tabs_content").hide();
// 		$('.custom_tabs .custom_tabs_heading_btns a').click(function(e){
// 			e.preventDefault();
// 			$('.custom_tabs .custom_tabs_heading_btns a').removeClass('active_tab');
// 			$(this).addClass('active_tab');
// 			var tagid = $(this).data('tag');
// 			$('.custom_tabs .custom_tabs_content').removeClass('tab_content_active').hide();
// 			$('#'+tagid).addClass('tab_content_active').show();
// 		});
// 		if ($(".custom_tabs .custom_tabs_heading_btns a").hasClass("active_tab")) {
// 			var tagid_active = $(".custom_tabs .custom_tabs_heading_btns a.active_tab").data('tag');
// 			$('#'+tagid_active).addClass('tab_content_active');
// 			$(".custom_tabs .custom_tabs_content.tab_content_active").show();
// 		}else {
// 			$('.custom_tabs .custom_tabs_content').removeClass('tab_content_active').hide();
// 			$(".custom_tabs .custom_tabs_heading_btns a.active_tab").removeClass("active_tab");
// 		}
// 	};   
// }(jQuery));

// Stepper Js
$(function($){
	$.fn.customStepper = function(){
		// var mainclass = this;
		// console.log("mainclass", mainclass);
		$(".custom_tabs_horizontal_inner_steps .custom_tabs_content").hide();
		if ($(".custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns a").hasClass("active_tab_horizontal_inner")) {
			var tagid_active = $(".custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns a.active_tab_horizontal_inner").data('tag');
			$('#'+tagid_active).addClass('tab_content_active');
			$(".custom_tabs_horizontal_inner_steps .custom_tabs_content.tab_content_active").show();
		}else {
			$('.custom_tabs_horizontal_inner_steps .custom_tabs_content').removeClass('tab_content_active').hide();
			$(".custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns a.active_tab_horizontal_inner").removeClass("active_tab_horizontal_inner");
		}
		$('.custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns a').click(function(e){
			e.preventDefault();
			$('.custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns a').removeClass('active_tab_horizontal_inner');
			$(this).addClass('active_tab_horizontal_inner');
			var tagid = $(this).data('tag');
			$('.custom_tabs_horizontal_inner_steps .custom_tabs_content').removeClass('tab_content_active').hide();
			$('#'+tagid).addClass('tab_content_active').show();
			$(".custom_tabs_horizontal_inner_steps .custom_tabs_content.tab_content_active .custom_tabs_content_inner_steps").first().addClass("custom_tabs_content_inner_steps_active").show();
		});
		$('.custom_tabs_horizontal_inner_steps .next_step').click(function () {
			var tagid_active = $(".custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns li a.active_tab_horizontal_inner").parents(".custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns li").next().children(".custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns li a").data('tag');
			$(".custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns li a.active_tab_horizontal_inner").removeClass('active_tab_horizontal_inner').parents(".custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns li").next().children(".custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns li a").addClass('active_tab_horizontal_inner');
			$('.custom_tabs_horizontal_inner_steps .custom_tabs_content').removeClass('tab_content_active').hide();
			$('#'+tagid_active).addClass('tab_content_active').show();
			$(".custom_tabs_horizontal_inner_steps .custom_tabs_content.tab_content_active .custom_tabs_content_inner_steps").first().addClass("custom_tabs_content_inner_steps_active").show();
		});
		$('.custom_tabs_horizontal_inner_steps .prev_step').click(function () {
			var tagid_active = $(".custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns li a.active_tab_horizontal_inner").parents(".custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns li").prev().children(".custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns li a").data('tag');
			$(".custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns li a.active_tab_horizontal_inner").removeClass('active_tab_horizontal_inner').parents(".custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns li").prev().children(".custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns li a").addClass('active_tab_horizontal_inner');
			$('.custom_tabs_horizontal_inner_steps .custom_tabs_content').removeClass('tab_content_active').hide();
			$('#'+tagid_active).addClass('tab_content_active').show();
		});
		$(".custom_tabs_horizontal_inner_steps .custom_tabs_content .custom_tabs_content_inner_steps").hide();
		$('.custom_tabs_horizontal_inner_steps .next_step_inner').click(function () {
			$(this).parents(".custom_tabs_horizontal_inner_steps .custom_tabs_content.tab_content_active").children(".custom_tabs_content_inner_steps.custom_tabs_content_inner_steps_active").hide().next().addClass("custom_tabs_content_inner_steps_active").show().prev().removeClass("custom_tabs_content_inner_steps_active");
		});
		$('.custom_tabs_horizontal_inner_steps .prev_step_inner').click(function () {
			$(this).parents(".custom_tabs_horizontal_inner_steps .custom_tabs_content.tab_content_active").children(".custom_tabs_content_inner_steps.custom_tabs_content_inner_steps_active").hide().prev().addClass("custom_tabs_content_inner_steps_active").show().next().removeClass("custom_tabs_content_inner_steps_active");
		});
	};   
}(jQuery));

// Horizontal Scroll Js
$(function($) {
	$.fn.hScroll = function (amount) {
		amount = amount || 120;
		$(".horizontal_scroll_content").bind("DOMMouseScroll mousewheel", function (event) {
			var oEvent = event.originalEvent, 
			direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
			position = $(this).scrollLeft();
			position += direction > 0 ? -amount : amount;
			$(this).scrollLeft(position);
			event.preventDefault();
		})
	};
}(jQuery));

// $(function($){
//   $.fn.customSelect = function(){

//   };   
// }(jQuery));

// $(".one").customSelect();