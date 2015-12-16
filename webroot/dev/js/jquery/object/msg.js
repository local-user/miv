//
// | javascript - jquey - object - msg
//
//
//
//
//  Function(s)
//
//      -- create( msg )
//
//
//
//
var msg = {




    // global(s)
    identity:       'js/jquery/object/msg.js',


    // identity
    identify : function() {

        // console - log
        console.log(' I ' + this.identity);

        // return
        return true;

    },


    // | function(s)

        create : function( code, msg ){

            // var  - http
            var method = "POST";
            var action = "api.php";

            // ajax - http
            $.ajax({
                        type:       method,
                        url:        action,
                        data:       {
                                        request_method: 'create-msg',
                                                  code: code,
                                                   msg: msg
                                    },
                        error:      function() {

                            //  error - display
                            error.display('Unable to create message.');

                        }
            });

            // return
            return true;

        }

    // function(s) |




}
//
//
//  reference @ http://stackoverflow.com/questions/1960240/jquery-ajax-submit-form
//
// js - jquery - toggle - msg |
//
if( debug ){ console.log(' . js/jquery/object/msg.js'); }