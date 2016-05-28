//
// | js - jquery - listener - keyboard - s
//
//




            // key - release
            $(document).keyup(function (e){

                // key - s
                if(e.keyCode == 83){

                    // input - hidden
                    if( $("#input").hasClass("hidden") ){

                        // debug - console
                        if ( debug ){ console.log(' D js/jquery/listener/keybord/s.js'); }

                        // toggle - setting
                        setting.display();

                    }

                }

                // return
                return true;

            });




//
//
// js - jquery - listener - keyboard - s |
//
if (debug) { console.log(' . js/jquery/listener/keybord/s.js'); }
