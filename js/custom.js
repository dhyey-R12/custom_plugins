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
	if ($(".custom_tabs_horizontal .custom_tabs_heading_btns a").hasClass("active_tab")) {
		var tagid_active = $(".custom_tabs_horizontal .custom_tabs_heading_btns a.active_tab").data('tag');
		$('#'+tagid_active).addClass('tab_content_active');
		$(".custom_tabs_horizontal .custom_tabs_content.tab_content_active").show();
	}else {
		$('.custom_tabs_horizontal .custom_tabs_content').removeClass('tab_content_active').hide();
		$(".custom_tabs_horizontal .custom_tabs_heading_btns a.active_tab").removeClass("active_tab");
	}
	$('.custom_tabs_horizontal .custom_tabs_heading_btns a').click(function(e){
		e.preventDefault();
		$('.custom_tabs_horizontal .custom_tabs_heading_btns a').removeClass('active_tab');
		$(this).addClass('active_tab');
		var tagid = $(this).data('tag');
		$('.custom_tabs_horizontal .custom_tabs_content').removeClass('tab_content_active').hide();
		$('#'+tagid).addClass('tab_content_active').show();
	});
	$('.custom_tabs_inner_content .next_step').click(function () {
		var tagid_active = $(".custom_tabs_horizontal .custom_tabs_heading_btns li a.active_tab").parents(".custom_tabs_horizontal .custom_tabs_heading_btns li").next().children(".custom_tabs_horizontal .custom_tabs_heading_btns li a").data('tag');
		$(".custom_tabs_horizontal .custom_tabs_heading_btns li a.active_tab").removeClass('active_tab').parents(".custom_tabs_horizontal .custom_tabs_heading_btns li").next().children(".custom_tabs_horizontal .custom_tabs_heading_btns li a").addClass('active_tab');
		$('.custom_tabs_horizontal .custom_tabs_content').removeClass('tab_content_active').hide();
		$('#'+tagid_active).addClass('tab_content_active').show();
		console.log("tagid_active id Next -------------->", tagid_active);
	});
	$('.custom_tabs_horizontal .prev_step').click(function () {
		var tagid_active = $(".custom_tabs_horizontal .custom_tabs_heading_btns li a.active_tab").parents(".custom_tabs_horizontal .custom_tabs_heading_btns li").prev().children(".custom_tabs_horizontal .custom_tabs_heading_btns li a").data('tag');
		$(".custom_tabs_horizontal .custom_tabs_heading_btns li a.active_tab").removeClass('active_tab').parents(".custom_tabs_horizontal .custom_tabs_heading_btns li").prev().children(".custom_tabs_horizontal .custom_tabs_heading_btns li a").addClass('active_tab');
		$('.custom_tabs_horizontal .custom_tabs_content').removeClass('tab_content_active').hide();
		$('#'+tagid_active).addClass('tab_content_active').show();
		console.log("tagid_active id Prev -------------->", tagid_active);
	});
});