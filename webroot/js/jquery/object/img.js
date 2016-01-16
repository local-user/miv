//
// | javascript - jquey - object - img
//
//
//
//
//  Function(s)
//
//      -- create( img )
//
//
//
//
var img = {




    // global(s)
    identity:       'js/jquery/object/img.js',


    // identity
    identify : function() {

        // console - log - identity
        console.log(' I ' + this.identity);

        // return
        return true;

    },


    // | function(s)

        delete : function( id ){

            // this
            var thi = this;

            // ajax
            $.ajax({

                        type:           "POST",
                        url:            "api.php?object=img&method=delete",
                        data:           {
                                            id_url:   id
                                        },
                        success:        function(data) {
                                            if( debug ){ console.log(data); }
                                            msg.create( 200, 'Delete URL[' + id + ']' );
                                        },
                        error:          function() {
                                            msg.create( 400, 'Delete URL[' + id + ']' );
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
// js - jquery - toggle - img |
//
if( debug ){ console.log(' . js/jquery/object/img.js'); }
