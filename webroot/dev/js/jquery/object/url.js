//
// | javascript - jquey - object - url
//
//
//
//
//  Function(s)
//
//      -- create( url )
//
//
//
//
var url = {




    // global(s)
    identity:       'js/jquery/object/url.js',


    // identity
    identify : function() {

        // console - log
        console.log(' I ' + this.identity);

        // return
        return true;

    },


    // | function(s)

        create : function( url ){

            // var  - http - head
            var method = "POST";
            var action = "api.php";

            // var  - http - body
            var data   = $("#input-form").serialize();

            // ajax - http
            $.ajax({
                        type:       method,
                        url:        action,
                        data:       data,
                        success:    function(data) {

                            // debug
                            if( debug ){ console.log(data); }

                            // msg
                            msg.create( 200, 'Created URL[' + data[0]['url']['id'] + ']' );

                        },
                        error:      function() {

                            // msg
                            msg.create( 400, 'Create URL failed' );

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
// js - jquery - toggle - url |
//
if( debug ){ console.log(' . js/jquery/object/url.js'); }
