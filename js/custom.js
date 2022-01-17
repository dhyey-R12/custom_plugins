$(document).ready(function(){
	// accordion
	$(".custom_dropdown_menu").children(".custom_drop_menu").hide().removeClass("custom_drop_menu_open");
	$(".custom_dropdown_menu.custom_drop_menu_active").children(".custom_drop_menu").show().addClass("custom_drop_menu_open");
	$(".custom_drop_menu_heading a").click(function(e){
		e.preventDefault();
		if ($(this).parents('.custom_dropdown_menu').hasClass("custom_dropdown_menu custom_drop_menu_active")) {
			$(".custom_drop_menu").slideUp().removeClass("custom_drop_menu_open");
			$(this).parents('.custom_dropdown_menu').removeClass("custom_drop_menu_active");
			console.log("close");
		}else{
			$(".custom_drop_menu").slideUp().removeClass("custom_drop_menu_open").parents('.custom_dropdown_menu.custom_drop_menu_active').removeClass("custom_drop_menu_active");
			$(this).parent().next().slideDown().addClass("custom_drop_menu_open");
			$(this).parents('.custom_dropdown_menu').addClass("custom_drop_menu_active");
			console.log("open");
		}
	});

	// tabs
	$(".custom_tabs .custom_tabs_content").hide();
	$('.custom_tabs .custom_tabs_heading_btns a').click(function(e){
		e.preventDefault();
		$('.custom_tabs .custom_tabs_heading_btns a').removeClass('active_tab');
		$(this).addClass('active_tab');
		var tagid = $(this).data('tag');
		$('.custom_tabs .custom_tabs_content').removeClass('tab_content_active').hide();
		$('#'+tagid).addClass('tab_content_active').show();
	});
	if ($(".custom_tabs .custom_tabs_heading_btns a").hasClass("active_tab")) {
		var tagid_active = $(".custom_tabs .custom_tabs_heading_btns a.active_tab").data('tag');
		$('#'+tagid_active).addClass('tab_content_active');
		$(".custom_tabs .custom_tabs_content.tab_content_active").show();
	}else {
		$('.custom_tabs .custom_tabs_content').removeClass('tab_content_active').hide();
		$(".custom_tabs .custom_tabs_heading_btns a.active_tab").removeClass("active_tab");
	}

	// stepper
	$(".custom_tabs_horizontal .custom_tabs_content").hide();
	if ($(".custom_tabs_horizontal .custom_tabs_heading_btns a").hasClass("active_tab_horizontal")) {
		var tagid_active = $(".custom_tabs_horizontal .custom_tabs_heading_btns a.active_tab_horizontal").data('tag');
		$('#'+tagid_active).addClass('tab_content_active');
		$(".custom_tabs_horizontal .custom_tabs_content.tab_content_active").show();
	}else {
		$('.custom_tabs_horizontal .custom_tabs_content').removeClass('tab_content_active').hide();
		$(".custom_tabs_horizontal .custom_tabs_heading_btns a.active_tab_horizontal").removeClass("active_tab_horizontal");
	}
	$('.custom_tabs_horizontal .custom_tabs_heading_btns a').click(function(e){
		e.preventDefault();
		$('.custom_tabs_horizontal .custom_tabs_heading_btns a').removeClass('active_tab_horizontal');
		$(this).addClass('active_tab_horizontal');
		var tagid = $(this).data('tag');
		$('.custom_tabs_horizontal .custom_tabs_content').removeClass('tab_content_active').hide();
		$('#'+tagid).addClass('tab_content_active').show();
		$(".custom_tabs_horizontal .custom_tabs_content.tab_content_active .custom_tabs_content_inner_steps").first().addClass("custom_tabs_content_inner_steps_active").show();
	});
	$('.custom_tabs_horizontal .next_step').click(function () {
		var tagid_active = $(".custom_tabs_horizontal .custom_tabs_heading_btns li a.active_tab_horizontal").parents(".custom_tabs_horizontal .custom_tabs_heading_btns li").next().children(".custom_tabs_horizontal .custom_tabs_heading_btns li a").data('tag');
		$(".custom_tabs_horizontal .custom_tabs_heading_btns li a.active_tab_horizontal").removeClass('active_tab_horizontal').parents(".custom_tabs_horizontal .custom_tabs_heading_btns li").next().children(".custom_tabs_horizontal .custom_tabs_heading_btns li a").addClass('active_tab_horizontal');
		$('.custom_tabs_horizontal .custom_tabs_content').removeClass('tab_content_active').hide();
		$('#'+tagid_active).addClass('tab_content_active').show();
		$(".custom_tabs_horizontal .custom_tabs_content.tab_content_active .custom_tabs_content_inner_steps").first().addClass("custom_tabs_content_inner_steps_active").show();
	});
	$('.custom_tabs_horizontal .prev_step').click(function () {
		var tagid_active = $(".custom_tabs_horizontal .custom_tabs_heading_btns li a.active_tab_horizontal").parents(".custom_tabs_horizontal .custom_tabs_heading_btns li").prev().children(".custom_tabs_horizontal .custom_tabs_heading_btns li a").data('tag');
		$(".custom_tabs_horizontal .custom_tabs_heading_btns li a.active_tab_horizontal").removeClass('active_tab_horizontal').parents(".custom_tabs_horizontal .custom_tabs_heading_btns li").prev().children(".custom_tabs_horizontal .custom_tabs_heading_btns li a").addClass('active_tab_horizontal');
		$('.custom_tabs_horizontal .custom_tabs_content').removeClass('tab_content_active').hide();
		$('#'+tagid_active).addClass('tab_content_active').show();
	});
	$(".custom_tabs_horizontal .custom_tabs_content .custom_tabs_content_inner_steps").hide();
	$('.custom_tabs_horizontal .next_step_inner').click(function () {
		$(this).parents(".custom_tabs_horizontal .custom_tabs_content.tab_content_active").children(".custom_tabs_content_inner_steps.custom_tabs_content_inner_steps_active").hide().next().addClass("custom_tabs_content_inner_steps_active").show().prev().removeClass("custom_tabs_content_inner_steps_active");
	});
	$('.custom_tabs_horizontal .prev_step_inner').click(function () {
		$(this).parents(".custom_tabs_horizontal .custom_tabs_content.tab_content_active").children(".custom_tabs_content_inner_steps.custom_tabs_content_inner_steps_active").hide().prev().addClass("custom_tabs_content_inner_steps_active").show().next().removeClass("custom_tabs_content_inner_steps_active");
	});

	// stepper inner
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

	// horizontal scroll
	$('.horizontal_scroll_content').bind("DOMMouseScroll mousewheel", function (event) {
		amount = 40;
		var oEvent = event.originalEvent, 
		direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta, 
		position = $(this).scrollLeft();
		position += direction > 0 ? -amount : amount;
		$(this).scrollLeft(position);
		event.preventDefault();
	});
});