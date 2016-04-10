//
// | js - jquery - listener - keyboard - shift - t
//
//




            // key - telease
            $(document).keyup(function (e){

                // key - shift - t
                if (e.keyCode == 84) {

                    // input - hidden
                    if( $("#input").hasClass("hidden") ){

                        // debug - console
                        if ( debug ){ console.log(' D js/jquery/listener/keybord/shift-t.js'); }

                        // urls - display - title [turl]
                        turl.toggle();

                    }

                }

                // return
                return true;

            });




//
//
// js - jquery - listener - keyboard - shift - t |
//
if (debug) { console.log(' . js/jquery/listener/keybord/shift-t.js'); }
