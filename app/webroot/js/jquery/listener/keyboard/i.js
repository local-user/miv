//
// | js - jquery - listener - keyboard - i
//
//
//


    // key - press - release
    $(document).keyup(function (e){

        // key - i
        if(e.keyCode == 73){

            // debug - console
            if ( debug ){ console.log(' D js/jquery/listener/keybord/i.js'); }

            // input - display
            input.display();

        }

        // return
        return true;

    });


//
//
// js - jquery - listener - keyboard - i |
//
if (debug) { console.log(' . js/jquery/listener/keybord/i.js'); }
