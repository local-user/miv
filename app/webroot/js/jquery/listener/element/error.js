//
// | js - jquery - listener - element - 'error'
//
//




    // mouseover - error - display - hide
    $( '#error' ).mouseover( function() {

        // click - error - display - hide
        $( '#error' ).click(function() {

            // flash - display - hide
            flash.display_hide();

            // error - display - hide
            error.display_hide();

            // return
            return true;

        });

    });




//
//
// js - jquery - listener - element - 'error' |
//
if( debug ){ console.log(' . js/jquery/listener/element/error.js'); }
