//
// | js - jquery - listener - keyboard - shift - r
//
//




            // key - release
            $(document).keyup(function (e){

                // key - shift - r
                if(e.keyCode == 82){

                    // input - hidden
                    if( $("#input").hasClass("hidden") ){

                        // debug - console
                        if ( debug ){ console.log(' D js/jquery/listener/keybord/shift-r.js'); }

                        // urls - refresh
                        urls.refresh();

                    }

                }

                // return
                return true;

            });




//
//
// js - jquery - listener - keyboard - shift - r |
//
if (debug) { console.log(' . js/jquery/listener/keybord/shift-r.js'); }
