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
		$(this).addClass("done");
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


// WebGL JS
'use strict';

const canvas = document.getElementsByTagName('canvas')[0];
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

let config = {
	TEXTURE_DOWNSAMPLE: 1,
	DENSITY_DISSIPATION: 0.98,
	VELOCITY_DISSIPATION: 0.99,
	PRESSURE_DISSIPATION: 0.8,
	PRESSURE_ITERATIONS: 25,
	CURL: 30,
	SPLAT_RADIUS: 0.005
}

let pointers = [];
let splatStack = [];

const  { gl, ext } = getWebGLContext(canvas);

function getWebGLContext (canvas) {
	const params = { alpha: false, depth: false, stencil: false, antialias: false };

	let gl = canvas.getContext('webgl2', params);
	const isWebGL2 = !!gl;
	if (!isWebGL2)
		gl = canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params);

	let halfFloat;
	let supportLinearFiltering;
	if (isWebGL2) {
		gl.getExtension('EXT_color_buffer_float');
		supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
	} else {
		halfFloat = gl.getExtension('OES_texture_half_float');
		supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
	}

	gl.clearColor(0.0, 0.0, 0.0, 1.0);

	const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;
	let formatRGBA;
	let formatRG;
	let formatR;

	if (isWebGL2)
	{
		formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);
		formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
		formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
	}
	else
	{
		formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
		formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
		formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
	}

	return {
		gl,
		ext: {
			formatRGBA,
			formatRG,
			formatR,
			halfFloatTexType,
			supportLinearFiltering
		}
	};
}

function getSupportedFormat (gl, internalFormat, format, type)
{
	if (!supportRenderTextureFormat(gl, internalFormat, format, type))
	{
		switch (internalFormat)
		{
		case gl.R16F:
			return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
		case gl.RG16F:
			return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
		default:
			return null;
		}
	}

	return {
		internalFormat,
		format
	}
}

function supportRenderTextureFormat (gl, internalFormat, format, type) {
	let texture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);

	let fbo = gl.createFramebuffer();
	gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

	const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
	if (status != gl.FRAMEBUFFER_COMPLETE)
		return false;
	return true;
}

function pointerPrototype () {
	this.id = -1;
	this.x = 0;
	this.y = 0;
	this.dx = 0;
	this.dy = 0;
	this.down = false;
	this.moved = false;
	this.color = [30, 0, 300];
}

pointers.push(new pointerPrototype());

class GLProgram {
	constructor (vertexShader, fragmentShader) {
		this.uniforms = {};
		this.program = gl.createProgram();

		gl.attachShader(this.program, vertexShader);
		gl.attachShader(this.program, fragmentShader);
		gl.linkProgram(this.program);

		if (!gl.getProgramParameter(this.program, gl.LINK_STATUS))
			throw gl.getProgramInfoLog(this.program);

		const uniformCount = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
		for (let i = 0; i < uniformCount; i++) {
			const uniformName = gl.getActiveUniform(this.program, i).name;
			this.uniforms[uniformName] = gl.getUniformLocation(this.program, uniformName);
		}
	}

	bind () {
		gl.useProgram(this.program);
	}
}

function compileShader (type, source) {
	const shader = gl.createShader(type);
	gl.shaderSource(shader, source);
	gl.compileShader(shader);

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))
		throw gl.getShaderInfoLog(shader);

	return shader;
};

const baseVertexShader = compileShader(gl.VERTEX_SHADER, `
	precision highp float;
	precision mediump sampler2D;

	attribute vec2 aPosition;
	varying vec2 vUv;
	varying vec2 vL;
	varying vec2 vR;
	varying vec2 vT;
	varying vec2 vB;
	uniform vec2 texelSize;

	void main () {
		vUv = aPosition * 0.5 + 0.5;
		vL = vUv - vec2(texelSize.x, 0.0);
		vR = vUv + vec2(texelSize.x, 0.0);
		vT = vUv + vec2(0.0, texelSize.y);
		vB = vUv - vec2(0.0, texelSize.y);
		gl_Position = vec4(aPosition, 0.0, 1.0);
	}
	`);

const clearShader = compileShader(gl.FRAGMENT_SHADER, `
	precision highp float;
	precision mediump sampler2D;

	varying vec2 vUv;
	uniform sampler2D uTexture;
	uniform float value;

	void main () {
		gl_FragColor = value * texture2D(uTexture, vUv);
	}
	`);

