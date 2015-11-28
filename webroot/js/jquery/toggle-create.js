//| js - jquery - toggle - create
//
//
//
//
//  Function(s)
//
//      -- display_create()
//      -- hide_create()
//
//
//  Trigger(s)
//
//      -- click - toggle - create
//      -- key   - toggle - create - escape
//
//
//
//




        //| function(s)

            function display_create() {

                // reset - create - form
                lock_create_form_reset();

                // create - hide - extra
                $( "#flash" ).addClass( "hidden" );

                // create - toggle
                $( "#create"            ).toggleClass( "hidden"                   );
                $( "#create #spacer"    ).toggleClass( "hidden"                   );
                $( "#toggle-create"     ).toggleClass( "color-create-text-active" );

                // create - input - focus
                $( "#create-form-input-url" ).focus();

                // create - input - empty
                $( "#create-form-input-url" ).val('');

                // return
                return true;

            }

            function hide_create() {

                // hide - create
                $( "#create" ).addClass( "hidden" );

                // hide - create - toggle
                $( "#create #spacer" ).addClass( "hidden"                   );
                $( "#toggle-create"  ).addClass( "color-create-text-active" );

                // return
                return true;

            }

        // function(s) |


        //| trigger(s)

            // click - toggle - create
            $( "#toggle-create" ).click(function() {

                // display - create
                display_create();

                // return
                return true;

            });


            // key - escape - toggle - create
            $(document).keyup(function (e){

                // key - escape
                if(e.keyCode == 27){

                    // display - create
                    display_create();

                }

                // return
                return true;

            });

        // trigger(s) |




//
//
// js - jquery - toggle - create |
