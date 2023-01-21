$(window).on("load", function() {
	jQuery(".image_slider img").each(function() {
		var i = jQuery(this)
		, n = i.attr("id")
		, o = i.attr("class")
		, e = i.attr("src");
		jQuery.get(e, function(e) {
			var t = jQuery(e).find("svg");
			void 0 !== n && (t = t.attr("id", n)),
			void 0 !== o && (t = t.attr("class", o + " replaced-svg")),
			!(t = t.removeAttr("xmlns:a")).attr("viewBox") && t.attr("height") && t.attr("width") && t.attr("viewBox", "0 0 " + t.attr("height") + " " + t.attr("width")),
			i.replaceWith(t)
		}, "xml")
	});
})

$(document).ready(function(){

	// Slider JS
	var carousel = $('.carousel');
	carousel.slick({
		arrows: true,
		dots: true,
		fade: true,
		infinite: false,
		speed: 0,
		nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="fas fa-chevron-right"></i></button>',
		prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="fas fa-chevron-left"></i></button>',
	});
	var addAnimationClass = true;
	carousel.on('beforeChange', function(e, slick, current, next, event) {
		var decl = current - next;
		if(decl == 1 || decl == (slick.slideCount-1)*(-1) ) {
			carousel.addClass('is-prev');
			console.log('is prev direction');
			$('.slick-current').prev().addClass('move_left').removeClass('move_right');
			$('.slick-current').addClass('move_right');
		} else {
			carousel.addClass('is-next');
			console.log('is next direction');
			$('.slick-current').next().addClass('move_right').removeClass('move_left');
			$('.slick-current').addClass('move_left');
		}
		var current = carousel.find('.slick-slide')[current];
		var next = carousel.find('.slick-slide')[next];
		var previous = carousel.find('.slick-slide')[previous];
		var src = $(current).find('.carousel_image').attr('src');
		$(next).find('.carousel_slide_overlay').css('background-image', 'url("' + src + '")');
		if(addAnimationClass) {
			carousel.addClass('doAnimation');
			addAnimationClass = false;
		}
	});

	// Image Slider JS
	$('.image_slider').slick({
		dots: false,
		infinite: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		cssEase: 'ease-in-out'
	});

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
	if ($(".custom_tabs_horizontal .custom_tabs_content").children(".custom_tabs_content_inner_steps").hasClass("custom_tabs_content_inner_steps")) {
		$(".custom_tabs_horizontal .custom_tabs_heading_btns li a").css("pointer-events","none");
	}else{
		$(".custom_tabs_horizontal .custom_tabs_heading_btns li a").css("pointer-events","visible");
	}

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
	if ($(".custom_tabs_horizontal_inner_steps .custom_tabs_content").children(".custom_tabs_content_inner_steps").hasClass("custom_tabs_content_inner_steps")) {
		$(".custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns li a").css("pointer-events","none");
	}else{
		$(".custom_tabs_horizontal_inner_steps .custom_tabs_heading_btns li a").css("pointer-events","visible");
	}

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

	// float bubble
	function randCol (r, g, b, a) {
		return "rgba(" + Math.floor(Math.random() * r).toString() + "," +
		Math.floor(Math.random() * g).toString() + "," +
		Math.floor(Math.random() * b).toString() + "," + a + ")";
	}

	$.fn.quietflow = function (attributes) {

		// Cache node
		var $element = $(this);
		var $limitX  = $element.width();
		var $limitY  = $element.height();

		var centerX  = $limitX/2;
		var centerY  = $limitY/2;

		// Remove quietflow 
		$("#Quietflow").remove();

		var theme   = "starfield";
		var z_index = -1000;

		var effectNames = [
			"squareFlash",      
			"vortex",           
			"bouncingBalls",    
			"shootingLines",    
			"simpleGradient",   
			"starfield",        
			"layeredTriangles", 
			"cornerSpikes",     
			"floatingBoxes"
			];

		// Theme defaults
		var defaults = {

			squareFlash : {
				squareSize : 10,
				maxRed     : 255,
				maxGreen   : 255,
				maxBlue    : 255,
				speed      : 100
			},

			vortex : {
				mainRadius    : 20,
				miniRadii     : 30,
				backgroundCol : "#3498DB",
				circleCol     : "#34495E",
				speed         : 10
			},

			bouncingBalls : {
				specificColors  : [],
				backgroundCol   : "#ECF0F1",
				maxRadius       : 40,
				bounceSpeed     : 50,
				bounceBallCount : 50,
				transparent     : true
			},

			shootingLines : {
				backgroundCol : "#000",
				lineColor     : "#FFF",
				speed         : 150,
				lineGlow      : "#FFF",
				lines         : 50
			},

			simpleGradient : {
				primary : "#D4145A",
				accent  : "#FBB03B"
			},

			starfield : {
				starColor : "#FFF",
				starSize  : 3,
				speed     : 100
			},

			layeredTriangles : {
				backgroundCol  : "#D6D6D6",
				transparent    : true,
				specificColors : [],
				triangles      : 50
			},

			cornerSpikes : {
				specificColors : [],
				backgroundCol  : "#FFF",
				lineColor      : "#000",
				speed          : 100,
				lineGlow       : "#FFF"
			},

			floatingBoxes : {
				specificColors : [],
				boxCount       : 400,
				maxBoxSize     : 80,
				backgroundCol  : "#D6D6D6",
				transparent    : false,
				speed          : 100
			}

		};

		// Create canvas and set attributes
		var canvas            = document.createElement("canvas");
		var ctx               = canvas.getContext("2d");
		canvas.id             = "Quietflow";
		canvas.width          = $limitX;
		canvas.height         = $limitY;
		canvas.style.zIndex   = z_index;
		canvas.style.position = "absolute";
		canvas.style.top      = 0;

		// Attach canvas to element
		var $checkValidID = $element.attr("id");

		if (!($checkValidID == undefined)){
			var appendObject = document.getElementById($checkValidID);
			appendObject.appendChild(canvas);
		} else {
			document.body.appendChild(canvas);
		}

		// Set theme
		if ($.inArray(attributes.theme, effectNames) > -1) {
			theme = attributes.theme;
		}

		var effectAttrs = {};
		effectAttrs     = $.extend(defaults[theme], attributes);

		// Update canvas on resize without clearing
		$(window).resize(function () {

			$limitX = $element.width();
			$limitY = $element.height();

			var oldWidth  =  $("#Quietflow").css("width").replace("px", "");
			var oldHeight = $("#Quietflow").css("height").replace("px", "");  

			$("#Quietflow").css({ 
				"width" : window.innerWidth, 
				"height": window.innerHeight
			}); 

			var ratio1 = oldWidth / window.innerWidth;
			var ratio2 = oldHeight / window.innerHeight;

			ctx.scale(ratio1, ratio2);
		});

		var id;

		// Render based on interval or automatically
		function render (callback) {

			if (effectAttrs.speed !== undefined) {
				setTimeout(function () {
					id = requestAnimationFrame(callback);
				}, effectAttrs.speed);
			} else {
				id = requestAnimationFrame(callback);
			}
		}

		// Effect animations
		function squareFlashEffect () {

			for (var i = 0; i < $limitX; i += effectAttrs.squareSize + 1) {
				for (var j = 0; j < $limitY; j += effectAttrs.squareSize + 1) {

					// Set color and draw square
					ctx.fillStyle = randCol(effectAttrs.maxRed, effectAttrs.maxGreen, effectAttrs.maxBlue, 1);
					ctx.fillRect(i, j, effectAttrs.squareSize, effectAttrs.squareSize);
				}
			}

			render(squareFlashEffect);
		}

		function vortexEffect () {

			// Add delta x and y to coordinates
			if (x + dx > $limitX || x + dx < 0){
				dx = -dx;
			}
			if (y + dy > $limitY || y + dy < 0){
				dy = -dy;
			}

			x += dx;
			y += dy;

			ctx.fillStyle = effectAttrs.backgroundCol;
			ctx.fillRect(0, 0, $limitX, $limitY);

			for (var i = 0; i < effectAttrs.miniRadii; i++) {
				for (var j = 0; j < effectAttrs.miniRadii; j++) {

					// Generate point
					var newX = i / effectAttrs.miniRadii * $limitX;
					var newY = j / effectAttrs.miniRadii * $limitY;
					var newRadius = Math.sqrt(Math.pow(x - newX, 2) + Math.pow(y - newY, 2)) / effectAttrs.mainRadius;            
					ctx.beginPath();

					// Draw circles
					ctx.fillStyle = effectAttrs.circleCol;
					ctx.arc(newX, newY, newRadius, 0, Math.PI * 2, true);
					ctx.closePath();
					ctx.fill();
				}
			}

			render(vortexEffect);
		}

		function bouncingBallsEffect () {

			ctx.fillStyle = effectAttrs.backgroundCol;
			ctx.fillRect(0, 0, $limitX, $limitY);

			for (var i = 0; i < effectAttrs.bounceBallCount; i++) {

				var current = circleData[i],
				X       = 0,
				Y       = 1,
				RADIUS  = 2,
				DX      = 3,
				DY      = 4,
				COLOR   = 5;

				// Set boundaries
				if (current[X] + current[DX] > $limitX || current[X] + current[DX] < 0){
					current[3] = -current[3];
				} 
				if (current[Y] + current[DY] > $limitY || current[Y] + current[DY] < 0){
					current[DY] = -current[DY];
				}

				// Add delta x and y
				current[X] += current[DX];
				current[Y] += current[DY];

				// Draw circles
				ctx.beginPath();
				ctx.fillStyle = current[COLOR];
				ctx.arc(current[X], current[Y], current[RADIUS], 0, Math.PI * 2, true);
				ctx.closePath();
				ctx.fill();

			}

			render(bouncingBallsEffect);
		}

		function shootingLinesEffect () {

			ctx.fillStyle = effectAttrs.backgroundCol;
			ctx.fillRect(0, 0, $limitX, $limitY);

			ctx.beginPath();
			ctx.fillStyle = effectAttrs.lineColor;
			ctx.arc(centerX, centerY, 2, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.fill();

			for (var i = 0; i < effectAttrs.lines; i++) {
				ctx.beginPath();
				ctx.moveTo(centerX, centerY);
				ctx.lineTo(Math.random() * $limitX, Math.random() * $limitY);
				ctx.strokeStyle = effectAttrs.lineColor;
				ctx.shadowColor = effectAttrs.lineGlow;
				ctx.shadowBlur  = 20;
				ctx.stroke();
			}

			render(shootingLinesEffect);
		}

		function starfieldEffect () {

			var gradient = ctx.createLinearGradient(0, 0, $limitX / 2, $limitY);
			gradient.addColorStop(0, "#333333");
			gradient.addColorStop(1, "#000");

			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, $limitX, $limitY);

			for (var i = 0; i < starData.length; i++) {

				var currentStar = starData[i],
				X           = 0,
				Y           = 1,
				RADIUS      = 2,
				SPEED       = 3;

				currentStar[X] += currentStar[SPEED];

				ctx.beginPath();
				ctx.fillStyle = effectAttrs.starColor;
				ctx.arc(currentStar[X], currentStar[Y], currentStar[RADIUS], 0, Math.PI * 2, true);
				ctx.shadowColor = "#FFF";
				ctx.shadowBlur = 20;
				ctx.closePath();
				ctx.fill();

				// Create new star
				if (currentStar[X] > $limitX) {
					starData.splice(i, 1);
					starData.unshift([Math.random() * $limitX/4 - $limitX/4, 
						Math.random() * $limitY, 
						Math.random() * effectAttrs.starSize, 
						Math.ceil(Math.random() * 5)]);
				}

			}

			render(starfieldEffect);
		}

		function cornerSpikesEffect () {

			ctx.beginPath();

			var corners = [[0, 0], [$limitX, 0], [0, $limitY], [$limitX, $limitY]];

			// Draw lines from all corners of the window
			for (var i = 0; i < 4; i++) {
				var pos = Math.floor(Math.random() * effectAttrs.specificColors.length);
				ctx.strokeStyle = effectAttrs.specificColors.length > 0 ? effectAttrs.specificColors[pos] : randCol(255, 255, 255);
				ctx.moveTo(corners[i][0], corners[i][1]);
				ctx.lineTo(Math.random() * $limitX, Math.random() * $limitY);
			}

			ctx.shadowColor = effectAttrs.lineGlow;
			ctx.shadowBlur  = 20;
			ctx.stroke();

			render(cornerSpikesEffect);
		}

		function floatingBoxesEffect () {

			ctx.fillStyle = effectAttrs.backgroundCol;
			ctx.fillRect(0, 0, $limitX, $limitY);

			for (var i = 0; i < squareData.length; i++) {

				var current = squareData[i];
				var X       = 0,
				Y       = 1,
				SIZE    = 2,
				COLOR   = 3,
				SPEED   = 4;

				ctx.fillStyle = current[COLOR];
				ctx.fillRect(current[X], current[Y], current[SIZE], current[SIZE]);

				current[X] += current[SPEED];
				current[Y] -= current[SPEED];

				if (current[X] > $limitX + effectAttrs.maxBoxSize || current[Y] < -effectAttrs.maxBoxSize) {
					squareData.splice(i, 1);

					// Random x, y, side length, color, speed
					if (effectAttrs.specificColors.length == 0) {
						squareData.push([Math.random() * $limitX * 2 - $limitX,
							Math.random() * $limitY*2 + $limitY, 
							Math.random() * effectAttrs.maxBoxSize + 1, 
							randCol(255, 255, 255, (effectAttrs.transparent ? .5 : 1)),
							Math.random() * 5]);
					} else {
						squareData.push([Math.random() * $limitX * 2 - $limitX, 
							Math.random() * $limitY*2 + $limitY, 
							Math.random() * effectAttrs.maxBoxSize + 1, 
							effectAttrs.specificColors[Math.floor(Math.random() * effectAttrs.specificColors.length)], 
							Math.random() * 5]);
					}
				}
			}

			render(floatingBoxesEffect);
		}


		// Effects
		switch (theme) {
		case "squareFlash":
			squareFlashEffect();
			break;

		case "vortex":

			var dx = 2;
			var dy = 4;
			var x = $limitX/2;
			var y = $limitY/2;

			vortexEffect();

			break;

		case "bouncingBalls":
			circleData = [];

			for (var i = 0; i < effectAttrs.bounceBallCount; i++) {

				// Random x, y, radius, dx, dy, (col)
				if (effectAttrs.specificColors.length == 0) {
					circleData.push([Math.random() * $limitX, 
						Math.random() * $limitY,
						Math.random() * effectAttrs.maxRadius, 
						Math.random() * 2, 
						Math.random() * 4, 
						randCol(255, 255, 255, (effectAttrs.transparent ? .5 : 1))]);
				} else {
					circleData.push([Math.random() * $limitX, 
						Math.random() * $limitY, 
						Math.random() * effectAttrs.maxRadius, 
						Math.random() * 2, 
						Math.random() * 4, 
						effectAttrs.specificColors[Math.floor(Math.random() * effectAttrs.specificColors.length)]]);
				}
			}

			bouncingBallsEffect();

			break;

		case "shootingLines":
			shootingLinesEffect();
			break;

		case "simpleGradient":

			var gradient = ctx.createLinearGradient(0, 0, $limitX / 2, $limitY);
			gradient.addColorStop(0, effectAttrs.primary);
			gradient.addColorStop(1, effectAttrs.accent);

			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, $limitX, $limitY);

			break;

		case "starfield":

			var starData = [];

			for (var i = 0; i < 700; i++){
				starData.push([Math.random() * $limitX * 2 - $limitX,
					Math.random() * $limitY, 
					Math.random() * effectAttrs.starSize, 
					Math.ceil(Math.random() * 5)]);
			}

			starfieldEffect();
			break;

		case "layeredTriangles":

			ctx.fillStyle = effectAttrs.backgroundCol;
			ctx.fillRect(0, 0, $limitX, $limitY);

			for (var i = 0; i < effectAttrs.triangles; i++) {

				ctx.beginPath();
				ctx.moveTo(Math.random() * $limitX, Math.random() * $limitY);
				ctx.lineTo(Math.random() * $limitX, Math.random() * $limitY);
				ctx.lineTo(Math.random() * $limitX, Math.random() * $limitY);

				if (effectAttrs.specificColors.length > 0) {
					ctx.fillStyle = effectAttrs.specificColors[Math.floor(Math.random() * effectAttrs.specificColors.length)];
				} else {
					ctx.fillStyle = randCol(255, 255, 255, .5);
				}

				ctx.closePath();
				ctx.fill();

			}

			break;

		case "cornerSpikes":

			ctx.fillStyle = effectAttrs.backgroundCol;
			ctx.fillRect(0, 0, $limitX, $limitY);

			cornerSpikesEffect();

			break;

		case "floatingBoxes":

			var squareData = [];

			for (var i = 0; i < effectAttrs.boxCount; i++) {

				// Random x, y, side length, color
				if (effectAttrs.specificColors.length == 0){
					squareData.push([Math.random() * $limitX * 2 - $limitX,
						Math.random() * $limitY, 
						Math.random() * effectAttrs.maxBoxSize + 1,
						randCol(255, 255, 255, (effectAttrs.transparent ? .5 : 1)),
						Math.random() * 5]);
				} else {
					squareData.push([Math.random() * $limitX * 2 - $limitX,
						Math.random() * $limitY,
						Math.random() * effectAttrs.maxBoxSize + 1,
						effectAttrs.specificColors[Math.floor(Math.random() * effectAttrs.specificColors.length)],
						Math.random() * 5]);
				}
			}

			floatingBoxesEffect();

			break;
		};
	}

	// back to top btn JS
	$(document).on("scroll resize", function(){
		var pixels = $(document).scrollTop();
		var pageHeight = $(document).height() - $(window).height();
		var progress = 100 * pixels / pageHeight;

		$("div.progress").css("width", progress + "%");
		
		$(".percent svg circle:nth-child(2)").css("stroke-dashoffset", "calc(125 - (125 * " + progress + ") / 100)");
	});
	$(window).on('load scroll',function(){
		var	windowTop = $(window).scrollTop();
		if(windowTop > 10) {
			$('.back_to_top_btn').fadeIn();
		} else {
			$('.back_to_top_btn').fadeOut();
		}
	});
	$('.percent').on('click', function (event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0,
		}, 800);
	});

	// custom select JS
	$(".custom_select").each(function(){
		var input    = $(this).find("input");
		var dropDown = $(this).find("ul");
		var dropDownitem = $(this).find(".cselect_options");
		var closeBtn = $(this).find(".select_close_btn");
		var closeBtnlist = $(this).find(".cselect_options span");

		$(dropDownitem).hide();
		input.on("click", function(){
			$(dropDownitem).slideToggle();
			$(input).parent().toggleClass("list_open");
		}); 
		$(dropDown).on("click", "li", function(){
			input.val( $(this).text());
			$(input).addClass("active_select");
			$(dropDownitem).slideUp();
		});
		$(closeBtn).on("click", function(){
			input.val( $(input).attr('placeholder'));
			$(input).removeClass("active_select");
			$(dropDownitem).slideUp();
			$(input).parent().removeClass("list_open");
		});
		$(closeBtnlist).on("click", function(){
			input.val( $(input).attr('placeholder'));
			$(input).removeClass("active_select");
			$(dropDownitem).slideUp();
			$(input).parent().removeClass("list_open");
		});
	});

	// custom select inner list JS
	$(".custom_select_inner_list").each(function(){
		var input    = $(this).find("input");
		var dropDown = $(this).find(".cselect_options_list");
		var dropDownlist = $(this).find(".cselect_options_list li");
		var dropDownitem = $(this).find(".cselect_options");
		var closeBtn = $(this).find(".select_close_btn");
		var closeBtnlist = $(this).find(".select_footer");
		var innerList = $(this).find(".custom_select_inner_list_content");
		var backBtn = $(this).find(".select_back_btn");

		$(backBtn).hide();
		$(dropDownitem).hide();
		$(innerList).hide();
		$(input).on("click", function(){
			$(dropDownitem).slideToggle();
			$(input).parent().toggleClass("list_open");
		}); 
		$(dropDownlist).on("click", function(){
			$(this).children(innerList).addClass("inner_list_active");
			$(backBtn).show();
		});
		$(innerList).on("click", "p", function(){
			input.val( $(this).text());
			$(input).addClass("active_select");
			$(dropDownitem).slideUp();
		});
		$(closeBtn).on("click", function(){
			input.val( $(input).attr('placeholder'));
			$(input).removeClass("active_select");
			$(dropDownitem).slideUp();
			$(input).parent().removeClass("list_open");
			$(backBtn).hide();
			$(dropDownlist).children(innerList).removeClass("inner_list_active");
		});
		$(closeBtnlist).on("click", function(){
			input.val( $(input).attr('placeholder'));
			$(input).removeClass("active_select");
			$(dropDownitem).slideUp();
			$(input).parent().removeClass("list_open");
			$(backBtn).hide();
			$(this).children(innerList).removeClass("inner_list_active");
		});
		$(backBtn).on("click", function(){
			$(dropDownlist).children(innerList).removeClass("inner_list_active");
			$(this).hide();
		});
	});
});