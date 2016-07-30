//
// | javascript - jquey - object - loading
//
//
//
//
var loading = {




    // identify
    identify : function() {

        // console - log
        console.log(' I js/jquery/object/loading.js');

        // return
        return true;

    },




    // | function(s)

        // function - loading - display
        display : function() {
            $("#loading").addClass("hidden");
        },

        // function - loading - display - hide
        display_loading : function( timeout ) {

            // show - loading
            $("#loading").removeClass("hidden");

            // hide - loading
            setTimeout( function() {
                $("#loading").addClass("hidden");
            }, timeout);

        },

    // function(s) |




};
//
//
//
//
// javascript - jquey - object - loading |
//
if (debug) { console.log(' . js/jquery/object/loading.js'); }
