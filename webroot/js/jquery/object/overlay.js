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

        // function - overlay - display - hide
        display_hide : function() {

            // body - remove - class - overlay - wait 2seconds
            setTimeout(function(){
                $(" #body ").removeClass('overlay');
            }, 4000);

            // welcome - hide
            $(" #welcome ").addClass('hidden');

            // return
            return true;

        }

    // function(s) |




}
//
//
// js - jquery - toggle - overlay |
//