const displayShader = compileShader(gl.FRAGMENT_SHADER, `
	precision highp float;
	precision mediump sampler2D;

	varying vec2 vUv;
	uniform sampler2D uTexture;

	void main () {
		gl_FragColor = texture2D(uTexture, vUv);
	}
	`);

const splatShader = compileShader(gl.FRAGMENT_SHADER, `
	precision highp float;
	precision mediump sampler2D;

	varying vec2 vUv;
	uniform sampler2D uTarget;
	uniform float aspectRatio;
	uniform vec3 color;
	uniform vec2 point;
	uniform float radius;

	void main () {
		vec2 p = vUv - point.xy;
		p.x *= aspectRatio;
		vec3 splat = exp(-dot(p, p) / radius) * color;
		vec3 base = texture2D(uTarget, vUv).xyz;
		gl_FragColor = vec4(base + splat, 1.0);
	}
	`);

const advectionManualFilteringShader = compileShader(gl.FRAGMENT_SHADER, `
	precision highp float;
	precision mediump sampler2D;

	varying vec2 vUv;
	uniform sampler2D uVelocity;
	uniform sampler2D uSource;
	uniform vec2 texelSize;
	uniform float dt;
	uniform float dissipation;

	vec4 bilerp (in sampler2D sam, in vec2 p) {
		vec4 st;
		st.xy = floor(p - 0.5) + 0.5;
		st.zw = st.xy + 1.0;
		vec4 uv = st * texelSize.xyxy;
		vec4 a = texture2D(sam, uv.xy);
		vec4 b = texture2D(sam, uv.zy);
		vec4 c = texture2D(sam, uv.xw);
		vec4 d = texture2D(sam, uv.zw);
		vec2 f = p - st.xy;
		return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
	}

	void main () {
		vec2 coord = gl_FragCoord.xy - dt * texture2D(uVelocity, vUv).xy;
		gl_FragColor = dissipation * bilerp(uSource, coord);
		gl_FragColor.a = 1.0;
	}
	`);

const advectionShader = compileShader(gl.FRAGMENT_SHADER, `
	precision highp float;
	precision mediump sampler2D;

	varying vec2 vUv;
	uniform sampler2D uVelocity;
	uniform sampler2D uSource;
	uniform vec2 texelSize;
	uniform float dt;
	uniform float dissipation;

	void main () {
		vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
		gl_FragColor = dissipation * texture2D(uSource, coord);
		gl_FragColor.a = 1.0;
	}
	`);

const divergenceShader = compileShader(gl.FRAGMENT_SHADER, `
	precision highp float;
	precision mediump sampler2D;

	varying vec2 vUv;
	varying vec2 vL;
	varying vec2 vR;
	varying vec2 vT;
	varying vec2 vB;
	uniform sampler2D uVelocity;

	vec2 sampleVelocity (in vec2 uv) {
		vec2 multiplier = vec2(1.0, 1.0);
		if (uv.x < 0.0) { uv.x = 0.0; multiplier.x = -1.0; }
		if (uv.x > 1.0) { uv.x = 1.0; multiplier.x = -1.0; }
		if (uv.y < 0.0) { uv.y = 0.0; multiplier.y = -1.0; }
		if (uv.y > 1.0) { uv.y = 1.0; multiplier.y = -1.0; }
		return multiplier * texture2D(uVelocity, uv).xy;
	}

	void main () {
		float L = sampleVelocity(vL).x;
		float R = sampleVelocity(vR).x;
		float T = sampleVelocity(vT).y;
		float B = sampleVelocity(vB).y;
		float div = 0.5 * (R - L + T - B);
		gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
	}
	`);

const curlShader = compileShader(gl.FRAGMENT_SHADER, `
	precision highp float;
	precision mediump sampler2D;

	varying vec2 vUv;
	varying vec2 vL;
	varying vec2 vR;
	varying vec2 vT;
	varying vec2 vB;
	uniform sampler2D uVelocity;

	void main () {
		float L = texture2D(uVelocity, vL).y;
		float R = texture2D(uVelocity, vR).y;
		float T = texture2D(uVelocity, vT).x;
		float B = texture2D(uVelocity, vB).x;
		float vorticity = R - L - T + B;
		gl_FragColor = vec4(vorticity, 0.0, 0.0, 1.0);
	}
	`);

