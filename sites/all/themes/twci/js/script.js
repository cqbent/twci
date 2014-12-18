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

  }
};


})(jQuery, Drupal, this, this.document);
