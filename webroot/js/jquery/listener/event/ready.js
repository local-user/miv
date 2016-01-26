//
// | js - jquery - listener - event - ready
//
//




            // document - ready
            $(document).ready( function() {

                // debug - console
                if ( debug ){ console.log(' D js/jquery/listener/keybord/ready.js'); }

                // delay - 50ms
                setTimeout( function() {

                    // overlay - display
                    overlay.display();

                    // padding - display
                    padding.display();

                }, 50);

                // return
                return true;

            });




//
//
// js - jquery - listener - event - ready |
//
if (debug) { console.log(' . js/jquery/listener/keybord/ready.js'); }
