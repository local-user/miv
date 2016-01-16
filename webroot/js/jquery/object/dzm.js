//
// | javascript - jquey - object - dzm
//
console.log(' . js/jquery/object/dzm.js');
//
//
//
//
//  Global(s):
//
//      toggled          --{ 0 = False, 1 = True }
//
//
//  Function(s):
//
//      toggle
//
//
//
var dzm = {




    // global(s)
    toggled: 0,


    // identify
    identify : function() {

        // console - log
        console.log(' I js/jquery/object/dzm.js');

        // return
        return true;

    },



    // | function(s)

        // function - dzm - display
        display : function() {

            // toggle - toggled
            if( this.toggled == 0 ){ this.toggled = 1; }
            if( this.toggled == 1 ){ this.toggled = 0; }

            // toggle - dzm
            $( "#dzm" ).toggleClass( "hidden" );

            // return
            return true;

        },

        // function - dzm - display - hide
        display_hide : function() {

            // toggled - 0
            this.toggled = 0;

            // toggle - dzm
            $( "#dzm" ).addClass( "hidden" );

            // return
            return true;

        }

    // function(s) |




};
//
//
//
//
// javascript - jquey - object - dzm |
//
