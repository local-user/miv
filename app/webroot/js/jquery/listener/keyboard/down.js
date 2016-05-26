//
// | js - jquery - listener - keyboard - down
//
//




            // key - press - release
            $( "#body" ).keyup(function (e){

                // key - down
                if(e.keyCode == 40){

                    // ? - overlay
                    if( $("body").hasClass("overlay") ){

                        // immediate - remove
                        $("body").removeClass("overlay");

                        // debug - console
                        if ( debug ){ console.log(' D js/jquery/listener/keybord/down.js'); }

                        // overlay - display - hide
                        overlay.display_hide();

                        // overlay - input - hide
                        input.display_hide();

                    }

                }

                // return
                return true;

            });




//
//
// js - jquery - listener - keyboard - down |
//
if (debug) { console.log(' . js/jquery/listener/keybord/down.js'); }
