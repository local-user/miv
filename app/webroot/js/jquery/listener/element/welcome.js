//
// | js - jquery - listener - element - 'welcome'
//
//




    // click - welcome - display - hide
    $( '#welcome' ).click(function() {

        // scroll - to - input
        $('html, body').animate({
            scrollTop: $("#input").offset().top
        }, 500);

        // return
        return true;

    });




//
//
// js - jquery - listener - element - 'welcome' |
//
if (debug) { console.log(' . js/jquery/listener/element/welcome.js'); }
