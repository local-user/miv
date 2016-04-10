//
// | javascript - jquey - object - footer
//
//
//  Function(s)
//
//      display_text
//
//
//
//
var footer = {




    // global(s)
    visibility: 0,


    // identity
    identify : function() {

        // console - log
        console.log(' I js/jquery/object/footer.js');

        // return
        return true;

    },


    // | function(s)

        // function - footer - display - text
        display_text : function() {

            // footer - toggle - class(s) - text
            $( '#footer-toggle-love' ).toggleClass( 'hidden' );

            // return
            return true;

        }

    // function(s) |




}
//
//
// js - jquery - toggle - footer |
//
if (debug) { console.log(' . js/jquery/object/footer.js'); }
