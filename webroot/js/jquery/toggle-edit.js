//| js - jquery - toggle - edit




    //| function(s)

        // toggle - edit
        function toggle_edit() {

            // toggle - toggle - create - active
            $( '#toggle-edit' ).toggleClass( "color-edit-text-active" );

            // return
            return true;

        }

        // toggle - edit - off
        function toggle_edit_off() {

            // toggle - toggle - create - active
            $( '#toggle-edit' ).removeClass( "color-edit-text-active" );

            // return
            return true;

        }

    // function(s) |


    //| trigger(s)

        // click - toggle - edit
        $( '#toggle-edit' ).click(function() {

            // toggle - edit
            toggle_edit();

            // return
            return true;

        });

        // key - escape - toggle - edit
        $(document).keyup(function (e){

            // key - escape
            if(e.keyCode == 27){

                // toggle - edit
                toggle_edit_off();

            }

            // return
            return true;

        });

    // trigger(s) |




// js - jquery - toggle - edit |
