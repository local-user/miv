//
// | javascript - jquey - object - welcome
//
//
//  Function(s)
//
//      display
//      display_hide
//      display_show
//
//
//
//
var welcome = {




    // global(s)
    visibility: 0,


    // identity
    identify : function() {

        // console - log
        console.log(' I js/jquery/object/welcome.js');

        // return
        return true;

    },


    // | function(s)

        // function - welcome - display
        display : function() {

            // display - toggle
            if ( this.visibility === 0 ){

                // display - show
                this.display_show();

            } else {

                // display - hide
                this.display_hide();

            }

            // return
            return true;

        },

        // function - welcome - display - hide
        display_hide : function() {

            // body - remove - class - welcome
            setTimeout(function() {
                $(" #body ").removeClass('welcome');
            }, 1100);

            // welcome - hide
            $(" #welcome ").addClass('hidden');

            // update - visibility
            this.visibility = 0;

            // display - text - hide
            this.display_text_hide();

            // return
            return true;

        },

        // function - welcome - display - show
        display_show : function() {

            // body - add - class - welcome
            $(" #body ").addClass('welcome');

            // welcome - remove - class - hidden
            $(" #welcome ").removeClass('hidden');

            // update - visibility
            this.visibility = 1;

            // return
            return true;

        },

        // function - welcome - display - text
        display_text : function() {

            // welcome - welcome - toggle - class - hidden
            $( "#welcome-title" ).toggleClass('hidden');

            // return
            return true;

        },

        // function - welcome - display - text - hide
        display_text_hide : function() {

            // welcome - welcome - add - class - hidden
            $( "#welcome-title" ).addClass('hidden');

            // return
            return true;

        }

    // function(s) |




}
//
//
// js - jquery - toggle - welcome |
//
if (debug) { console.log(' . js/jquery/object/welcome.js'); }
