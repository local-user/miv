//
// | js - jquery - listener - mouse - scroll
//
//




        // mouse - scroll - welcome
        $( window ).scroll(function() {

            // ? - overlay
            if( $("body").hasClass("overlay") ){

                // immediate - remove
                $("body").removeClass("overlay");

                // debug - console
                if ( debug ){ console.log(' D js/jquery/listener/keyboard/scroll.js'); }

                // welcome - display - hide
                welcome.display_hide();

                // input - hide
                input.display_hide();

                // scroll - top
                $("#urls").scroll();

            }

        });




//
//
// js - jquery - listener - mouse - scroll |
//
if (debug) { console.log(' . js/jquery/listener/keyboard/scroll.js'); }
