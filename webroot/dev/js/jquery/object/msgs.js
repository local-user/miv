//
// | javascript - jquey - object - msgs
//
//
//
//
//  Function(s)
//
//      -- create( msgs )
//
//
//
//
var msgs = {




    // global(s)
    identity:       'js/jquery/object/msgs.js',
    messages:       'fuck',


    // identity
    identify : function() {

        // console - log
        console.log(' I ' + this.identity);

        // return
        return true;

    },


    // | function(s)

        refresh : function(){

            // var  - http
            var method = "POST";
            var action = "api.php";

            // ajax - http
            $.ajax({
                        type:       method,
                        url:        action,
                        data:       {
                                        request_method: 'read-msgs'
                                    },
                        success:    function(data) {

                            // debug
                            if( debug ){ console.log(data); }

                            // messages - update - html
                            $( ".msgs-count" ).html( data[0]['msgs'].length );

                        },
                        context:    this,
                        error:      function() {

                            //  error - display
                            error.display_msgs('Unable to retrieve message count.');

                        }
            });

            // return
            return true;

        },

    // function(s) |




}
//
//
// js - jquery - toggle - msgs |
//
if( debug ){ console.log(' . js/jquery/object/msgs.js'); }
