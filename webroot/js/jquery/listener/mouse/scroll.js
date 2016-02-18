//
// | js - jquery - listener - keyboard - scroll
//
//




        // mouse - scroll - welcome
        $(document).ready(function(){
            $('#welcome').bind('mousewheel', function(e){

                // wheel - up/down
                if(e.originalEvent.wheelDelta /120 > 0) {
                    // wheel - up
                } else {
                    // wheel - down
                }

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
                    $("#welcome").unbind('mousewheel');

                }

            });

        });




//
//
// js - jquery - listener - keyboard - scroll |
//
if (debug) { console.log(' . js/jquery/listener/keybord/scroll.js'); }
