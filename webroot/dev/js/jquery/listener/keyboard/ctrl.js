//
// | js - jquery - listener - keyboard - ctrl
//
console.log(' . js/jquery/listener/keybord/ctrl.js');
//
//




            // key - press
            $(document).keydown(function (e){

                // key - ctrl
                if(e.keyCode == 17){

                    // debug - console
                    if ( debug ){ console.log(' D js/jquery/listener/keybord/ctrl.js'); }

                    // overlay - display - text
                    overlay.display_text();

                    // flash - display - text
                    flash.display_text();

                }

                // return
                return true;

            });

            // key - release
            $(document).keyup(function (e){

                // key - ctrl
                if(e.keyCode == 17){

                    // debug - console
                    if ( debug ){ console.log(' D js/jquery/listener/keybord/ctrl.js'); }

                    // overlay - display - text
                    overlay.display_text();

                    // flash - display - text
                    flash.display_text();

                }

                // return
                return true;

            });




//
// js - jquery - listener - keyboard - ctrl |
//
