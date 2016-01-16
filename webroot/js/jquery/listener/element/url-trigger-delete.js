//
// | js - jquery - listener - element - 'url-trigger-delete'
//
//
//
//
//




        //  'url-trigger-delete' - click - edit - display
        $( document ).on('click', '.url-trigger-delete', function() {

            // this - url - id
            var id = $(this).parent().parent().parent().attr("data-url-id");

            // img - delete - by - id_url
            img.delete(id);

            // url - delete
            url.delete(id);

            // return
            return true;

        });




//
//
//
//
// js - jquery - listener - element - 'url-trigger-delete' |
//
if (debug) { console.log(' . js/jquery/listener/element/url-trigger-delete.js'); }
