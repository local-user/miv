//
// | js - jquery - listener - keyboard - escape
//
console.log(' . js/jquery/listener/keybord/escape.js');
//
//




            // key - press - release
            $(document).keyup(function (e){

                // key - escape
                if(e.keyCode == 27){

                    // debug - console
                    if ( debug ){ console.log(' D js/jquery/listener/keybord/escape.js'); }

                    // flash - display - hide
                    flash.display_hide();

                    // input - display
                    input.display();

                }

                // return
                return true;

            });




//
// js - jquery - listener - keyboard - escape |
//
