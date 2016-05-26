//
// | js - jquery - listener - keyboard - scroll
//
//




        // mouse - scroll - welcome
        $( window ).scroll(function() {

            // ? - overlay
            if( $("body").hasClass("overlay") ){

                // immediate - remove
                $("body").removeClass("overlay");

                // debug - console
                if ( debug ){ console.log(' D js/jquery/listener/keybord/scroll.js'); }

                // overlay - display - hide
                overlay.display_hide();

                // overlay - input - hide
                input.display_hide();

                // scroll - top
                $("#urls").scroll();

            }

        });




//
//
// js - jquery - listener - keyboard - scroll |
//
if (debug) { console.log(' . js/jquery/listener/keybord/scroll.js'); }
