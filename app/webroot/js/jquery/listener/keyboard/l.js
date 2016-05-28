//
// | js - jquery - listener - keyboard - l
//
//




            // key - release
            $(document).keyup(function (e){

                // key - l
                if(e.keyCode == 76){

                    // input - hidden
                    if( $("#input").hasClass("hidden") ){

                        // debug - console
                        if ( debug ){ console.log(' D js/jquery/listener/keybord/l.js'); }

                        // toggle - lock
                        lock.toggle();

                    }

                }

                // return
                return true;

            });




//
//
// js - jquery - listener - keyboard - l |
//
if (debug) { console.log(' . js/jquery/listener/keybord/l.js'); }
