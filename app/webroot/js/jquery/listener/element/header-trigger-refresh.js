//
// | js - jquery - listener - element - 'header-trigger-refresh'
//
//
//




        //  'header-trigger-refresh' - click - input - display
        $( '#header-trigger-refresh' ).click(function() {

            // edit - trigger - off
            edit.toggle_off();

            // urls - refresh
            urls.refresh();

            // return
            return true;

        });




//
//
// js - jquery - listener - element - 'header-trigger-refresh' |
//
if (debug) { console.log(' . js/jquery/listener/element/header-trigger-refresh.js'); }
