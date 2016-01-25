//
// | js - jquery - listener - keyboard - shift - l
//
//




            // key - release
            $(document).keyup(function (e){

                // key - shift - l
                if(e.keyCode == 76){

                    // input - hidden
                    if( $("#input").hasClass("hidden") ){

                        // debug - console
                        if ( debug ){ console.log(' D js/jquery/listener/keybord/shift-l.js'); }

                        // toggle - lock
                        lock.toggle();

                    }

                }

                // return
                return true;

            });




//
//
// js - jquery - listener - keyboard - shift - l |
//
if (debug) { console.log(' . js/jquery/listener/keybord/shift-l.js'); }
