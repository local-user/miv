//
// | javascript - jquey - object - msg
//
//
//
//
//  Function(s)
//
//      -- create( code, msg )
//
//
//
//
var msg = {




    // global(s)
    identity:       'js/jquery/object/msg.js',




    // identity
    identify : function() {

        // console - log - identity
        console.log(' I ' + this.identity);

        // return
        return true;

    },


    // | function(s)

        create : function( code, msg ){

            // ajax
            $.ajax({

                        type:           "POST",
                        url:            "api.php",

                        beforeSend:     function (request) {
                                            request.setRequestHeader("Miv-Object", "msg");
                                            request.setRequestHeader("Miv-Method", "create");
                                        },
                        data:           {
                                            code:   code,
                                            msg:    msg
                                        },
                        error:          function() {
                                            error.display_show('Unable to create message.');
                                        }
            });

            // return
            return true;

        }

    // function(s) |




}
//
//
//
//
// js - jquery - toggle - msg |
//
if( debug ){ console.log(' . js/jquery/object/msg.js'); }
