//
// | js - jquery - listener - element - 'header-toggle-refresh'
//
//
//




        //  'header-toggle-refresh' - click - input - display
        $( '#header-toggle-refresh' ).click(function() {

            // edit - toggle - off
            edit.toggle_off();

            // urls - refresh
            urls.refresh();

            // return
            return true;

        });




//
//
// js - jquery - listener - element - 'header-toggle-refresh' |
//
if (debug) { console.log(' . js/jquery/listener/element/header-toggle-refresh.js'); }
