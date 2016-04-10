//
// | js - jquery - listener - element - 'header-toggle-overlay'
//
//




        //  'header-toggle-overlay' - click - input - display
        $( '#header-toggle-overlay' ).click(function() {

            // edit - toggle - off
            edit.toggle_off();

            // header - display - hide
            header.display_hide();

            // input - display - hdie
            input.display_hide();

            // overlay - display
            overlay.display();

            // return
            return true;

        });




//
//
// js - jquery - listener - element - 'header-toggle-overlay' |
//
if (debug) { console.log(' . js/jquery/listener/element/header-toggle-overlay.js'); }
