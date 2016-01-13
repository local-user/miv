//
// | js - jquery - listener - keyboard - escape
//
console.log(' . js/jquery/listener/keybord/escape.js');
//
//




            // key - press - release
            $(document).keyup(function (e){

                // key - escape
                if(e.keyCode == 27){

                    // debug - console
                    if ( debug ){ console.log(' D js/jquery/listener/keybord/escape.js'); }

                    // overlay - display - hide
                    overlay.display_hide();

                    // flash - display - hide
                    flash.display_hide();

                    // header - display - hide
                    header.display_hide();

                    // input - display - overlay ?
                    if( $("body").hasClass('overlay') ){
                        setTimeout( function() { input.display(); }, 1000);
                        urls.refresh();
                    } else {
                        $("html, body").animate({ scrollTop: 0 }, 1500);
                        input.display();
                    }

                }

                // return
                return true;

            });




//
// js - jquery - listener - keyboard - escape |
//
