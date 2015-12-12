//
// | javascript - jquey - object - overlay
//
console.log(' . js/jquery/object/overlay.js');
//
//
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
var overlay = {




    // global(s)
    visibility: 0,


    // identity
    identify : function() {

        // console - log
        console.log(' I js/jquery/object/overlay.js');

        // return
        return true;

    },


    // | function(s)

        // function - overlay - display
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

        // function - overlay - display - hide
        display_hide : function() {

            // body - remove - class - overlay
            $(" #body ").removeClass('overlay');

            // welcome - hide
            $(" #welcome ").addClass('hidden');

            // update - visibility
            this.visibility = 0;

            // display - text - hide
            this.display_text_hide();

            // return
            return true;

        },

        // function - overlay - display - show
        display_show : function() {

            // body - add - class - overlay
            $(" #body ").addClass('overlay');

            // welcome - remove - class - hidden
            $(" #welcome ").removeClass('hidden');

            // update - visibility
            this.visibility = 1;

            // return
            return true;

        },

        // function - overlay - display - text
        display_text : function() {

            // overlay - welcome - toggle - class - hidden
            $( "#welcome-title" ).toggleClass('hidden');

            // return
            return true;

        },

        // function - overlay - display - text - hide
        display_text_hide : function() {

            // overlay - welcome - add - class - hidden
            $( "#welcome-title" ).addClass('hidden');

            // return
            return true;

        }

    // function(s) |




}
//
//
// js - jquery - toggle - overlay |
//
