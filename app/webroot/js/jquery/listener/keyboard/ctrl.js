//
// | js - jquery - listener - keyboard - ctrl
//
//




            // key - press
            $(document).keydown(function (e){

                // key - ctrl
                if(e.keyCode == 17){

                    // debug - console
                    if ( debug ){ console.log(' D js/jquery/listener/keybord/ctrl.js'); }

                    // flash - display - text
                    flash.display_text();

                    // footer - display - text
                    footer.display_text();

                    // overlay - display - text
                    overlay.display_text();

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

                    // flash - display - text
                    flash.display_text();

                    // footer - display - text
                    footer.display_text();

                    // overlay - display - text
                    overlay.display_text();

                }

                // return
                return true;

            });




//
//
// js - jquery - listener - keyboard - ctrl |
//
if (debug) { console.log(' . js/jquery/listener/keybord/ctrl.js'); }
