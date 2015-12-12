//
// | js - jquery - listener - element - 'welcome'
//
console.log(' . js/jquery/listener/element/welcome.js');
//
//
//
//



    // mouseover - welcome
    $( '#welcome' ).mouseover( function() {

        // click - welcome - display - hide
        $( '#welcome' ).click(function() {

            // overlay - display - hide
            overlay.display_hide();

            // return
            return true;

        });

        // key - welcome - display - hide
        $(document).keyup(function (e){

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
