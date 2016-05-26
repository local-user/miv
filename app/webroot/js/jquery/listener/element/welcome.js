//
// | js - jquery - listener - element - 'welcome'
//
//




    // click - welcome - display - hide
    $( '#welcome' ).click(function() {

        // immediate - remove
        $("body").removeClass("overlay");

        // welcome - display - hide
        welcome.display_hide();

        // return
        return true;

    });




//
//
// js - jquery - listener - element - 'welcome' |
//
if (debug) { console.log(' . js/jquery/listener/element/welcome.js'); }
