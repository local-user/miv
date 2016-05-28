//
// | javascript - jquey - object - setting
//
//
//
//
//  Function(s)
//
//      -- create( setting )
//
//
//
//
var setting = {




    // global(s)
    identity:       'js/jquery/object/setting.js',
    visibility:     0,


    // identity
    identify : function() {

        // console - log - identity
        console.log(' I ' + this.identity);

        // return
        return true;

    },


    // | function(s)

        display : function() {

            // display - toggle
            if ( this.visibility === 0 ){

                // display - show
                this.display_show();

                // update - visibility
                this.visibility = 1;

            } else {

                // display - hide
                this.display_hide();

                // update - visibility
                this.visibility = 0;

            }

            // return
            return true;

        },

        display_hide : function() {

            // setting - add - hidden
            $("#setting").addClass("hidden");

            // setting - remove - color-text-active
            $("#header-toggle-setting").removeClass("color-setting-text-active");

            // return
            return true;

        },

        display_show : function() {

            // setting - remove - hidden
            $("#setting").removeClass("hidden");

            // setting - add - color-text-active
            $("#header-toggle-setting").addClass("color-setting-text-active");

            // scroll - to - settings
            $('html, body').animate({
                scrollTop: $("#setting").offset().top
            }, 1000);

            // return
            return true;

        },

    // function(s) |




}
//
//
//
//
// js - jquery - object - setting |
//
if( debug ){ console.log(' . js/jquery/object/setting.js'); }
