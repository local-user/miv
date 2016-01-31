//
// | javascript - jquey - object - urls
//
//
//
//
//  Function(s)
//
//      -- refresh_count()
//
//
//
//
var urls = {




    // global(s)
    identity:       'js/jquery/object/urls.js',


    // identity
    identify : function() {

        // console - log
        console.log(' I ' + this.identity);

        // return
        return true;

    },


    // | function(s)

        reset : function() {

            // reset/empty
            $( "#urls" ).empty();

            // return
            return true;

        },

        resize : function() {

            // |  resize - by - width

                       var width = $(window).width();

                       if( width > 2200 ){
                    $( "#urls .url" ).css( "width", "24.25%" );
                    $( "#urls .url" ).css( "transition", "1s" );
                } else if( width > 1500 ){
                    $( "#urls .url" ).css( "width", "32.5%" );
                    $( "#urls .url" ).css( "transition", "1s" );
                } else if( width > 840 ){
                    $( "#urls .url" ).css( "width", "49.5%" );
                } else if( width > 420  ){
                    $( "#urls .url" ).css( "width", "99%" );
                }

            // resize - by - width |

            // return
            return true;

        },

        refresh : function(){

            // reset
            this.reset();

            // ajax - http
            $.ajax({
                        type:       "POST",
                        url:        "api.php?object=urls&method=read_list",
                        success:    function(data) {

                            // debug
                            if( debug ){ console.log(data); }

                            // urls
                            for( id in data['urls'] ){
                                url.append(data['urls'][id]);
                            }

                            // urls - resize
                            setTimeout( function() {
                                urls.resize();
                            }, 50);

                            // urls - turl
                            setTimeout( function() {
                                turl.load();
                            }, 1100);

                        },
                        context:    this,
                        error:      function() {

                            //  error - display
                            error.display_show('Unable to retrieve URLs.');

                        }
            });

            // return
            return true;

        },

        refresh_count : function(){

            // ajax - http
            $.ajax({
                        type:       "POST",
                        url:        "api.php?object=urls&method=read_count",
                        success:    function(data) {

                            // debug
                            if( debug ){ console.log(data); }

                            // urls - update - html - length
                            $( ".urls-count" ).html( data["urls"]["count"] );

                        },
                        context:    this,
                        error:      function() {

                            //  error - display
                            error.display_show('Unable to retrieve URLs count.');

                        }
            });

            // return
            return true;

        },

    // function(s) |




}
//
//
// js - jquery - toggle - urls |
//
if( debug ){ console.log(' . js/jquery/object/urls.js'); }
