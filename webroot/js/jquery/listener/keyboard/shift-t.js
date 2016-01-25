//
// | js - jquery - listener - keyboard - shift - r
//
//




            // key - release
            $(document).keyup(function (e){

                // key - shift - t
                if(e.keyCode == 84){

                    // debug - console
                    if ( debug ){ console.log(' D js/jquery/listener/keybord/shift-r.js'); }

                    // urls - display - title [turl]
                    urls.display_turl();

                }

                // return
                return true;

            });




//
//
// js - jquery - listener - keyboard - shift - r |
//
if (debug) { console.log(' . js/jquery/listener/keybord/shift-r.js'); }
