//
// | js - jquery - listener - keyboard - e
//
//




            // key - release
            $(document).keyup(function (e){

                // key - e
                if(e.keyCode == 69){

                    // input - hidden
                    if( $("#input").hasClass("hidden") ){

                        // debug - console
                        if ( debug ){ console.log(' D js/jquery/listener/keybord/e.js'); }

                        // toggle - edit
                        edit.toggle();

                    }

                }

                // return
                return true;

            });




//
//
// js - jquery - listener - keyboard - e |
//
if (debug) { console.log(' . js/jquery/listener/keybord/e.js'); }
