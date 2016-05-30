//
// | js - jquery - listener - keyboard - escape
//
//
//




            // key - press - release
            $(document).keyup(function (e){

                // key - escape
                if(e.keyCode == 27){

                    // debug - console
                    if ( debug ){ console.log(' D js/jquery/listener/keybord/escape.js'); }

                    // edit - toggle - off
                    edit.toggle_off();

                    // flash - display - hide
                    flash.display_hide();

                    // input - display - hide
                    input.display_hide();

                    // setting - display - hide
                    setting.display_hide();

                }

                // return
                return true;

            });




//
//
// js - jquery - listener - keyboard - escape |
//
if (debug) { console.log(' . js/jquery/listener/keybord/escape.js'); }
