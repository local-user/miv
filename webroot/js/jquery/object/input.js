//
// | javascript - jquey - object - input
//
console.log(' . js/jquery/object/input.js');
//
//
//
//
//  Global(s):
//
//      visibility          --{ 0 = Hidden, 1 = Visibile }
//
//
//  Function(s):
//
//      display
//      display_hide
//      display_lock
//      display_reset
//      display_show
//      display_unlock
//
//
//
//
var input = {




    // global(s)
    visibility: 0,


    // identify
    identify : function() {

        // console - log
        console.log(' I js/jquery/object/input.js');

        // return
        return true;

    },



    // | function(s)


        // function - input - display
        display : function() {

            // input - display - toggle
            if ( this.visibility === 0 ){

                // header - display - show
                header.display_show();

                // input - display - show
                this.display_show();

                // update - visibility
                this.visibility = 1;

            } else {

                // input - display - hide
                this.display_hide();

                // input - update - visibility
                this.visibility = 0;

            }

            // return
            return true;

        },


        // function - input - display - hide
        display_hide : function() {

            // header - remove - class - input
            $( "#header" ).removeClass( "input" );

            // input - add - class - hidden
            $( "#input" ).addClass( "hidden" );

            // toggle - input - remove - class - 'color-input-text-active'
            $( "#header-toggle-input" ).removeClass( "color-input-text-active" );

            // return
            return true;

        },


        // function - input - display - lock
        display_lock : function() {

            // input - form - add - class(s)
            $( '#input-form-input-indicator' ).addClass('s400');
            $( '#input-form-input-url'       ).addClass('color-input-text-invalid');

            // return
            return true;

        },


        // function - input - display - reset
        display_reset : function() {

            // remove - class(s)
            $( '#input-form-input-indicator' ).removeClass( 's200'                      );
            $( '#input-form-input-indicator' ).removeClass( 's400'                      );
            $( '#input-form-input-submit'    ).removeClass( 's2'                        );
            $( '#input-form-input-url'       ).removeClass( 's2'                        );
            $( '#input-form-input-url'       ).removeClass( 'color-input-text-invalid'  );
            $( '#input-form-input-url'       ).removeClass( 'color-input-text-valid'    );

            // return
            return true;

        },


        // function - input - display - show
        display_show : function() {

            // flash - add - class - hidden
            $( "#flash" ).addClass( "hidden" );

            // header - add - class - input
            $( "#header" ).addClass( "input" );

            // input - remove - class - hidden
            $( "#input" ).removeClass( "hidden" );

            // toggle - input - add - class - 'color-input-text-active'
            $( "#header-toggle-input" ).addClass( "color-input-text-active" );

            // input - form- input - url - focus
            $( "#input-form-input-url" ).focus();

            // input - form - input - url -  empty
            $( "#input-form-input-url" ).val('');

            // return
            return true;

        },


        // function - input - display - unlock
        display_unlock : function() {

            // input - add - class(s)
            $( '#input-form-input-indicator' ).addClass('s200');
            $( '#input-form-input-submit'    ).addClass('s2');
            $( '#input-form-input-url'       ).addClass('s2');
            $( '#input-form-input-url'       ).addClass('color-input-text-valid');

            // return
            return true;

        }


    // function(s) |




};
//
//
// reference @ http://stackoverflow.com/questions/2723140/validating-url-with-jquery-without-the-validate-plugin
// reference @ http://stackoverflow.com/questions/9205164/validate-html-text-input-as-its-typed
//
//
// javascript - jquey - object - input |
//
