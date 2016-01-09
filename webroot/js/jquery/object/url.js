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

        // console - log - identity
        console.log(' I ' + this.identity);

        // return
        return true;

    },


    // | function(s)

        create : function( url ){

            // ajax
            $.ajax({

                        type:           "POST",
                        url:            "api.php",
                        data:           $("#input-form").serialize(),

                        beforeSend:     function(request) {
                                            request.setRequestHeader("Miv-Object", "url");
                                            request.setRequestHeader("Miv-Method", "create");
                                        },
                        success:        function(data) {
                                            if( debug ){ console.log(data); }
                                            msg.create( 200, 'Created URL[' + data['url']['id'] + ']' );
                                        },
                        error:          function() {
                                            msg.create( 400, 'Create URL' );
                                        }
            });

            // return
            return true;

        },

        refresh : function( id ) {

            // ajax
            $.ajax({

                        type:           "POST",
                        url:            "api.php",

                        beforeSend:     function(request) {
                                            request.setRequestHeader("Miv-Object", "url");
                                            request.setRequestHeader("Miv-Method", "read");
                                        },
                        success:        function(data) {
                                            if( debug ){ console.log(data); }
                                        },
                        error:          function() {
                                            msg.create( 400, 'Read URL[' + id + ']' );
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
// js - jquery - toggle - url |
//
if( debug ){ console.log(' . js/jquery/object/url.js'); }
