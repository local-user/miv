//
// | javascript - jquey - object - header
//
console.log(' . js/jquery/object/header.js');
//
//
//
//
//  Function(s)
//
//      display
//      display_body
//      display_hide
//      display_show
//
//
//
//
var header = {




    // global(s)
    visibility: 0,


    // identity
    identify : function() {

        // console - log
        console.log(' I js/jquery/object/header.js');

        // return
        return true;

    },


    // | function(s)

        // function - header - display
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

        // function - header - display - hide
        display_hide : function() {

            // header - title - remove - active
            $( "#header-title h1" ).removeClass( "color-header-title-active " );

            // header - toggle - add - hidden
            $( "#header"       ).addClass( "hidden" );
            $( "#header-toggle").addClass( "hidden" );

            // return
            return true;

        },

        // function - header - display - show
        display_show : function() {

            // header - title - add - active
            $( "#header-title h1" ).addClass( "color-header-title-active " );

            // header - toggle - remove - hidden
            $( "#header"        ).removeClass( "hidden" );
            $( "#header-toggle" ).removeClass( "hidden" );

            // return
            return true;

        }





    // function(s) |




}
//
//
// js - jquery - toggle - header |
//
