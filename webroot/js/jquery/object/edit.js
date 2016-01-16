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

            // toggle - edit - toggle - class - mode-edit
            $( '.url' ).toggleClass('mode-edit');

            // toggle - edit - toggle - class - edit - hidden
            $( '.url .edit' ).toggleClass('hidden');

            // return
            return true;

        },

        toggle_off : function() {

            // toggle - off
            if( this.toggled == 1 ){ this.toggled = 0; }

            // toggle - edit - remove - class - 'color-edit-text-active'
            $( "#header-toggle-edit" ).removeClass( "color-edit-text-active" );

            // toggle - edit - remove - class - mode-edit
            $( '.url' ).removeClass('mode-edit');

            // toggle - edit - remove - class - edit - hidden
            $( '.url .edit' ).removeClass('hidden');

            // return
            return true;

        }

    // function(s) |




};
//
//
//
//
// javascript - jquey - object - edit |
//
