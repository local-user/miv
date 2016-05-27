//
// | js - jquery - listener - element - 'header-trigger-welcome'
//
//




        //  'header-trigger-welcome' - click - input - display
        $( '#header-trigger-welcome' ).click(function() {

            // edit - trigger - off
            edit.toggle_off();

            // lock - toggle - on
            lock.toggle_on();

            // input - display - hide
            input.display_hide();

            // setting - display - hide
            setting.display_hide();

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