const vorticityShader = compileShader(gl.FRAGMENT_SHADER, `
	precision highp float;
	precision mediump sampler2D;

	varying vec2 vUv;
	varying vec2 vT;
	varying vec2 vB;
	uniform sampler2D uVelocity;
	uniform sampler2D uCurl;
	uniform float curl;
	uniform float dt;

	void main () {
		float T = texture2D(uCurl, vT).x;
		float B = texture2D(uCurl, vB).x;
		float C = texture2D(uCurl, vUv).x;
		vec2 force = vec2(abs(T) - abs(B), 0.0);
		force *= 1.0 / length(force + 0.00001) * curl * C;
		vec2 vel = texture2D(uVelocity, vUv).xy;
		gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
	}
	`);

const pressureShader = compileShader(gl.FRAGMENT_SHADER, `
	precision highp float;
	precision mediump sampler2D;

	varying vec2 vUv;
	varying vec2 vL;
	varying vec2 vR;
	varying vec2 vT;
	varying vec2 vB;
	uniform sampler2D uPressure;
	uniform sampler2D uDivergence;

	vec2 boundary (in vec2 uv) {
		uv = min(max(uv, 0.0), 1.0);
		return uv;
	}

	void main () {
		float L = texture2D(uPressure, boundary(vL)).x;
		float R = texture2D(uPressure, boundary(vR)).x;
		float T = texture2D(uPressure, boundary(vT)).x;
		float B = texture2D(uPressure, boundary(vB)).x;
		float C = texture2D(uPressure, vUv).x;
		float divergence = texture2D(uDivergence, vUv).x;
		float pressure = (L + R + B + T - divergence) * 0.25;
		gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
	}
	`);

const gradientSubtractShader = compileShader(gl.FRAGMENT_SHADER, `
	precision highp float;
	precision mediump sampler2D;

	varying vec2 vUv;
	varying vec2 vL;
	varying vec2 vR;
	varying vec2 vT;
	varying vec2 vB;
	uniform sampler2D uPressure;
	uniform sampler2D uVelocity;

	vec2 boundary (in vec2 uv) {
		uv = min(max(uv, 0.0), 1.0);
		return uv;
	}

	void main () {
		float L = texture2D(uPressure, boundary(vL)).x;
		float R = texture2D(uPressure, boundary(vR)).x;
		float T = texture2D(uPressure, boundary(vT)).x;
		float B = texture2D(uPressure, boundary(vB)).x;
		vec2 velocity = texture2D(uVelocity, vUv).xy;
		velocity.xy -= vec2(R - L, T - B);
		gl_FragColor = vec4(velocity, 0.0, 1.0);
	}
	`);

let textureWidth;
let textureHeight;
let density;
let velocity;
let divergence;
let curl;
let pressure;
initFramebuffers();

const clearProgram = new GLProgram(baseVertexShader, clearShader);
const displayProgram = new GLProgram(baseVertexShader, displayShader);
const splatProgram = new GLProgram(baseVertexShader, splatShader);
const advectionProgram = new GLProgram(baseVertexShader, ext.supportLinearFiltering ? advectionShader : advectionManualFilteringShader);
const divergenceProgram = new GLProgram(baseVertexShader, divergenceShader);
const curlProgram = new GLProgram(baseVertexShader, curlShader);
const vorticityProgram = new GLProgram(baseVertexShader, vorticityShader);
const pressureProgram = new GLProgram(baseVertexShader, pressureShader);
const gradienSubtractProgram = new GLProgram(baseVertexShader, gradientSubtractShader);

function initFramebuffers () {
	textureWidth = gl.drawingBufferWidth >> config.TEXTURE_DOWNSAMPLE;
	textureHeight = gl.drawingBufferHeight >> config.TEXTURE_DOWNSAMPLE;

	const texType = ext.halfFloatTexType;
	const rgba = ext.formatRGBA;
	const rg   = ext.formatRG;
	const r    = ext.formatR;

	density    = createDoubleFBO(2, textureWidth, textureHeight, rgba.internalFormat, rgba.format, texType, ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST);
	velocity   = createDoubleFBO(0, textureWidth, textureHeight, rg.internalFormat, rg.format, texType, ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST);
	divergence = createFBO      (4, textureWidth, textureHeight, r.internalFormat, r.format, texType, gl.NEAREST);
	curl       = createFBO      (5, textureWidth, textureHeight, r.internalFormat, r.format, texType, gl.NEAREST);
	pressure   = createDoubleFBO(6, textureWidth, textureHeight, r.internalFormat, r.format, texType, gl.NEAREST);
}

