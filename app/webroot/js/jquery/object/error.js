//
// | javascript - jquey - object - error
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
var error = {




    // global(s)
    visibility: 0,


    // identity
    identify : function() {

        // console - log
        console.log(' I js/jquery/object/error.js');

        // return
        return true;

    },


    // | function(s)

        // function - error - display
        display : function(message) {

            // display - toggle
            if ( this.visibility === 0 ){

                // display - show
                this.display_show(message);

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

        // function - error - display - hide
        display_hide : function() {

            // error - add - class(s)
            $( '#error' ).addClass( "hidden" );

            // return
            return true;

        },

        // function - error - display - show
        display_show : function(message) {

            // welcome - display - hide
            welcome.display_hide();

            // error - set - text - message
            $( '#error-message' ).text(message);

            // error - remove - class - hidden
            $( '#error' ).removeClass( "hidden" );

            // return
            return true;

        },

    // function(s) |




}
//
//
// js - jquery - toggle - error |
//
if( debug ){ console.log(' . js/jquery/object/error.js'); }
