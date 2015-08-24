
// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () { };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


//Responsive Mobile Toggle Menu 

/*Variables*/

var navClassSelector = '.mainMenu'; // Make sure to include the . 
var labelClassSelector = '.menuTitle'; // Make sure to include the . 
var toggleChildrenClass = 'toggleChildren'; // Don't include .

/*Functions*/

/*
Call this function on page if you want to reset the menu 
to 'closed' on page load with optional slideToggle animation
*/
var responsiveMenu = function (e) {
    $(navClassSelector + '> ul').css({ 'max-height': '100%', 'display': 'none' });
    $(labelClassSelector).click(function () {
        $(navClassSelector + '> ul').slideToggle(); //Can use toggle() if you prefer no animation
    });
}

/*
Call this function on page if you want to reset the menu 
to 'closed' after clicking a menu link e.g. use for on page 
anchor menu as per demo2.html
*/

var forceUncheck = function () {
    $(navClassSelector + ' ul a').click(function () {
        $("#toggleMenu").prop('checked', false);
    });
}

/* This function should be called if you want to toggle 
Children as per demo3.html */

var toggleChildren = function () {

    $(navClassSelector + '> ul > li').each(function () {
        if ($(this).children("ul").length > 0) {
            $(this).prepend('<a class="' + toggleChildrenClass + '" href="#"></a>');
        } else {
            //do nothing
        }
    })

    // Menu functions
    $(navClassSelector + '> ul ul').hide();
    $(navClassSelector + ' .' + toggleChildrenClass).click(function () {
        $(this).toggleClass("contract");
        $(this).siblings("ul").toggle();
        return false;
    })

}



//Gallery

$(window).load(function () {

    var size = 1;
    var button = 1;
    var button_class = "gallery-header-center-right-links-current";
    var normal_size_class = "gallery-content-center-normal";
    var full_size_class = "gallery-content-center-full";
    var $container = $('#gallery-content-center');

    $container.isotope({ itemSelector: 'img' });


    function check_button() {
        $('.gallery-header-center-right-links').removeClass(button_class);
        if (button == 1) {
            $("#filter-all").addClass(button_class);
            $("#gallery-header-center-left-title").html('All Galleries');
        }
        if (button == 2) {
            $("#filter-studio").addClass(button_class);
            $("#gallery-header-center-left-title").html('Studio Gallery');
        }
        if (button == 3) {
            $("#filter-landscape").addClass(button_class);
            $("#gallery-header-center-left-title").html('Landscape Gallery');
        }
    }

    function check_size() {
        $("#gallery-content-center").removeClass(normal_size_class).removeClass(full_size_class);
        if (size == 0) {
            $("#gallery-content-center").addClass(normal_size_class);
            $("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23a;"></span>');
        }
        if (size == 1) {
            $("#gallery-content-center").addClass(full_size_class);
            $("#gallery-header-center-left-icon").html('<span class="iconb" data-icon="&#xe23b;"></span>');
        }
        $container.isotope({ itemSelector: 'img' });
    }



    $("#filter-all").click(function () { $container.isotope({ filter: '.all' }); button = 1; check_button(); });
    $("#filter-studio").click(function () { $container.isotope({ filter: '.studio' }); button = 2; check_button(); });
    $("#filter-landscape").click(function () { $container.isotope({ filter: '.landscape' }); button = 3; check_button(); });
    $("#gallery-header-center-left-icon").click(function () { if (size == 0) { size = 1; } else if (size == 1) { size = 0; } check_size(); });


    check_button();
    check_size();
});