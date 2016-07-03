//
// | js - jquery - listener - event - ready
//
//


    // document - ready
    $(document).ready( function() {

        // debug - console
        if ( debug ){ console.log(' D js/jquery/listener/keybord/ready.js'); }

        // hide - welcome
        $( "#welcome" ).hide( "slow", function() {} );

        // urls - refresh
        urls.refresh();

        // return
        return true;

    });


//
//
// js - jquery - listener - event - ready |
//
if (debug) { console.log(' . js/jquery/listener/keybord/ready.js'); }
