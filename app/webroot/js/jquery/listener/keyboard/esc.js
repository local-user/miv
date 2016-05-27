//
// | js - jquery - listener - keyboard - escape
//
//
//




            // key - press - release
            $(document).keyup(function (e){

                // key - escape
                if(e.keyCode == 27){

                    // debug - console
                    if ( debug ){ console.log(' D js/jquery/listener/keybord/escape.js'); }

                    // edit - toggle - off
                    edit.toggle_off();

                    // welcome - display - hide
                    welcome.display_hide();

                    // flash - display - hide
                    flash.display_hide();

                    // header - display - hide
                    header.display_hide();

                    // setting - display - hide
                    setting.display_hide();

                    // input - display - welcome ?
                    if( $("body").hasClass('overlay') ){
                        setTimeout( function() { input.display(); }, 1000);
                        urls.refresh();
                    } else {
                        input.display();
                    }

                }

                // return
                return true;

            });




//
//
// js - jquery - listener - keyboard - escape |
//
if (debug) { console.log(' . js/jquery/listener/keybord/escape.js'); }
