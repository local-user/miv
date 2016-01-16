//
// | js - jquery - listener - element - 'url-trigger-dropzone'
//
//
//
//
//




        //  'url-trigger-dropzone' - click - edit - display
        $( document ).on('click', '.url-trigger-dropzone', function() {

            // this - url - id
            var id = $(this).parent().parent().parent().attr("data-url-id");

            // url - dropzone
            url.dropzone(id);

            // return
            return true;

        });




//
//
//
//
// js - jquery - listener - element - 'url-trigger-dropzone' |
//
if (debug) { console.log(' . js/jquery/listener/element/url-trigger-dropzone.js'); }
