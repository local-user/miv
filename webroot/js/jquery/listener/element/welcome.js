//
// | js - jquery - listener - element - 'welcome'
//
console.log(' . js/jquery/listener/element/welcome.js');
//
//
//
//




    // click - welcome - display - hide
    $( '#welcome' ).click(function() {

        // overlay - display - hide
        overlay.display_hide();

        // return
        return true;

    });


    // mouseover - key - enter - welcome - disply - hide
    $( '#welcome' ).mouseover( function() {

        // key - press
        $( document ).keydown(function (e){

            // overlay - display - hide
            overlay.display_hide();

            // return
            return true;

        });

    });




//
//
// js - jquery - listener - element - 'welcome' |
//
