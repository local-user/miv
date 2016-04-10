//
// | js - jquery - listener - element - 'welcome'
//
//




    // click - welcome - display - hide
    $( '#welcome' ).click(function() {

        // immediate - remove
        $("body").removeClass("overlay");

        // overlay - display - hide
        overlay.display_hide();

        // urls - refresh
        urls.refresh();

        // return
        return true;

    });




//
//
// js - jquery - listener - element - 'welcome' |
//
if (debug) { console.log(' . js/jquery/listener/element/welcome.js'); }
