jQuery.noConflict()(function ($) {
$(document).ready(function ($) {


    	
	// PAGE TRANSITION
		$('body a').on('click', function(e) {
			
			if (typeof $( this ).data('fancybox', 'filter') == 'undefined') {
			e.preventDefault(); 	
			var url = this.getAttribute("href"); 
			if( url.indexOf('#') != -1 ) {
			var hash = url.substring(url.indexOf('#'));
				
			if( $('body ' + hash ).length != 0 ){
			$('.transition-overlay').removeClass("active");

			}
			}
			else {
			$('.transition-overlay').toggleClass("active");
			setTimeout(function(){
			window.location = url;
			},1300); 

			}
			}
		});

    /*************************
    POSUTULER
    *************************/
    $('a.postuler').on('click', function(){
        var jobTitle = this.dataset.title;
        var jobID = this.dataset.id;
        $("#modal_title").html(jobTitle);
        $("#job_title").val(jobTitle);
        $("#id_job").val(jobID);
    })

    

    /*************************
     Superslide
    *************************/
    $('#slides').superslides({
        animation: 'fade',
        pagination:false,
        play:false,
        inherit_width_from: '.wide-container',
        inherit_height_from: '.wide-container'
    });
    $('#slides_header').superslides({
        animation: 'fade',
        pagination:false,
        inherit_width_from: '.wide-container_header',
        inherit_height_from: '.wide-container_header'
    });


    /* ---------------------------------------------------- */
        /*  SmoothScroll Init */
    /* ---------------------------------------------------- */

    (function() {

    try {
        $.browserSelector();
            var $html = $('html');
            if ($html.hasClass('chrome') || $html.hasClass('ie11') || $html.hasClass('ie10')) {
                $.smoothScroll();
            }
        } catch (err) {
    }

    }());

    /*----------------------------------------------------------*/
   /*              lightgallery                      */
   /*----------------------------------------------------------*/



    // WOW ANIMATION 
    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       100,          // default
            mobile:       true,       // default
            live:         true        // default
        }
    )
    wow.init();

    /*---------------------------------------------- 
                 Appear JS 
    ------------------------------------------------*/
   
    if ($.fn.appear){
        $('[data-ride="animated"]').appear();
        if( !$('html').hasClass('ie no-ie10') ) {       
            $('[data-ride="animated"]').addClass('appear');
            $('[data-ride="animated"]').on('appear', function() {
                var $el = $(this), $ani = ($el.data('animation') || 'fadeIn'), $delay;
                if ( !$el.hasClass('animated') ) {  
                    $delay = $el.data('delay') || 0;
                    setTimeout(function(){
                        $el.removeClass('appear').addClass( $ani + " animated" );
                    }, $delay);
                }
            });
        };
        $('.animated').appear();
        $('.number-animator').appear();
        $('.number-animator').on('appear', function() {
                $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration")));   
        });
    }

    /*---------------------------------------------- 
             menu responsive
    ------------------------------------------------*/

    jQuery('.master_menu').on("click", ".menu-button", function() { 
        jQuery('body').toggleClass('menu_shown');
        $('body').toggleClass('body--static')

    });

    //Hidden Bar Menu Config
    function hiddenBarMenuConfig() {
        var menuWrap = $('.menu_responsive');
        // appending expander button
        menuWrap.find('.dropdown').children('a').append(function () {
            return '<button type="button" class="btn expander"><i class="icon fa fa-angle-down"></i></button>';
        });
        // hidding submenu 
        menuWrap.find('.sub_menu_r').hide();
        // toggling child ul
        menuWrap.find('.btn.expander').each(function () {
            $(this).on('click', function () {
                $(this).parent() // return parent of .btn.expander (a) 
                    .parent() // return parent of a (li)
                        .children('ul').slideToggle();
    
                // adding class to expander container
                $(this).parent().toggleClass('current');
                // toggling arrow of expander
                $(this).find('i').toggleClass('fa-minus fa-bars');
    
                return false;
    
            });
        });

        menuWrap.find('a.expander').each(function () {
            $(this).on('click', function () {
                $(this).parent() // return parent of .btn.expander (a) 
                        .children('ul').slideToggle();
    
                // adding class to expander container
                $(this).toggleClass('current');
                // toggling arrow of expander
                $(this).children().find('i').toggleClass('fa-angle-up fa-angle-down');
    
                return false;
    
            });
        });


    }

    hiddenBarMenuConfig();
        
    /*************************
     Owl Slider Init
    *************************/

    if ($('#partner_slider').length) {
        var config = CONFIG.partner_slider;
        $("#partner_slider").owlCarousel(config);
    }


    /*************************
     HORIZONTAL TAB - SHORTCODES
    *************************/

    (function() {
        if($('#noo-tabs-1').length){
        $('#noo-tabs-1 a:eq(0)').tab('show');
        }
     })();

    /*************************
     Back to top
    *************************/
        var $window = $(window);
        var $goToTop = $('#back-to-top');
        $goToTop.hide();
        $window.scroll(function () {
        if ($window.scrollTop() > 100) $goToTop.fadeIn();
        else $goToTop.fadeOut();
        });
        $goToTop.on("click", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
        });


    });

    /**** Animate Numbers ****/
    if ($.fn.animateNumbers){
        $('.animate-number').each(function(){
                $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-animation-duration")));   
        })
    }



	// PRELOADER
    $(window).load(function(){
        $("body").addClass("page-loaded");	
    });
 
    if ($('#map').length && jQuery()) {
        var locations = [
              ['<strong>KAYDAN GROUPE</strong> <br>Côte d’Ivoire Abidjan, Cocody Cité Mermoz, Rue C29<br>  Tel: 225 27 22 51 11 90<br>', 5.3370184, -3.9937101],
            ];
    
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 16,
              zoomControl : true,
              scrollwheel: false,
              panControl : true,
              streetViewControl : false,
              mapTypeControl: false,
              overviewMapControl: false,
              center: new google.maps.LatLng(5.3370184, -3.9937101),
              mapTypeId: google.maps.MapTypeId.ROADMAP
            });
    
            var infowindow = new google.maps.InfoWindow();
    
            var marker, i;
    
            for (i = 0; i < locations.length; i++) {
              marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
              });
    
              google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                  infowindow.setContent(locations[i][0]);
                  infowindow.open(map, marker);
                }
              })(marker, i));
            }
        }



    /*----------------------------------------------------------*/
    //Form Validations contact
    /*----------------------------------------------------------*/
    
    function resetForm($form) {
        $form.find('input:text, input:password, input:file, select, email, textarea').val('');
        $form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
        $form.find('.form-group').removeClass('success-control');
    }
    if ($('#form_contact').length && jQuery()) { 
    var $validator = $("#form_contact").validate({
        rules: {
            email: {
                required: true,
                email: true,
                minlength: 3
            },
            nom: {
                required: true,
                minlength: 3
            },
            sujet: {
                required: true,
                minlength: 3
            },
            message: {
                required: true,
                minlength: 3
            }, 
            reponsecap: {
                required: true,
                minlength: 1
            }, 
        },
        errorPlacement: function (error, element) { // render error placement for each input type
            var icon = $(element).parent('.form-group').children('i');
            var parent = $(element).parent('.form-group');  
        },
        highlight: function (element) { // hightlight error inputs
            var parent = $(element).parent('.form-group');
            parent.removeClass('success-control').addClass('error-control'); 
        },
        unhighlight: function (element) { // revert the change done by hightlight
            
        },
        success: function (label, element) {
            var icon = $(element).parent('.form-group').children('i');
            var parent = $(element).parent('.form-group');
            parent.removeClass('error-control').addClass('success-control'); 
        },
        submitHandler: contactForm
    });

    function contactForm() {
        var donnees = jQuery("#form_contact").serialize();
        jQuery.ajax({
            type : 'POST',
            url: jQuery('form#form_contact').attr('action'),
            data : donnees,
            beforeSend: function(){ 
            },
            success :  function(response){
                if(response=="success"){
                    jQuery("#form_contact_message").fadeIn(1000, function(){
                        jQuery("#form_contact_message").html('<div class="alert alert-success"> Votre message a été envoyé, nous vous recontacterons. Merci.</div>');
                        $('#form_contact').trigger("reset");
                        resetForm(jQuery('#form_contact'));
                    });
                }else if(response=="failed"){
                    jQuery("#form_contact_message").fadeIn(1000, function(){
                        jQuery("#form_contact_message").html('<div class="alert alert-danger">Une erreur est survenue, veuillez reéessayer.</div>');
                    });  
                }else{
                    jQuery("#form_contact_message").fadeIn(1000, function(){
                        jQuery("#form_contact_message").html('<div class="alert alert-danger">Le résultat du calcul est faux. Veuillez essayer à nouveau.</div>');
                    });  
                }
                console.log(response);
                setTimeout(function(){
                    $('.alert').remove().fadeOut('slow');
                }, 10000);
            }
        });
        return false;
        
    }

    
}

    
    

});
