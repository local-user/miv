//
// | javascript - jquey - object - flash
//
console.log(' . js/jquery/object/flash.js');
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
//      display_text
//
//
//
//
var flash = {




    // global(s)
    visibility: 0,


    // identity
    identify : function() {

        // console - log
        console.log(' I js/jquery/object/flash.js');

        // return
        return true;

    },


    // | function(s)

        // function - flash - display
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

        // function - flash - display - body
        display_body : function() {

            // flash - toggle - class(s) - body
            $( '#flash'             ).toggleClass( "body" );
            $( '#flash-toggle-body' ).toggleClass( 'color-flash-toggle-body' );
            $( '#flash-toggle-body' ).toggleClass( 'color-flash-toggle-body-active' );
            $( '#flash-toggle-body' ).toggleClass( 'fa-arrow-down' );
            $( '#flash-toggle-body' ).toggleClass( 'fa-arrow-up' );
            $( '#flash-toggle-love' ).toggleClass( 'hidden' );

            // return
            return true;

        },

        // function - flash - display - hide
        display_hide : function() {

            // flash - add - class(s)
            $( '#flash'                 ).addClass( "hidden" );
            $( '#flash-toggle-body'     ).addClass( 'color-flash-toggle-body' );
            $( '#flash-toggle-love'     ).addClass( 'color-flash-toggle-love' );

            // flash - remove - class(s)
            $( '#flash'                 ).removeClass( "love" );
            $( '#flash-toggle-body'     ).removeClass( 'color-flash-toggle-body-active' );
            $( '#flash-toggle-love'     ).removeClass( 'color-flash-toggle-love-active' );
            $( '#flash-toggle-message'  ).removeClass( 'hidden' );

            // return
            return true;

        },

        // function - flash - display - show
        display_show : function() {

            // urls - refresh - count
            urls.refresh_count();

            // flash - remove - class - hidden - wait 0.5
            $( '#flash' ).removeClass( "hidden" );

            // flash - remove - class(s)
            $( '#flash' ).removeClass( "love" );

            // return
            return true;

        },

        // function - flash - display - text
        display_text : function() {

            // flash - toggle - class(s) - text
            $( '#flash-toggle-love' ).toggleClass( 'flash-text-hidden' );

            // return
            return true;

        },

        // function - flash - display - love
        display_love : function() {

            // body - toggle - class
            $( 'body' ).addClass( 'overlay' );

            // flash - toggle - class(s) - love
            $( '#flash-toggle-message' ).toggleClass( 'hidden' );
            $( '#flash'                ).toggleClass( "love" );
            $( '#flash-toggle-love'    ).toggleClass( 'color-flash-toggle-love' );
            $( '#flash-toggle-love'    ).toggleClass( 'color-flash-toggle-love-active' );

            // return
            return true;

        }

    // function(s) |




}
//
//
// js - jquery - toggle - flash |
//
