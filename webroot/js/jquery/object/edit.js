//
// | javascript - jquey - object - edit
//
console.log(' . js/jquery/object/edit.js');
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
var edit = {




    // global(s)
    toggled: 0,


    // identify
    identify : function() {

        // console - log
        console.log(' I js/jquery/object/edit.js');

        // return
        return true;

    },



    // | function(s)

        // function - edit - display - hide
        toggle : function() {

            // toggle - toggled
            if( this.toggled == 0 ){ this.toggled = 1; }
            if( this.toggled == 1 ){ this.toggled = 0; }

            // toggle - edit - toggle - class - 'color-edit-text-active'
            $( "#header-toggle-edit" ).toggleClass( "color-edit-text-active" );

            // toggle - edit - toggle - class - edit - hidden
            $( '.url .edit' ).toggleClass('hidden');

            // return
            return true;

        },

    // function(s) |




};
//
//
//
//
// javascript - jquey - object - edit |
//