function createFBO (texId, w, h, internalFormat, format, type, param) {
	gl.activeTexture(gl.TEXTURE0 + texId);
	let texture = gl.createTexture();
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

	let fbo = gl.createFramebuffer();
	gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
	gl.viewport(0, 0, w, h);
	gl.clear(gl.COLOR_BUFFER_BIT);

	return [texture, fbo, texId];
}

function createDoubleFBO (texId, w, h, internalFormat, format, type, param) {
	let fbo1 = createFBO(texId    , w, h, internalFormat, format, type, param);
	let fbo2 = createFBO(texId + 1, w, h, internalFormat, format, type, param);

	return {
		get read () {
			return fbo1;
		},
		get write () {
			return fbo2;
		},
		swap () {
			let temp = fbo1;
			fbo1 = fbo2;
			fbo2 = temp;
		}
	}
}

const blit = (() => {
	gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
	gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(0);

	return (destination) => {
		gl.bindFramebuffer(gl.FRAMEBUFFER, destination);
		gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
	}
})();

let lastTime = Date.now();
multipleSplats(parseInt(Math.random() * 20) + 5);
update();

function update () {
	resizeCanvas();

	const dt = Math.min((Date.now() - lastTime) / 1000, 0.016);
	lastTime = Date.now();

	gl.viewport(0, 0, textureWidth, textureHeight);

	if (splatStack.length > 0)
		multipleSplats(splatStack.pop());

	advectionProgram.bind();
	gl.uniform2f(advectionProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
	gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read[2]);
	gl.uniform1i(advectionProgram.uniforms.uSource, velocity.read[2]);
	gl.uniform1f(advectionProgram.uniforms.dt, dt);
	gl.uniform1f(advectionProgram.uniforms.dissipation, config.VELOCITY_DISSIPATION);
	blit(velocity.write[1]);
	velocity.swap();

	gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read[2]);
	gl.uniform1i(advectionProgram.uniforms.uSource, density.read[2]);
	gl.uniform1f(advectionProgram.uniforms.dissipation, config.DENSITY_DISSIPATION);
	blit(density.write[1]);
	density.swap();

	for (let i = 0; i < pointers.length; i++) {
		const pointer = pointers[i];
		if (pointer.moved) {
			splat(pointer.x, pointer.y, pointer.dx, pointer.dy, pointer.color);
			pointer.moved = false;
		}
	}

	curlProgram.bind();
	gl.uniform2f(curlProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
	gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read[2]);
	blit(curl[1]);

	vorticityProgram.bind();
	gl.uniform2f(vorticityProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
	gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read[2]);
	gl.uniform1i(vorticityProgram.uniforms.uCurl, curl[2]);
	gl.uniform1f(vorticityProgram.uniforms.curl, config.CURL);
	gl.uniform1f(vorticityProgram.uniforms.dt, dt);
	blit(velocity.write[1]);
	velocity.swap();

	divergenceProgram.bind();
	gl.uniform2f(divergenceProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
	gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read[2]);
	blit(divergence[1]);

	clearProgram.bind();
	let pressureTexId = pressure.read[2];
	gl.activeTexture(gl.TEXTURE0 + pressureTexId);
	gl.bindTexture(gl.TEXTURE_2D, pressure.read[0]);
	gl.uniform1i(clearProgram.uniforms.uTexture, pressureTexId);
	gl.uniform1f(clearProgram.uniforms.value, config.PRESSURE_DISSIPATION);
	blit(pressure.write[1]);
	pressure.swap();

	pressureProgram.bind();
	gl.uniform2f(pressureProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
	gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence[2]);
	pressureTexId = pressure.read[2];
	gl.uniform1i(pressureProgram.uniforms.uPressure, pressureTexId);
	gl.activeTexture(gl.TEXTURE0 + pressureTexId);
	for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
		gl.bindTexture(gl.TEXTURE_2D, pressure.read[0]);
		blit(pressure.write[1]);
		pressure.swap();
	}

	gradienSubtractProgram.bind();
	gl.uniform2f(gradienSubtractProgram.uniforms.texelSize, 1.0 / textureWidth, 1.0 / textureHeight);
	gl.uniform1i(gradienSubtractProgram.uniforms.uPressure, pressure.read[2]);
	gl.uniform1i(gradienSubtractProgram.uniforms.uVelocity, velocity.read[2]);
	blit(velocity.write[1]);
	velocity.swap();

	gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
	displayProgram.bind();
	gl.uniform1i(displayProgram.uniforms.uTexture, density.read[2]);
	blit(null);

	requestAnimationFrame(update);
}

