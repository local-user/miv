//
// | js - jquery - listener - element - 'header-trigger-overlay'
//
//




        //  'header-trigger-overlay' - click - input - display
        $( '#header-trigger-overlay' ).click(function() {

            // edit - trigger - off
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
// js - jquery - listener - element - 'header-trigger-overlay' |
//
if (debug) { console.log(' . js/jquery/listener/element/header-trigger-overlay.js'); }
