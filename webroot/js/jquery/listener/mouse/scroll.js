//
// | js - jquery - listener - keyboard - scroll
//
//




        // mouse - scroll - welcome
        $( window ).scroll(function() {

            // ? - overlay
            if( $("body").hasClass("overlay") ){

                // debug - console
                if ( debug ){ console.log(' D js/jquery/listener/keybord/scroll.js'); }

                // overlay - display - hide
                overlay.display_hide();

                // overlay - input - hide
                input.display_hide();

                // urls - refresh
                urls.refresh();

                // unbind
                $( window ).off('scroll');

                // scroll - top
                $("#urls").scroll();

            }

        });




//
//
// js - jquery - listener - keyboard - scroll |
//
if (debug) { console.log(' . js/jquery/listener/keybord/scroll.js'); }
