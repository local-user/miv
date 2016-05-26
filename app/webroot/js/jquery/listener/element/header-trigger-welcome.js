//
// | js - jquery - listener - element - 'header-trigger-welcome'
//
//




        //  'header-trigger-welcome' - click - input - display
        $( '#header-trigger-welcome' ).click(function() {

            // edit - trigger - off
            edit.toggle_off();

            // header - display - hide
            header.display_hide();

            // input - display - hdie
            input.display_hide();

            // welcome - display
            welcome.display();

            // return
            return true;

        });




//
//
// js - jquery - listener - element - 'header-trigger-welcome' |
//
if (debug) { console.log(' . js/jquery/listener/element/header-trigger-welcome.js'); }
