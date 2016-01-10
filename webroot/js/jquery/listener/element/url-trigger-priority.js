//
// | js - jquery - listener - element - 'url-trigger-priority'
//
//
//
//
//




        //  'url-trigger-priority-up' - trigger - url - priority - up
        $( document ).on('click', '.url-trigger-priority-up', function() {

            // this - url - id
            var id = $(this).parent().parent().parent().attr("data-url-id");

            // this - url - priority
            var priority = $("#url-" + id + " .priority").text();
                priority ++;

            // url - priority
            url.priority(id, priority);

            // return
            return true;

        });

        //  'url-trigger-priority-up' - trigger - url - priority - down
        $( document ).on('click', '.url-trigger-priority-down', function() {

            // this - url - id
            var id = $(this).parent().parent().parent().attr("data-url-id");

            // this - url - priority
            var priority = $("#url-" + id + " .priority").text();
                priority --;

            // url - priority
            url.priority(id, priority);

            // return
            return true;

        });




//
//
//
//
// js - jquery - listener - element - 'url-trigger-priority' |
//
if (debug) { console.log(' . js/jquery/listener/element/url-trigger-priority.js'); }
