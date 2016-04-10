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


    // identity
    identify : function() {

        // console - log
        console.log(' I ' + this.identity);

        // return
        return true;

    },


    // | function(s)

        refresh : function(){

            // ajax - http
            $.ajax({
                        type:       "POST",
                        url:        "api.php?object=msgs&method=read_list",
                        success:    function(data) {

                            // debug
                            if( debug ){ console.log(data); }

                            // messages - length
                            var length = data["msgs"].length;

                            // messages - update - html
                            $( ".msgs-count" ).html( length );

                        },
                        context:    this,
                        error:      function() {

                            //  error - display
                            error.display_show('Unable to retrieve msg count.');

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