function splat (x, y, dx, dy, color) {
	splatProgram.bind();
	gl.uniform1i(splatProgram.uniforms.uTarget, velocity.read[2]);
	gl.uniform1f(splatProgram.uniforms.aspectRatio, canvas.width / canvas.height);
	gl.uniform2f(splatProgram.uniforms.point, x / canvas.width, 1.0 - y / canvas.height);
	gl.uniform3f(splatProgram.uniforms.color, dx, -dy, 1.0);
	gl.uniform1f(splatProgram.uniforms.radius, config.SPLAT_RADIUS);
	blit(velocity.write[1]);
	velocity.swap();

	gl.uniform1i(splatProgram.uniforms.uTarget, density.read[2]);
	gl.uniform3f(splatProgram.uniforms.color, color[0] * 0.3, color[1] * 0.3, color[2] * 0.3);
	blit(density.write[1]);
	density.swap();
}

function multipleSplats (amount) {
	for (let i = 0; i < amount; i++) {
		const color = [Math.random() * 10, Math.random() * 10, Math.random() * 10];
		const x = canvas.width * Math.random();
		const y = canvas.height * Math.random();
		const dx = 1000 * (Math.random() - 0.5);
		const dy = 1000 * (Math.random() - 0.5);
		splat(x, y, dx, dy, color);
	}
}

function resizeCanvas () {
	if (canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) {
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;
		initFramebuffers();
	}
}

canvas.addEventListener('mousemove', (e) => {
	pointers[0].moved = pointers[0].down;
	pointers[0].dx = (e.offsetX - pointers[0].x) * 10.0;
	pointers[0].dy = (e.offsetY - pointers[0].y) * 10.0;
	pointers[0].x = e.offsetX;
	pointers[0].y = e.offsetY;
});

canvas.addEventListener('touchmove', (e) => {
	e.preventDefault();
	const touches = e.targetTouches;
	for (let i = 0; i < touches.length; i++) {
		let pointer = pointers[i];
		pointer.moved = pointer.down;
		pointer.dx = (touches[i].pageX - pointer.x) * 10.0;
		pointer.dy = (touches[i].pageY - pointer.y) * 10.0;
		pointer.x = touches[i].pageX;
		pointer.y = touches[i].pageY;
	}
}, false);

		// canvas.addEventListener('mousedown', () => {
		// canvas.addEventListener('mousemove', () => {
canvas.addEventListener('mouseover', () => {
	pointers[0].down = true;
	pointers[0].color = [Math.random() + 0.2, Math.random() + 0.2, Math.random() + 0.2];
});

canvas.addEventListener('touchstart', (e) => {
	e.preventDefault();
	const touches = e.targetTouches;
	for (let i = 0; i < touches.length; i++) {
		if (i >= pointers.length)
			pointers.push(new pointerPrototype());

		pointers[i].id = touches[i].identifier;
		pointers[i].down = true;
		pointers[i].x = touches[i].pageX;
		pointers[i].y = touches[i].pageY;
		pointers[i].color = [Math.random() + 0.2, Math.random() + 0.2, Math.random() + 0.2];
	}
});

window.addEventListener('mouseup', () => {
	pointers[0].down = false;
});

window.addEventListener('touchend', (e) => {
	const touches = e.changedTouches;
	for (let i = 0; i < touches.length; i++)
		for (let j = 0; j < pointers.length; j++)
			if (touches[i].identifier == pointers[j].id)
				pointers[j].down = false;
		});