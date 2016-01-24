//
// | js - jquery - listener - keyboard - shift - e
//
//




            // key - release
            $(document).keyup(function (e){

                // key - shift - e
                if(e.keyCode == 69){

                    // debug - console
                    if ( debug ){ console.log(' D js/jquery/listener/keybord/shift-e.js'); }

                    // toggle - edit
                    edit.toggle();

                }

                // return
                return true;

            });




//
//
// js - jquery - listener - keyboard - shift - e |
//
if (debug) { console.log(' . js/jquery/listener/keybord/shift-e.js'); }
