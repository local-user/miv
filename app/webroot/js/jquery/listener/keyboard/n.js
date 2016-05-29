//
// | js - jquery - nistener - keyboard - n
//
//




            // key - release
            $(document).keyup(function (e){

                // key - n
                if(e.keyCode == 78){

                    // input - hidden
                    if( $("#input").hasClass("hidden") ){

                        // debug - console
                        if ( debug ){ console.log(' D js/jquery/listener/keybord/l.js'); }

                        // toggle - header
                        header.display();

                    }

                }

                // return
                return true;

            });




//
//
// js - jquery - nistener - keyboard - n |
//
if (debug) { console.log(' . js/jquery/listener/keybord/l.js'); }
