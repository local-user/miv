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

        display_turl : function() {

            // urls - display - turl
            $( "#urls .url .turl" ).toggleClass("hidden");

            // return
            return true;

        },

        reset : function() {

            // reset/empty
            $( "#urls" ).empty();

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
