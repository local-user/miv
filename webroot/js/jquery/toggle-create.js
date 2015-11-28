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

                // lock - create - form - reset
                lock_create_form_reset();

                // flash - add - class
                $( "#flash" ).addClass( "hidden" );

                // create - toggle - class
                $( "#create"            ).toggleClass( "hidden"                   );
                $( "#toggle-create"     ).toggleClass( "color-create-text-active" );

                // create - form- input - url - focus
                $( "#create-form-input-url" ).focus();

                // create - form - input - url -  empty
                $( "#create-form-input-url" ).val('');

                // return
                return true;

            }

            function hide_create() {

                // create - add - class
                $( "#create" ).addClass( "hidden" );

                // toggle - create - add - class
                $( "#toggle-create"  ).addClass( "color-create-text-inactive" );

                // toggle - create - remove - class
                $( "#toggle-create"  ).removeClass( "color-create-text-active" );

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
