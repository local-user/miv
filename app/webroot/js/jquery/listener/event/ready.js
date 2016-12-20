//
// | js - jquery - listener - event - ready
//
//


    // document - ready
    $(document).ready( function() {

        // debug - console
        if ( debug ){ console.log(' D js/jquery/listener/keybord/ready.js'); }

        // loading - display - [ 1500ms ]
        loading.display_loading( 1500 );

        // lock - load
        lock.load();

        // setting(s) - load
        setting_container.load();
        setting_url.load();

        // welcome - display - hide
        setTimeout( function() {
            welcome.display_hide();
        }, 1000);

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
