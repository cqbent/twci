/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.my_custom_behavior = {
    attach: function(context, settings) {
    
    // consultation form  
    $('#block-entityform-block-schedule-consultation .box-lower, #block-entityform-block-schedule-consultation .block__title').click(function() {
        // if form elements hidden then hide; otherwise show; change box-lower status
        if ($('#block-entityform-block-schedule-consultation').hasClass('active')) {
            $('#block-entityform-block-schedule-consultation').removeClass('active');
        }
        else {
            $('#block-entityform-block-schedule-consultation').addClass('active');
        }        
    });
    
    // home page: get height of window and set content to height
    var window_height = $(window).height();
    $('#page #content').css('min-height', window_height-150);
    
     /* mobile menu - add action */
    $('.block-menu-block').click(function() {
        if ($('.block-menu-block').hasClass('menu-active')) {
            $('.block-menu-block').removeClass('menu-active');
        }
        else {
            $('.block-menu-block').addClass('menu-active');
        }
    });
    
    /* desktop menu - add action when hovering over top menu items */
    var bmb_menu_trail = '.block-menu-block .menu-block-wrapper > .menu > li';
    // add active class to header on hover
    $('#header').hover(
        function() { 
            $(this).addClass('active'); 
        },
        function() { 
            $(this).removeClass('active'); 
            $(bmb_menu_trail).removeClass('hover');
        }
    );
    // add hover class when hovering over top menu items
    $(bmb_menu_trail).hover(function() {
        $(bmb_menu_trail).removeClass('hover');
        $(this).addClass('hover');
    });
    
    /* home page mobile - push feature bar to bottom of page */
    // get height of window; push body field to bottom
    var w_height = $(window).height();
    var f_height = $('#footer').height() + 20;
    var col1_height = $('.field-name-body .col1').height() + 20;
    var margin_y = w_height - f_height - col1_height;
    $('.front #main .field-name-body').css('margin-top',margin_y);
    console.log('w_height: '+w_height+', f_height: '+f_height+', col1_height: '+col1_height);

  }
};


})(jQuery, Drupal, this, this.document);
