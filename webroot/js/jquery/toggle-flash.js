//| js - jquery - toggle - flash
//
//
//
//
//  Function(s)
//
//      -- hide_flash()
//      -- display_flash_head(code, message)
//      -- toggle_flash_body()
//      -- toggle_flash_love()
//
//
//  Trigger(s)
//
//      -- click - #flash-toggle-hide  - hide_flash
//      -- key   - escape              - hide_flash
//
//
//
//




    // | function(s)

        function hide_flash() {

            // flash - add - class(s)a
            $( '#flash-toggle-body'     ).addClass( 'color-flash-toggle-body' );
            $( '#flash-toggle-love'     ).addClass( 'color-flash-toggle-love' );

            // flash - remove - class(s)
            $( '#flash'                 ).removeClass( "love" );
            $( '#flash-toggle-body'     ).removeClass( 'color-flash-toggle-body-active' );
            $( '#flash-toggle-love'     ).removeClass( 'color-flash-toggle-love-active' );
            $( '#flash-toggle-message'  ).removeClass( 'hidden' );

            // flash - add - class(s)
            $( '#flash' ).addClass( "hidden" );

            // return
            return true;

        }

        function display_flash_head(code, message) {

            // flash - remove - class(s)
            $( '#flash' ).removeClass( "hidden" );
            $( '#flash' ).removeClass( "love" );

            // flash - message
            $( '#flash .message h1' ).text(message);

            // flash - code
            switch(code) {
                case 200:
                    $( '#flash'             ).addClass( 's200' );
                    break;
                case 400:
                    $( '#flash'             ).addClass( 's400');
                    break;
            }

            // return
            return true;

        }

        function toggle_flash_body() {

            // flash - toggle - class(s) - body
            $( '#flash'             ).toggleClass( "body" );
            $( '#flash-toggle-body' ).toggleClass( 'color-flash-toggle-body' );
            $( '#flash-toggle-body' ).toggleClass( 'color-flash-toggle-body-active' );
            $( '#flash-toggle-body' ).toggleClass( 'fa-arrow-down' );
            $( '#flash-toggle-body' ).toggleClass( 'fa-arrow-up' );
            $( '#flash-toggle-love' ).toggleClass( 'hidden' );

            // return
            return true;

        }

        function toggle_flash_love() {

            // flash - toggle - class(s) - love
            $( '#flash'                ).toggleClass( "love" );
            $( '#flash-toggle-love'    ).toggleClass( 'color-flash-toggle-love' );
            $( '#flash-toggle-love'    ).toggleClass( 'color-flash-toggle-love-active' );
            $( '#flash-toggle-message' ).toggleClass( 'hidden' );

            // return
            return true;

        }

    // function(s) |


    // | trigger(s)

        // key   - hide - escape
        $(document).keyup(function (e){
            if(e.keyCode == 27){
                hide_flash();
            }
        });

        // click - toggle - flash - body
        $( "#flash-toggle-body" ).click(function() {
            toggle_flash_body();
        });

        // click - toggle - flash - love
        $( "#flash-toggle-love" ).click(function() {
            toggle_flash_love();
        });

        // click - hide - flash
        $( '#flash-toggle-hide' ).click(function() {
            hide_flash();
        });

    // trigger(s) |




// js - jquery - toggle - flash |
