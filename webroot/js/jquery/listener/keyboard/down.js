//
// | js - jquery - listener - keyboard - down
//
console.log(' . js/jquery/listener/keybord/down.js');
//
//




            // key - press - release
            $(document).keyup(function (e){

                // key - down
                if(e.keyCode == 40){

                    // debug - console
                    if ( debug ){ console.log(' D js/jquery/listener/keybord/down.js'); }

                    // overlay - display - hide
                    overlay.display_hide();

                    // overlay - input - hide
                    input.display_hide();

                }

                // return
                return true;

            });




//
//
// js - jquery - listener - keyboard - down |
//
