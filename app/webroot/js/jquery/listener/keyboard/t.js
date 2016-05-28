//
// | js - jquery - listener - keyboard - t
//
//




            // key - telease
            $(document).keyup(function (e){

                // key - t
                if (e.keyCode == 84) {

                    // input - hidden
                    if( $("#input").hasClass("hidden") ){

                        // debug - console
                        if ( debug ){ console.log(' D js/jquery/listener/keybord/t.js'); }

                        // urls - display - title-url/turl
                        turl.toggle();

                    }

                }

                // return
                return true;

            });




//
//
// js - jquery - listener - keyboard - t |
//
if (debug) { console.log(' . js/jquery/listener/keybord/t.js'); }
